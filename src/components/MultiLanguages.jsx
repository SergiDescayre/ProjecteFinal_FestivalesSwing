import { useState } from "react"
import globe from "../assets/globe.svg"
import {languages} from "../data/languages.js"

const MultiLanguages = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () =>  {
        setIsVisible(!isVisible)
    }
    
    console.log(languages)

  return (
    <div className="relative"  >
    <img onClick={handleClick} className="w-10 cursor-pointer" src={globe} alt="languages"/>
    <div className={`${isVisible ? "block" : "hidden"} text-orange-200 absolute top-12  z-10 right-13 `}>
        <div className="flex flex-col items-center gap-2 bg-zinc-950 bg-opacity-85  py-3 rounded ">
            {languages.map((flag,index) => {
                return <img className="w-6" key={index} src={flag.img} alt={flag.language} />
            })}
        </div>
    </div>
    
  </div>
  )
}

export default MultiLanguages
