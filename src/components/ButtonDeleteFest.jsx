import { useFestivalContext } from "../context/FestivalContext";

import Modal from "./Modal";

const ButtonDeleteFest = ({ fest }) => {
  const { deleteFestival, getFestivals, deleteFavorite, setMessageModal } =
    useFestivalContext();

  const handleDelete = (id) => {
    document.getElementById("my_modal_5").showModal();
    setMessageModal("Festival eliminado");
    deleteFestival(id);
    getFestivals();
    deleteFavorite(id);
  };

  return (
    <>
      <Modal />
      <div>
        <button
          onClick={() => handleDelete(fest.docId)}
          className="btn btn-sm bg-red-200 border-none "
        >
          Eliminar
        </button>
      </div>
    </>
  );
};

export default ButtonDeleteFest;
