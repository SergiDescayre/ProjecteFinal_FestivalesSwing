import heartFavorite from "../assets/heartFavorite.svg"
import { useFestivalContext } from "../context/FestivalContext"

const ButtonDeleteFav = ({fest}) => {
   
   const {deleteFavorite} =  useFestivalContext()
    const handleFavorites =  (id) => {
        deleteFavorite(id)
    }
    
  return (
    <div onClick={() => handleFavorites(fest.id)}>
    <img src={heartFavorite} alt="trash" className="cursor-pointer"/>
    
</div>
  )
}

export default ButtonDeleteFav
