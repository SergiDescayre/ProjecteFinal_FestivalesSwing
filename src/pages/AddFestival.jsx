import {useSelector}  from "react-redux"
import FormAddFestival from '../components/FormAddFestival'
import Modal from "../components/Modal"
import { useFestivalContext } from "../context/FestivalContext"
import { useEffect } from "react"

const AddFestival = () => {

  const {setMessageModal} = useFestivalContext()
  useEffect(()=>{
    showModalIsNotLogin()
  },[])

    const {isLogin} = useSelector(state => state.authUser)
    const showModalIsNotLogin = () => {
      if(!isLogin){
        document.getElementById("my_modal_5").showModal()
        setMessageModal("Debes estar registrado para añadir festival")
      }
    }
   
  return (
    <div>
      <Modal />
       <FormAddFestival />
    </div>

  )
}

export default AddFestival