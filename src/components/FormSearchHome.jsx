import React, { useEffect, useState } from "react";
import { useFestivalContext } from "../context/FestivalContext";
import { useTranslation } from "react-i18next";

const FormSearchHome = () => {
  const { t } = useTranslation("global");

  const {
    setFestivals,
    festivals,
    getFestivals,
    setError,
    setIsFoundFestival,
  } = useFestivalContext();
  const [city, setCity] = useState("");
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");

  useEffect(() => {
    return () => {
      getFestivals();
      setError("");
    };
  }, [city, dataStart, dataEnd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const festivalFiltered = festivals.filter((fest) => {
      if (
        (fest.city.toLowerCase() === city.toLowerCase() || city === "") &&
        new Date(fest.data_start) <= new Date(dataEnd) &&
        new Date(fest.data_end) >= new Date(dataStart)
      ) {
        return fest;
      } else {
        setIsFoundFestival(false);
        if (city === "") {
          setError(t("noFestival.noCity"));
        } else {
          setError(t("noFestival.noFestival", { city }));
        }
      }
    });
    setFestivals(festivalFiltered);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="join w-[80%] mx-auto  join-vertical  md:join-horizontal  flex items-center justify-center pb-10 md:pb-10">
        <input
          name="city"
          className="input join-item w-full md:w-40 "
          placeholder={t("search.where")}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className="bg-white p-3 w-full md:w-[70px] join-item">
          {t("search.from")}:
        </label>
        <input
          id="data_start"
          className="input join-item w-full md:w-40 "
          type="date"
          onChange={(e) => setDataStart(e.target.value)}
          required
        />
        <label className="bg-white p-3 w-full md:w-16 join-item">
          {t("search.to")}:
        </label>
        <input
          id="data_end"
          className="input join-item w-full md:w-40"
          type="date"
          onChange={(e) => setDataEnd(e.target.value)}
          required
        />
        <input
          type="submit"
          value={t("search.search")}
          className="btn border-none join-item bg-primary hover:bg-dark75 text-dark75 hover:text-primary w-full md:w-28"
        />
      </div>
    </form>
  );
};

export default FormSearchHome;
