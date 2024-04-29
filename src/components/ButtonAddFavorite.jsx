import { useEffect, useState } from "react"
import heart from "../assets/heart.svg"
import heartFavorite from "../assets/heartFavorite.svg"
import appFirebase from "../credentials"
import { useSelector } from "react-redux"
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"
import { useFestivalContext } from "../context/FestivalContext"
import Modal from "./Modal"


const ButtonAddFavorite = ({ fest }) => {
  const { isLogin } = useSelector(state => state.authUser)
  const [isFavorite, setIsFavorite] = useState(false)
  const {deleteFavorite,addFavorite} = useFestivalContext()

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const handleFavorites = (id) => {
    setIsFavorite(!isFavorite)
    if (isLogin) {
      addFavorite(id,fest)
    } 

    if(isFavorite) {
      deleteFavorite(id)
    }
  }
  

  const checkFavoriteStatus = async () => {
    if (!isLogin) return; // Si el usuario no ha iniciado sesión, no hay favoritos que cargar

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

      if (!querySnapshot.empty) {

      setIsFavorite(true);
      }else(setIsFavorite(false))
    } catch (error) {
      console.error("Error al verificar el estado del favorito:", error);
    }
  };


  return (
    <div>
      <Modal />
      <img className="cursor-pointer" src={!isFavorite ? heart : heartFavorite} alt="favorites" onClick={() => handleFavorites(fest.docId)} />
    </div>
  )
}

export default ButtonAddFavorite
