import { useFestivalContext } from "../context/FestivalContext";
import Modal from "./Modal";

import trash from "../assets/trash.svg";

const ButtonDeleteFest = ({ fest }) => {
  const { deleteFestival, getFestivals, deleteFavorite, setMessageModal } =
    useFestivalContext();

  const handleFestival = (id) => {
    document.getElementById("my_modal_5").showModal();
    setMessageModal("Festival eliminado");
    deleteFestival(id);
    getFestivals();
    deleteFavorite(id);
  };

  return (
    <>
      <Modal />
      <div onClick={() => handleFestival(fest.docId)}>
        <img src={trash} alt="trash" className="cursor-pointer" />
      </div>
    </>
  );
};

export default ButtonDeleteFest;
