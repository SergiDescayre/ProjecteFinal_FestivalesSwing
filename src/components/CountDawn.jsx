import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFestivalContext } from "../context/FestivalContext";
import { useNavigate } from "react-router-dom";

const CountDawn = ({ date, docId }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const { deleteFestival, deleteFavorite } = useFestivalContext();

  // Fecha de finalización del countdown
  const endDate = new Date(date).getTime();
  // Estado para almacenar el tiempo restante
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [lastTime, setLastTime] = useState(false);

  // Función para calcular el tiempo restante
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      distance,
    };
  }

  const showLastTime = () => {
    if (timeRemaining && timeRemaining.days === 0) {
      setLastTime(true);
    }
  };
  const deletePastFestivals = () => {
    deleteFestival(docId);
    deleteFavorite(docId);
    navigate("/");
  };

  // Función para actualizar el tiempo restante cada segundo
  useEffect(() => {
    showLastTime();
    if (timeRemaining.days === -1) {
      deletePastFestivals();
    }
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining.days]);
  return (
    <div className="grid grid-cols-4 gap-1 text-center p-3 ">
      <div
        className={`flex flex-col p-2  ${
          lastTime ? "text-red-500" : "text-secondary"
        }  items-center w-18 `}
      >
        <div className="flex flex-col items-center ">
          <span className="countdown text-2xl xl:text-3xl">
            {timeRemaining.days}
          </span>
          <span className="text-xs xl:text-sm text-primary ">
            {t("countDown.days")}
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col p-2 ${
          lastTime ? "text-red-500" : "text-secondary"
        }  items-center w-18 `}
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span style={{ "--value": timeRemaining.hours }}></span>
        </span>
        <span className="text-xs xl:text-sm text-primary">
          {t("countDown.hours")}
        </span>
      </div>
      <div
        className={`flex flex-col p-2 ${
          lastTime ? "text-red-500" : "text-secondary"
        }  items-center w-18 `}
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span style={{ "--value": timeRemaining.minutes }}></span>
        </span>
        <span className="text-xs xl:text-sm text-primary">
          {t("countDown.minutes")}
        </span>
      </div>
      <div
        className={`flex flex-col p-2 ${
          lastTime ? "text-red-500" : "text-secondary"
        }  items-center w-18 `}
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span style={{ "--value": timeRemaining.seconds }}></span>
        </span>
        <span className="text-xs xl:text-sm text-primary">
          {t("countDown.seconds")}
        </span>
      </div>
    </div>
  );
};

export default CountDawn;
