
import trash from '../assets/trash.svg'
import { useFestivalContext} from '../context/FestivalContext'


const ButtonDeleteFest = ({fest}) => {

    const {deleteFestival,getFestivals,deleteFavorite,favorites} =  useFestivalContext()

    const handleFestival =  (id) => {
        deleteFestival(id,)
        getFestivals()
        deleteFavorite(id)
    }
    
  return (
    <div onClick={() => handleFestival(fest.id)}>
    <img src={trash} alt="trash" className="cursor-pointer"/>
</div>
  )
}

export default ButtonDeleteFest