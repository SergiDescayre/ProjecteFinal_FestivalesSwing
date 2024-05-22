import { useFestivalContext } from "../context/FestivalContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Modal from "./Modal";

const ButtonDeleteFest = ({ fest, title }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const { deleteFestival, getFestivals, deleteFavorite, setMessageModal } =
    useFestivalContext();

  const handleDelete = (id) => {
    document.getElementById("my_modal_5").showModal();
    setMessageModal(t("modal.deleteFestival"));
    deleteFestival(id);
    getFestivals();
    deleteFavorite(id);
    //navigate("/");
  };

  return (
    <>
      <Modal />
      <div>
        <button
          onClick={() => handleDelete(fest.docId)}
          className="btn btn-xs md:btn-sm bg-red-200 border-none "
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default ButtonDeleteFest;
