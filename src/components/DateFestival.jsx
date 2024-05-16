import React from "react";
import { months } from "../data/months";

const DateFestival = ({ date }) => {
  const arrayDate = date.split("-");
  const positionMonth = arrayDate[1];
  const dayTotal = arrayDate[2];
  const day = +dayTotal.slice(0, 2);
  const year = arrayDate[0];
  const month = months[+positionMonth - 1];

  return (
    <div className="flex gap-2 ">
      {day} de {month} de {year}
    </div>
  );
};

export default DateFestival;
