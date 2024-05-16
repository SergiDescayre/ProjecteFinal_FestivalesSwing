import { useFestivalContext } from "../context/FestivalContext";

import Modal from "./Modal";

const ButtonDeleteFest = ({ fest, title }) => {
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
          className="btn btn-xs md:btn-sm bg-red-200 border-none "
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default ButtonDeleteFest;
