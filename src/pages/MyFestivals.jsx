import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import appFirebase from '../credentials';

import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth';
import CardFestival from '../components/CardFestival';
import { useFestivalContext } from '../context/FestivalContext';


const MyFestivals = () => {
    const showButtonDeleteFavorite = true
    const {getFavorites,favorites} = useFestivalContext()
    console.log(favorites)

    // const [favorites ,setFavorites] = useState([])
    // const loadFavorites = async () => {
    //     const auth = JSON.parse(localStorage.getItem("uid"))
    //     try {
    //       const db = getFirestore(appFirebase);
    //       const favoritesRef = collection(db, "favorites");
    //       const q = query(favoritesRef, where("idUserFavorite", "==", auth));
    //       onSnapshot(q, (snapshot) => {
    //         const favoritesData = [];
    //         snapshot.forEach((doc) => {
    //           favoritesData.push({ id: doc.id, ...doc.data() });
    //         });
    //         setFavorites(favoritesData);
    //       });
    
    //     } catch (error) {
    //       console.error("Error al cargar favoritos:", error);
    //     }
    //   };

      useEffect(()=> {
        getFavorites()
      },[])
  

  return (
    <div className ="flex flex-wrap gap-10 justify-center m-10">
    {favorites.map(fest => {
        return (
            <CardFestival key={fest.id} fest={fest} showButtonDeleteFavorite = {showButtonDeleteFavorite} />
        )
    })}
</div>
  )
}

export default MyFestivals
