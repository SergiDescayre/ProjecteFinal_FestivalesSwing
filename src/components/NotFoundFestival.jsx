import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundFestival = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="card bg-dark75 shadow-xl flex flex-col items-center m-5 p-8 text-secondary max-w-[450px] w-[80%] mx-auto">
      <span>{t("favorites.noFavorites")}</span>
      <button
        className=" mt-10 btn btn-sm bg-primary border-none hover:bg-orange-100"
        onClick={handleClick}
      >
        {t("favorites.add")}
      </button>
    </div>
  );
};

export default NotFoundFestival;
