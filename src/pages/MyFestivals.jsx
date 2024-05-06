import { useEffect } from 'react'

import CardFestival from '../components/CardFestival';
import { useFestivalContext } from '../context/FestivalContext';
import NotFoundFestival from '../components/NotFoundFestival';

const MyFestivals = () => {
    const showButtonDeleteFavorite = true
    const {getFavorites,favorites} = useFestivalContext()
    
      useEffect(()=> {
        getFavorites()
      },[])
  
  return (
    <div className="h-[800px]">
    <div className ="flex flex-wrap gap-2 justify-center m-10">
    {favorites.length <=0 ? <NotFoundFestival />
    : favorites.map(fest => {
        return (
            <CardFestival key={fest.id} fest={fest} showButtonDeleteFavorite = {showButtonDeleteFavorite} />
        )
    })
    }
</div>

    </div>
  )
}

export default MyFestivals
