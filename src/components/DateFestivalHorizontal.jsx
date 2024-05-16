import { useTranslation } from "react-i18next";
import { months } from "../data/months";

const DateFestivalHorizontal = ({ dateStart, dateEnd }) => {
  const { t } = useTranslation("global");

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
          {dayStart}
          {t("date.th")} {t("date.to")} {dayEnd}
          {t("date.th")} {t("date.of")} {t(`months.${monthStart}`)}, {yearStart}
        </div>
      ) : (
        <div>
          {dayStart}
          {t("date.th")} {t("date.of")} {t(`months.${monthStart}`)}{" "}
          {t("date.to")} {dayEnd} {t("date.of")} {t(`months.${monthEnd}`)},
          {yearEnd}
        </div>
      )}
    </div>
  );
};

export default DateFestivalHorizontal;
