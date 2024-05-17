import React, { useTransition } from "react";
import { months } from "../data/months";
import { useTranslation } from "react-i18next";

const DateFestival = ({ date }) => {
  const { t } = useTranslation("global");
  const arrayDate = date.split("-");
  const positionMonth = arrayDate[1];
  const dayTotal = arrayDate[2];
  const day = +dayTotal.slice(0, 2);
  const year = arrayDate[0];
  const month = months[+positionMonth - 1];

  return (
    <div className="flex gap-2 ">
      {day}
      {t("date.th")} {t("date.of")} {t(`months.${month}`)}, {year}
    </div>
  );
};

export default DateFestival;
