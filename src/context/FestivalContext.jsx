import { createContext, useContext, useState } from "react"
import appFirebase from "../credentials";
import { getFirestore, collection, getDocs, getDoc, doc, query, where, deleteDoc, addDoc,onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const FestivalContext = createContext()

const ContexProvider = ({ children }) => {

    const [festivals, setFestivals] = useState([])
    const [favorites ,setFavorites] = useState([])
    const [infoFestival ,setInfoFestival]  = useState({})
    const [error, setError] = useState("")
    const [messageModal, setMessageModal] = useState("")
    const [isFavorite, setIsFavorite] = useState(false)
    const [coords, setCoords] = useState([]);
    const [isFoundFestival ,setIsFoundFestival] = useState(true)
    const [contentQuill, setContentQuill] = useState('');

    const getFilterModality = (modalityFilter) => {
        return festivals.filter(fest=> fest.modality.includes(modalityFilter))
    }

    //Añadir Festival afavoritos

    const addFavorite = async (id,fest) => {
        const auth = JSON.parse(localStorage.getItem("uid"))
        try {
          const auth = getAuth(appFirebase).currentUser.uid
          const db = getFirestore(appFirebase);
          const querySnapshot = await getDocs(
            query(
              collection(db, "favorites"),
              where("docId", "==", id),
              where("idUserFavorite", "==", auth)
            )
          );
    
         
          // if (!querySnapshot.empty) {
          //   document.getElementById('my_modal_5').showModal()
          //   setMessageModal("El festival ya está en la lista de favoritos.");
          //   return;
          // }
          await addDoc(collection(db, "favorites"), {
            ...fest,
            idUserFavorite: auth,
            isFavorite: true
          });
          console.log("documento añadido")
        } catch (error) {
          console.error("Error al agregar favorito:", error);
        }
      };

    //Eliminar festival de firebase

    const deleteFestival = async (id) => {
        const firestore = getFirestore(appFirebase)
        try {
         
          const q = query(collection(firestore, 'festivals'), where('docId', '==', id));
  
          // Obtener documentos que cumplen con la condición
          const querySnapshot = await getDocs(q);
  
          // Para cada documento encontrado, eliminarlo
            querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
            console.log(`Documento eliminado con ID: ${doc.id}`);
          });
        } catch (error) {
          console.error('Error al eliminar documentos:', error);
        }
      };


    //Eliminar festival de favoritos
    
    const deleteFavorite = async (id) => {
        const firestore = getFirestore(appFirebase)
        try {
         
          const q = query(collection(firestore, 'favorites'), where('id', '==', id));
  
          // Obtener documentos que cumplen con la condición
          const querySnapshot = await getDocs(q);
  
          // Para cada documento encontrado, eliminarlo
            querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
            console.log(`Documento eliminado con ID: ${doc.id}`);
          });
        } catch (error) {
          console.error('Error al eliminar documentos:', error);
        }
      };



    //Traer festival po IdDoc para pintar la Info

    const getFestivalByDocId = async (docId) => {
        const db = getFirestore(appFirebase)
        try {
            const docRef = doc(db,"festivals",docId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const data = docSnap.data()
                setInfoFestival(data)
               
            } else {
                console.log("No such document!");
            }

        } catch (error) {
            console.log(error)
        }
    }
    

    //Traer festivales firebase

    const getFestivals = async () => {
        // Obtener una referencia a la base de datos Firestore
        const db = getFirestore(appFirebase);

        // Recuperar una colección de documentos
        const querySnapshot = await getDocs(collection(db, "festivals"));
        const arrayFestivals = []

        // Iterar sobre los documentos y acceder a los datos
        querySnapshot.forEach((doc) => {
            arrayFestivals.push({ id: doc.id, ...doc.data() })
        });
        setFestivals(arrayFestivals)
    };

    // Traer Favoritos de firebase 

    const getFavorites = async () => {
        const auth = JSON.parse(localStorage.getItem("uid"))
        try {
          const db = getFirestore(appFirebase);
          const favoritesRef = collection(db, "favorites");
          const q = query(favoritesRef, where("idUserFavorite", "==", auth));
          onSnapshot(q, (snapshot) => {
            const favoritesData = [];
            snapshot.forEach((doc) => {
              favoritesData.push({ id: doc.id, ...doc.data() });
            });
            setFavorites(favoritesData);
          });
    
        } catch (error) {
          console.error("Error al cargar favoritos:", error);
        }
      };

    // Petición para obtener cordenadas de las ciudades

    const getCoords = async () => {

        const apiKey = "52bec998662d67728032b9a8a722ee73";
        try {
            const newArray = []
            await Promise.all(festivals.map(async(city) => {
                const response = await fetch(
                  `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${apiKey}`
                );
                const data = await response.json();
                newArray.push(data)
            
              }))
              setCoords(newArray)
              localStorage.setItem("coords", JSON.stringify(newArray))
             

        } catch (error) {
            console.log(error)
        }
      
    }

    return ( 
        <FestivalContext.Provider
            value={{
                favorites,
                festivals,
                infoFestival,
                error,
                messageModal, 
                isFavorite,
                coords,
                isFoundFestival ,
                contentQuill,
                setContentQuill,
            
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
            }}>
            {children}
        </FestivalContext.Provider>
    )
}

export default ContexProvider

export const useFestivalContext = () => useContext(FestivalContext) 