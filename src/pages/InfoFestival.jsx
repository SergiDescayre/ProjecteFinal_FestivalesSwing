import { useParams } from "react-router-dom"
import { useEffect } from "react"

import { useFestivalContext } from "../context/FestivalContext"
import { documentId } from "firebase/firestore"


const InfoFestival =  () => {
    const params = useParams()
    const {infoFestival,getFestivalByDocId} = useFestivalContext()
    useEffect(()=> {
        getFestivalByDocId(params.idFestival)
    },[])

    console.log(infoFestival.contentQuill)

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