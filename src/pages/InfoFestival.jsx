import { useParams } from "react-router-dom"
import { useEffect } from "react"

import { useFestivalContext } from "../context/FestivalContext"



const InfoFestival =  () => {
    const params = useParams()
    const {setInfoFestival,infoFestival,getFestivalByDocId} = useFestivalContext()
    useEffect(()=> {
        getFestivalByDocId(params.idFestival)
        return () => setInfoFestival("")
    },[])

  return ( 
    <div>
    {infoFestival.name}
    <div  id="content_quill">
    <div dangerouslySetInnerHTML={{__html: infoFestival.contentQuill}}></div>
    </div>
    </div>
  )
}

export default InfoFestival