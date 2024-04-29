import { useEffect } from "react";
import { useFestivalContext } from "../context/FestivalContext";

import ListFestivalsModality from "../components/ListFestivalsModality";

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
    <ListFestivalsModality title={"LINDY HOP"} modality = {lindyHop} bg={"bg-stone-300"} color={"color-zinc-900"}  />
    <ListFestivalsModality title={"BLUES"} modality = {blues} color={"color-zinc-900"} />
    <ListFestivalsModality title={"BALBOA"} modality = {balboa} bg={"bg-stone-300"} />
    </>
   
  )
}

export default ListFestivals