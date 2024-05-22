import { useState } from "react";
import globe from "../assets/globe.svg";
import { languages } from "../data/languages.js";
import { useTranslation } from "react-i18next";
import { useFestivalContext } from "../context/FestivalContext.jsx";

const MultiLanguages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setLanguage } = useFestivalContext();
  const [initials, setInitials] = useState("CA");

  const { i18n } = useTranslation("global");

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleLanguage = (language) => {
    setLanguage(language);
    setInitials(language);

    i18n.changeLanguage(language);
    languages.map((lang) =>
      lang.language === language
        ? (lang.isActive = true)
        : (lang.isActive = false)
    );
    setIsVisible(false);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-primary uppercase">{initials}</span>
        <img
          onClick={handleClick}
          className="w-9 cursor-pointer"
          src={globe}
          alt="languages"
        />
      </div>
      {isVisible && (
        <div className="text-primary  ">
          <div className="flex flex-col md:flex-row justify-center absolute top-[70px] right-0 z-20 gap-2 md:w-[170px] bg-dark75 rounded">
            {languages.map((flag, index) => (
              <img
                onClick={() => handleLanguage(flag.language)}
                className={`${flag.isActive ? "border-2 rounded-full border-orange-200 m-1" : "m-1"} cursor-pointer  hover:rotate-180 hover:transition duration-0 hover:duration-700 ease-in-out  `}
                width={32}
                key={index}
                src={flag.img}
                alt={flag.language}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiLanguages;
