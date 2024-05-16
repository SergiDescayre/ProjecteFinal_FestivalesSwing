import { useTranslation } from "react-i18next";

const DateFestivalHorizontal = ({ dateStart, dateEnd }) => {

const {t} = useTranslation("global")
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
          {t("date.from")} {dayStart}{t("date.th")} {t("date.to")} {dayEnd}{t("date.th")} {t("date.of")} {monthStart}, {yearStart}
        </div>
      ) : (
        <div>
        {t("date.from")} {dayStart}{t("date.th")} {t("date.of")} {monthStart} {t("date.to")} {dayEnd} {t("date.of")} {monthEnd},  {yearEnd}
        </div>
      )}
    </div>
  );
};

export default DateFestivalHorizontal;
