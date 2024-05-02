import React from "react";

import calendar from "../assets/calendar.svg";

const DateFestival = ({ date }) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const arrayDate = date.split("-");
  const positionMonth = arrayDate[1];
  const dayTotal = arrayDate[2];
  const day = +dayTotal.slice(0, 2);
  const year = arrayDate[0];
  const month = months[+positionMonth - 1];

  return (
    <div className="flex gap-2 ">
      <img className="w-4" src={calendar} alt="" />
      <span className="text-xs">
        {day} de {month} de {year}
      </span>
    </div>
  );
};

export default DateFestival;
