import { createContext, useContext, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  deleteDoc,
  addDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import appFirebase from "../credentials";

const FestivalContext = createContext();

const ContextProvider = ({ children }) => {
  const [festivals, setFestivals] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [infoFestival, setInfoFestival] = useState(null);
  const [error, setError] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [coords, setCoords] = useState([]);
  const [isFoundFestival, setIsFoundFestival] = useState(true);
  const [contentQuill, setContentQuill] = useState("");

  // State for adding festival
  const [festivalInfo, setFestivalInfo] = useState({});
  const [uploadFestival, setUploadFestival] = useState(false);
  const [image, setImage] = useState(null);
  const [teacher, setTeacher] = useState("");
  const [modality, setModality] = useState([]);
  const [listOfTeachers, setListOfTeachers] = useState([]);
  const [isUpload, setIsUpload] = useState(false);

  // Language for calendar
  const [language, setLanguage] = useState("");

  const { isLogin } = useSelector((state) => state.authUser);

  const getFilterModality = (modalityFilter) => {
    return festivals.filter((fest) => fest.modality.includes(modalityFilter));
  };

  // Upload image to storage and add festival
  const uploadImageToStorage = async () => {
    setUploadFestival(true);

    const auth = getAuth(appFirebase);
    const storage = getStorage();
    try {
      const storageRef = ref(storage, image.name);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      const db = getFirestore(appFirebase);
      const docRef = await addDoc(collection(db, "festivals"), {
        ...festivalInfo,
        userId: auth.currentUser.uid,
        img: imageUrl,
        listOfTeachers,
        isFavorite: false,
        attend: false,
        contentQuill,
        modality,
      });

      await updateDoc(doc(db, "festivals", docRef.id), {
        docId: docRef.id,
      });

      setImage(null);
      setUploadFestival(false);
      setIsUpload(true);
      setContentQuill("");
    } catch (error) {
      console.error("Error uploading image and adding festival:", error);
    }
  };

  // Add festival to favorites
  const addFavorite = async (id, fest) => {
    const auth = JSON.parse(localStorage.getItem("uid"));
    try {
      const db = getFirestore(appFirebase);
      const querySnapshot = await getDocs(
        query(
          collection(db, "favorites"),
          where("docId", "==", id),
          where("idUserFavorite", "==", auth)
        )
      );

      if (querySnapshot.empty) {
        await addDoc(collection(db, "favorites"), {
          ...fest,
          idUserFavorite: auth,
          isFavorite: true,
        });
        getFavorites();
      }
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  // Delete festival from Firestore
  const deleteFestival = async (id) => {
    const db = getFirestore(appFirebase);
    try {
      const q = query(collection(db, "festivals"), where("docId", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    } catch (error) {
      console.error("Error deleting festival:", error);
    }
  };

  // Delete favorite festival from Firestore
  const deleteFavorite = async (id) => {
    const db = getFirestore(appFirebase);
    try {
      const q = query(collection(db, "favorites"), where("id", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };

  // Get festival by document ID
  const getFestivalByDocId = async (docId) => {
    const db = getFirestore(appFirebase);
    try {
      const docRef = doc(db, "festivals", docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInfoFestival(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting festival by docId:", error);
    }
  };

  // Get all festivals
  const getFestivals = async () => {
    const db = getFirestore(appFirebase);
    try {
      const querySnapshot = await getDocs(collection(db, "festivals"));
      const arrayFestivals = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFestivals(arrayFestivals);
    } catch (error) {
      console.error("Error getting festivals:", error);
    }
  };

  // Get all favorite festivals
  const getFavorites = async () => {
    const auth = JSON.parse(localStorage.getItem("uid"));
    try {
      const db = getFirestore(appFirebase);
      const q = query(
        collection(db, "favorites"),
        where("idUserFavorite", "==", auth)
      );
      onSnapshot(q, (snapshot) => {
        const favoritesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFavorites(favoritesData);
      });
    } catch (error) {
      console.error("Error getting favorites:", error);
    }
  };

  // Check if festival is favorite
  const checkFavoriteStatus = async (fest) => {
    if (!isLogin) return;

    try {
      const auth = getAuth(appFirebase).currentUser.uid;
      const db = getFirestore(appFirebase);
      const querySnapshot = await getDocs(
        query(
          collection(db, "favorites"),
          where("docId", "==", fest.docId),
          where("idUserFavorite", "==", auth)
        )
      );

      setIsFavorite(!querySnapshot.empty);
    } catch (error) {
      console.error("Error checking favorite status:", error);
    }
  };

  // Get coordinates of cities
  const getCoords = async () => {
    const apiKey = "52bec998662d67728032b9a8a722ee73";
    try {
      const newArray = await Promise.all(
        festivals.map(async (city) => {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${apiKey}`
          );
          return response.json();
        })
      );
      setCoords(newArray);
      localStorage.setItem("coords", JSON.stringify(newArray));
    } catch (error) {
      console.error("Error getting coordinates:", error);
    }
  };

  return (
    <FestivalContext.Provider
      value={{
        festivals,
        favorites,
        infoFestival,
        error,
        messageModal,
        isFavorite,
        coords,
        isFoundFestival,
        contentQuill,
        festivalInfo,
        uploadFestival,
        image,
        teacher,
        modality,
        listOfTeachers,
        isUpload,
        language,
        setLanguage,
        setIsUpload,
        setListOfTeachers,
        setModality,
        setTeacher,
        setImage,
        setUploadFestival,
        uploadImageToStorage,
        setFestivalInfo,
        setContentQuill,
        setInfoFestival,
        setIsFoundFestival,
        getFavorites,
        deleteFestival,
        addFavorite,
        getCoords,
        deleteFavorite,
        setIsFavorite,
        setMessageModal,
        setError,
        setFestivals,
        getFestivalByDocId,
        getFestivals,
        setFavorites,
        getFilterModality,
        checkFavoriteStatus,
      }}
    >
      {children}
    </FestivalContext.Provider>
  );
};

export default ContextProvider;

export const useFestivalContext = () => useContext(FestivalContext);
