
import { months } from "../data/months";
import { useTranslation } from "react-i18next";

const DateFestival = ({ dateStart }) => {
  const { t } = useTranslation("global");
  dateStart = new Date(dateStart);
  const dayStart = dateStart.getDate();
  const monthStart = t(`months.${months[dateStart.getMonth()]}`);
  const yearStart = dateStart.getFullYear();

  return (
    <div className="flex gap-2 ">
      {t("date.cardDate", { dayStart, monthStart, yearStart })}
    </div>
  );
};

export default DateFestival;
