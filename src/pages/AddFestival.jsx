import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import FormAddFestival from "../components/FormAddFestival";
import Modal from "../components/Modal";
import { useFestivalContext } from "../context/FestivalContext";
import { useEffect } from "react";

const AddFestival = () => {
  const { setMessageModal } = useFestivalContext();
  const { isLogin } = useSelector((state) => state.authUser);
  const {t} = useTranslation("global")
  useEffect(() => {
    JSON.parse(localStorage.getItem("uid"))
      ? isLogin === true
      : showModalIsNotLogin();
  }, []);

  const showModalIsNotLogin = () => {
    document.getElementById("my_modal_5").showModal();
    setMessageModal(t("modal.addFestival"));
  };
  return (
    <div id="add_festival">
      <Modal />

      <FormAddFestival />
    </div>
  );
};

export default AddFestival;
