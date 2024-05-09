import React, { useEffect, useState } from "react";
import ModalCalendar from "../components/ModalCalendar";
import { useFestivalContext } from "../context/FestivalContext";
import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import ToggleCalendar from "../components/ToggleCalendar";

dayjs.locale("es");

const CalendarFestivals = () => {
  const { festivals, favorites, getFavorites } = useFestivalContext();
  const localizer = dayjsLocalizer(dayjs);

  const [festivalModal, setFestivalModal] = useState(null);
  const [festivalToShow, setFestivalToShow] = useState(festivals);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
    getFavorites();
  }, [festivalToShow]);

  const messages = {
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
  };

  const handleEventClic = (event) => {
    document.getElementById("modal_calendar").showModal();
    setFestivalModal(event);
  };
  const handleCheckBox = (check) => {
    check ? setFestivalToShow(favorites) : setFestivalToShow(festivals);
  };

  const getEvents = () => {
    let events = [];
    festivalToShow.map((item) => {
      events.push({
        start: dayjs(item.data_start).toDate(),
        end: dayjs(item.data_end).toDate(),
        title: item.name,
        id: item.docId,
        img: item.img,
      });
    });
    setEvents(events);
  };

  console.log(events);
  return (
    <div className="w-[90%] mx-auto h-screen my-10 text-zinc-200 max-w-[1440px]">
      <ToggleCalendar handleCheckBox={handleCheckBox} />
      <Calendar
        localizer={localizer}
        events={events}
        views={["month"]}
        messages={messages}
        onSelectEvent={handleEventClic}
      />
      <ModalCalendar event={festivalModal} />
    </div>
  );
};

export default CalendarFestivals;
