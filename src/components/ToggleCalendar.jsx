import { useTranslation } from "react-i18next";

const ToggleCalendar = ({ handleCheckBox }) => {
  const {t} = useTranslation("global")

  const handleCheck = (e) => {
    handleCheckBox(e.target.checked);
  };

  return (
    <div className="flex items-center gap-4 justify-center mb-3 md:justify-start md:mb-1">
      <span>{t("calendar.all")}</span>
      <input
        type="checkbox"
        value="Lindy Hop"
        className="toggle hover:bg-primary bg-primary border-orange-200 "
        onChange={handleCheck}
      />
      <span>{t("calendar.favorites")}</span>
    </div>
  );
};

export default ToggleCalendar;
