import React from "react";
import { useNavigate } from "react-router-dom";

const ModalCalendar = ({ event }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/infoFestival/${event.id}`);
  };

  const handleClose = (e) => {
    e.stopPropagation();
  };

  return (
    <dialog id="modal_calendar" className="modal modal-center">
      <div
        onClick={handleClick}
        className="flex flex-col w-[200px] modal-box bg-orange-100"
      >
        {event && (
          <div>
            <span className="text-xl text-zinc-900">{event.title}</span>
            <img className="mt-3 rounded-lg w-[150px]" src={event.img} alt="" />
          </div>
        )}
        <div className="">
          <form method="dialog ">
            <div className="flex justify-center">
              <button
                onClick={(e) => handleClose(e)}
                className="btn btn-sm mt-3 bg-zinc-900 text-orange-100 w-full mx-3 "
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ModalCalendar;
