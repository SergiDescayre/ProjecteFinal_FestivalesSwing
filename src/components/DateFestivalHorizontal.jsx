import { useTranslation } from "react-i18next";
import { months } from "../data/months";

const DateFestivalHorizontal = ({ dateStart, dateEnd }) => {
  const { t } = useTranslation("global");

  dateStart = new Date(dateStart);

  const dayStart = dateStart.getDate();
  const monthStart = t(`months.${months[dateStart.getMonth() + 1]}`);
  const yearStart = dateStart.getFullYear();

  dateEnd = new Date(dateEnd);

  const dayEnd = dateEnd.getDate();
  const monthEnd = t(`months.${months[dateEnd.getMonth() + 1]}`);
  const yearEnd = dateEnd.getFullYear();

  return (
    <div>
      {monthStart === monthEnd ? (
        <div>
          {t("date.shortDate", { dayStart, dayEnd, monthStart, yearStart })}
        </div>
      ) : (
        <div>
          {t("date.longDate", {
            dayStart,
            monthStart,
            dayEnd,
            monthEnd,
            yearStart,
          })}
        </div>
      )}
    </div>
  );
};

export default DateFestivalHorizontal;
