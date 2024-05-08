import { useSelector } from "react-redux";
import FormAddFestival from "../components/FormAddFestival";
import Modal from "../components/Modal";
import { useFestivalContext } from "../context/FestivalContext";
import { useEffect } from "react";

const AddFestival = () => {
  const { setMessageModal } = useFestivalContext();
  const { isLogin } = useSelector((state) => state.authUser);

  useEffect(() => {
    JSON.parse(localStorage.getItem("uid"))
      ? isLogin === true
      : showModalIsNotLogin();
  }, []);
  const showModalIsNotLogin = () => {
    document.getElementById("my_modal_5").showModal();
    setMessageModal("Debes estar registrado para añadir festival");
  };
  return (
    <div>
      <Modal />

      <FormAddFestival />
    </div>
  );
};

export default AddFestival;
