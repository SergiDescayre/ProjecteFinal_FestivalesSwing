import { useTranslation } from "react-i18next";

const InputAddModalities = ({ handleCheckBox }) => {
  const { t } = useTranslation("global");
  return (
    <div className=" mt-5 text-center">
      <label className="text-primary uppercase ">
        {t("formAddFestival.modalities")}
      </label>
      <div className="flex justify-between  md:justify-around gap-2 mt-5">
        <div className="flex flex-col items-center">
          <span className="label-text text-primary mb-3">Lindy Hop</span>
          <input
            type="checkbox"
            value="Lindy Hop"
            className="toggle hover:bg-primary bg-primary border-orange-200"
            onChange={handleCheckBox}
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="label-text text-primary mb-3">Blues</span>
          <input
            type="checkbox"
            value="Blues"
            className="toggle  hover:bg-primary bg-primary border-orange-200"
            onChange={handleCheckBox}
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="label-text text-primary mb-3">Balboa</span>
          <input
            type="checkbox"
            value="Balboa"
            className="toggle hover:bg-primary bg-primary border-orange-200"
            onChange={handleCheckBox}
          />
        </div>
      </div>
    </div>
  );
};

export default InputAddModalities;
