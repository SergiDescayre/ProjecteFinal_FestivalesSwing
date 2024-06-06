import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ModalCalendar = ({ event }) => {
  const { t } = useTranslation("global");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/infoFestival/${event.id}`);
  };

  return (
    <dialog id="modal_calendar" className="modal">
      <div className="modal-box w-[250px] min-h-[350px] bg-orange-100">
        {event && (
          <div className="flex flex-col justify-between items-center h-[300px]">
            <span className="text-xl font-semibold text-zinc-900">
              {event.title}
            </span>
            <img
              className="rounded-lg w-[200px] -mt-6"
              src={event.img}
              alt="event"
            />
            <button
              onClick={handleClick}
              className="btn btn-sm w-full text-secondary bg-dark100 hover:bg-dark50"
            >
              {t("calendar.go")}
            </button>
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
