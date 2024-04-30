import { useEffect } from "react";
import { useFestivalContext } from "../context/FestivalContext";

import ListFestivalsModality from "./ListFestivalsModality";

const ListFestivals = () => {
    const {getFestivals, festivals} = useFestivalContext()
    useEffect(() => {
        getFestivals()
    }, [])


    const lindyHop = festivals.filter(fest => fest.modality.includes("Lindy Hop"))

    const balboa = festivals.filter(fest => fest.modality.includes("Balboa"))

    const blues = festivals.filter(fest => fest.modality.includes("Blues"))
  
  return (
    <>
    <ListFestivalsModality title={"LINDY HOP"} modality = {lindyHop}/>
    <ListFestivalsModality title={"BLUES"} modality = {blues}/>
    <ListFestivalsModality title={"BALBOA"} modality = {balboa}/>
    </>
   
  )
}

export default ListFestivals