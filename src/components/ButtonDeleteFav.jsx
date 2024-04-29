import { useFestivalContext } from "../context/FestivalContext"

import trash from "../assets/trash.svg"

const ButtonDeleteFav = ({fest}) => {
   
   const {deleteFavorite} =  useFestivalContext()
    const handleFavorites =  (id) => {
        deleteFavorite(id)
    }
    
  return (
    <div onClick={() => handleFavorites(fest.id)}>
    <img src={trash} alt="trash" className="cursor-pointer"/>
    
</div>
  )
}

export default ButtonDeleteFav
