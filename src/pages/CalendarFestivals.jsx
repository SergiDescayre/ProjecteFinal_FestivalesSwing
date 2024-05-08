import React from "react";
import { useFestivalContext } from "../context/FestivalContext";
import { Calendar,dayjsLocalizer } from "react-big-calendar";
import { useNavigate } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from "dayjs";
import "dayjs/locale/es"

dayjs.locale("es")

const CalendarFestivals = () => {
  const { festivals } = useFestivalContext()
  const localizer =  dayjsLocalizer(dayjs)
  const navigate = useNavigate()
  console.log(festivals)

  const messages = {
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
};

  const handleEventClic =  (event) => {
    console.log(event.id)
    navigate(`/infoFestival/${event.id}`)
  }

  const events = []

  festivals.map(item => {
    events.push({
      start:dayjs(item.data_start).toDate(),
      end:dayjs(item.data_end).toDate(),
      title:item.name,
      id:item.docId
   
    })

  })
  return(
    <div className="w-[90%] mx-auto h-screen my-10 text-orange-200 max-w-[1440px]">
      <Calendar
      localizer={localizer} 
      events ={events}
      views={["month"]}
      messages={messages}
      onSelectEvent={handleEventClic}
      />
    </div>
  )
};

export default CalendarFestivals;
