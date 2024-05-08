import React, { useState } from "react";
import ModalCalendar from "../components/ModalCalendar";
import { useFestivalContext } from "../context/FestivalContext";
import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const CalendarFestivals = () => {
  const { festivals } = useFestivalContext();
  const localizer = dayjsLocalizer(dayjs);

  const [festivalModal, setFestivalModal] = useState(null);

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

  const events = [];

  festivals.map((item) => {
    events.push({
      start: dayjs(item.data_start).toDate(),
      end: dayjs(item.data_end).toDate(),
      title: item.name,
      id: item.docId,
      img: item.img,
    });
  });
  return (
    <div className="w-[90%] mx-auto h-screen my-10 text-orange-200 max-w-[1440px]">
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
