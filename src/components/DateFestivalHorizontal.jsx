import React from "react";

const DateFestivalHorizontal = ({ dateStart, dateEnd }) => {
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
  const arrayDateStart = dateStart.split("-");
  const positionMonthStart = arrayDateStart[1];
  const dayTotalStart = arrayDateStart[2];

  const dayStart = +dayTotalStart.slice(0, 2);
  const yearStart = arrayDateStart[0];
  const monthStart = months[+positionMonthStart - 1];

  const arrayDateEnd = dateEnd.split("-");
  const positionMonthEnd = arrayDateEnd[1];
  const dayTotalEnd = arrayDateEnd[2];

  const dayEnd = +dayTotalEnd.slice(0, 2);
  const yearEnd = arrayDateEnd[0];
  const monthEnd = months[+positionMonthEnd - 1];

  return (
    <div>
      {monthStart === monthEnd ? (
        <div>
          {dayStart} a {dayEnd} de {monthStart} de {yearStart}
        </div>
      ) : (
        <div>
          {dayStart} de {monthStart} a {dayEnd} de {monthEnd} de {yearEnd}
        </div>
      )}
    </div>
  );
};

export default DateFestivalHorizontal;
