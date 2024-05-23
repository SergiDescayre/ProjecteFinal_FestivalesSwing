import { useTranslation } from "react-i18next";

const InputAddFestival = ({ type, label, name, handleChange }) => {
  const { t } = useTranslation("global");
  return (
    <div className="w-full">
      <label className="text-primary " htmlFor={label}>
        {t(`formAddFestival.${label}`)}
      </label>
      <input
        id={name}
        name={name}
        className="input input-bordered w-full"
        type={type}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputAddFestival;
