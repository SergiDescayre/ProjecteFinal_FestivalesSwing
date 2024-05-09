import React from "react";
import { useNavigate } from "react-router-dom";

const ModalCalendar = ({ event }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/infoFestival/${event.id}`);
  };

  return (
    <dialog id="modal_calendar" className="modal">
      <div className="modal-box flex flex-col w-[200px] bg-orange-100">
        {event && (
          <div>
            <span className="text-xl text-zinc-900">{event.title}</span>
            <img
              onClick={handleClick}
              className="mt-3 rounded-lg w-[150px]"
              src={event.img}
              alt="event"
            />
          </div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ModalCalendar;
