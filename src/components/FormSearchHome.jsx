import React, { useEffect, useState } from "react";
import { useFestivalContext } from "../context/FestivalContext";

const FormSearchHome = () => {
  const { setFestivals, festivals, getFestivals,setError,setIsFoundFestival } = useFestivalContext();
  const [city, setCity] = useState("");
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");

  useEffect(() => {
    return () => {getFestivals()
                   setError("") }
    ;
  }, [city,dataStart,dataEnd]);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const festivalFiltered = festivals.filter(
      (fest) => {
    
        if((fest.city.toLowerCase() === city.toLowerCase()|| city === "") 
        && new Date(fest.data_start) <= new Date(dataEnd)
        && new Date(fest.data_end) >= new Date(dataStart)){
        
            return fest
        }else{
          setIsFoundFestival(false)
          setError(`No hemos encontrado festivales en ${city} con estas fechas seleccionadas`)
        }
      }
    );
    setFestivals(festivalFiltered);

  
  };


  return (

      <form onSubmit={handleSubmit}>
      <div className="join w-[80%] mx-auto  join-vertical  lg:join-horizontal  flex items-center justify-center pb-10">
          <input
            name="city"
            className="input join-item w-full lg:w-40 "
            placeholder="¿Donde?"
            onChange={(e) => setCity(e.target.value)}
          />
        <label className="bg-white p-3 w-full lg:w-16 join-item">Desde:</label>
        <input
          id="data_start"
          className="input join-item w-full lg:w-40 "
          type="date"
          placeholder="fecha"
          onChange={(e) => setDataStart(e.target.value)}
          required
        />
        <label className="bg-white p-3 w-full lg:w-16 join-item">Hasta:</label>
        <input
          id="data_end"
          className="input join-item w-full lg:w-40"
          type="date"
          placeholder="fecha"
          onChange={(e) => setDataEnd(e.target.value)}
          required
        />
        <input
          type="submit"
          className="btn border-none join-item bg-orange-200 hover:bg-zinc-900 text-zinc-900 hover:text-orange-200 w-full lg:w-28"
        />
      </div>
      </form>
  
  );
};

export default FormSearchHome;
