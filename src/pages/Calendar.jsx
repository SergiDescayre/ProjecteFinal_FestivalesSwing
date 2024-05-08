import React from "react";
import { useFestivalContext } from "../context/FestivalContext";

const Calendar = () => {
  const { festivals } = useFestivalContext()
  console.log(festivals)
  return(
    <div>calendar</div>
  )
};

export default Calendar;
