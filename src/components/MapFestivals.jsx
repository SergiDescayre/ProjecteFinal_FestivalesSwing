import { useEffect, useState } from "react";
import { useFestivalContext } from "../context/FestivalContext";
import { MapContainer, TileLayer, useMap,Marker,Popup, } from 'react-leaflet'

import { divIcon } from "leaflet";

const MapFestivals = () => {
  const { getCoords, festivals } = useFestivalContext();

  const position = [51.505, -0.09]

  useEffect(() => {
    !JSON.parse(localStorage.getItem("coords")) ? getCoords() : null;
  }, []);

  const localCords = JSON.parse(localStorage.getItem("coords"));
  // console.log(localCords)
  const nameFestivals = festivals.map((item) => item.name);
  // console.log(nameFestivals)

  return (
<div>
  Hola
</div>
)

    
};

export default MapFestivals;
