import { useEffect, useState } from "react";
import { useFestivalContext } from "../context/FestivalContext";

const MapFestivals = () => {
  const { getCoords, festivals } = useFestivalContext();

  useEffect(() => {
    !JSON.parse(localStorage.getItem("coords")) ? getCoords() : null;
  }, []);

  const localCords = JSON.parse(localStorage.getItem("coords"));
  // console.log(localCords)
  const nameFestivals = festivals.map((item) => item.name);
  // console.log(nameFestivals)

  return <div>Hola</div>;
};

export default MapFestivals;
