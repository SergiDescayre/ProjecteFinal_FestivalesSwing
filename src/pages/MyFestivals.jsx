import { useEffect } from 'react'

import CardFestival from '../components/CardFestival';
import { useFestivalContext } from '../context/FestivalContext';

const MyFestivals = () => {
    const showButtonDeleteFavorite = true
    const {getFavorites,favorites} = useFestivalContext()
    
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
