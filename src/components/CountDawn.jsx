import {
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import appFirebase from "../credentials";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CountDawn = ({ date, docId }) => {
  const { t } = useTranslation("global");
  const firestore = getFirestore(appFirebase);
  const navigate = useNavigate();

  // Fecha de finalización del countdown
  const endDate = new Date(date).getTime();
  // Estado para almacenar el tiempo restante
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [lastTime, setLastTime] = useState(false);
  const [deleteFest, setDeleteFest] = useState(false);

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
    if (timeRemaining.distance < 0) {
      deleteFestival();
    }
  };
  const deleteFestival = async () => {
    try {
      const q = query(
        collection(firestore, "festivals"),
        where("docId", "==", docId)
      );

      // Obtener documentos que cumplen con la condición
      const querySnapshot = await getDocs(q);

      // Para cada documento encontrado, eliminarlo
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    } catch (error) {
      console.error("Error al eliminar documentos:", error);
    }
  };

  // Función para actualizar el tiempo restante cada segundo
  useEffect(() => {
    showLastTime();
    deletePastFestivals();
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-1 text-center p-3 ">
      <div
        className={`flex flex-col p-2  ${
          lastTime ? "text-red-500" : "text-zinc-200"
        }  items-center w-18 `}
      >
        <div className="flex flex-col items-center ">
          <span className="countdown text-2xl xl:text-3xl">
            {timeRemaining.days}
          </span>
          <span className="text-xs xl:text-sm text-orange-200 ">
            {t("countDown.days")}
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col p-2 ${
          lastTime ? "text-red-500" : "text-zinc-200"
        }  items-center w-18 `}
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span style={{ "--value": timeRemaining.hours }}></span>
        </span>
        <span className="text-xs xl:text-sm text-orange-200">
          {t("countDown.hours")}
        </span>
      </div>
      <div
        className={`flex flex-col p-2 ${
          lastTime ? "text-red-500" : "text-zinc-200"
        }  items-center w-18 `}
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span style={{ "--value": timeRemaining.minutes }}></span>
        </span>
        <span className="text-xs xl:text-sm text-orange-200">
          {t("countDown.minutes")}
        </span>
      </div>
      <div
        className={`flex flex-col p-2 ${
          lastTime ? "text-red-500" : "text-zinc-200"
        }  items-center w-18 `}
      >
        <span className="countdown text-2xl xl:text-3xl">
          <span style={{ "--value": timeRemaining.seconds }}></span>
        </span>
        <span className="text-xs xl:text-sm text-orange-200">
          {t("countDown.seconds")}
        </span>
      </div>
    </div>
  );
};

export default CountDawn;
