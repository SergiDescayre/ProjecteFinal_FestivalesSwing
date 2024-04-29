import { useFestivalContext } from "../context/FestivalContext"
import { useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"


const Modal = () => {

const {messageModal} = useFestivalContext()

const {isLogin} = useSelector(state => state.authUser )

const navigate = useNavigate()

const handleRegister = () => {
    navigate("/login")
}

const handleClose = () => {
  navigate("/")
}

const handleScape = (event) => {
  if(event.key === "Escape"){
    navigate("/")
  }
}

  return (
   
    <dialog onKeyDown={handleScape} id="my_modal_5" className="modal modal-center">
    <div className="modal-box bg-zinc-800">
    <span className="py-2 text-lg text-orange-200">{messageModal}</span>
    <div className="modal-action">
      <form method="dialog">
      
       
        {!isLogin && <button onClick={handleRegister} className="btn text-orange-200 btn-outline">Registrarse</button>}
        <button onClick={handleClose} className="btn bg-orange-200 mx-3 ">Cerrar</button>
      </form>
    </div>
  </div>
</dialog>
  )
}

export default Modal
