import { useState } from "react"
import globe from "../assets/globe.svg"
import { languages } from "../data/languages.js"
import { useTranslation } from "react-i18next"

const MultiLanguages = () => {
  const [isVisible, setIsVisible] = useState(false)

  const {i18n} =useTranslation("global")

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleLanguage = (language) => {
    console.log(language)
    i18n.changeLanguage(language)
    languages.map(lang => lang.language === language ? lang.isActive = true : lang.isActive = false )
    setIsVisible(false)
  }



  return (
    <div>
        <img onClick={handleClick} className="w-9 cursor-pointer" src={globe} alt="languages" />
      {isVisible && <div className="text-orange-200  ">
        <div className="flex flex-col md:flex-row justify-center absolute top-[70px] right-0 z-20 gap-2 md:w-[170px] bg-zinc-900 rounded">
          {languages.map((flag, index) => {
            return <img onClick={() => handleLanguage(flag.language)} className={`${flag.isActive ?"border-2 rounded-full border-orange-200 m-1" : "m-1"} `} width={32} key={index} src={flag.img} alt={flag.language} />
          })}
        </div>
      </div>
      }

    </div>


  )
}

export default MultiLanguages