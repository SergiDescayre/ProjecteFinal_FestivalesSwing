import { useTranslation } from "react-i18next";
const InputAddImage = ({ image, setImage }) => {
  const { t } = useTranslation("global");
  return (
    <div className="w-full">
      <label className="block text-primary" htmlFor="image">
        {t("formAddFestival.image")}
      </label>
      {!image ? (
        <label
          htmlFor="image"
          className="btn w-full text-zinc-900 bg-primary border-none hover:bg-orange-100"
        >
          {t("formAddFestival.uploadFile")}
        </label>
      ) : (
        <label
          htmlFor="image"
          className="btn w-full text-zinc-900 bg-primary border-none hover:bg-orange-100"
        >
          {t("formAddFestival.uploadedFile")}
        </label>
      )}

      <input
        id="image"
        type="file"
        className="file-input file-input-bordered  w-full hidden"
        onChange={(e) => setImage(e.target.files[0])}
      />
    </div>
  );
};

export default InputAddImage;
