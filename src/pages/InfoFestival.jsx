import { useParams } from "react-router-dom"
import { useEffect } from "react"

import { useFestivalContext } from "../context/FestivalContext"


const InfoFestival =  () => {
    const params = useParams()
    const {infoFestival,getFestivalByDocId} = useFestivalContext()
    useEffect(()=> {
        getFestivalByDocId(params.idFestival)
    })



  return ( 
    <div>{infoFestival.name}

    </div>
  )
}

export default InfoFestival