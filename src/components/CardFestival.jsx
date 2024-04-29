import ButtonDeleteFav from "./ButtonDeleteFav";

import CountDawn from "./CountDawn";
import DateFestival from "./DateFestival";
import { useNavigate } from "react-router-dom";
import info from "../assets/info.svg";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import replay from "../assets/replay.svg";
import DateFestivalHorizontal from "./DateFestivalHorizontal";
import ButtonAddFavorite from "./ButtonAddFavorite";
import ButtonDeleteFest from "./ButtonDeleteFest";

const CardFestival = ({
  fest,
  showButtonDeleteFavorite,
  showButtonAddFavorite,
}) => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const auth = JSON.parse(localStorage.getItem("uid"))
  console.log(auth)
  console.log(fest.docId)

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Face A */}
      <div className="card rounded min-w-72 h-72 text-orange-200 shadow-xl overflow-hidden">
        <div
          className="h-40 bg-cover bg-center "
          style={{ backgroundImage: "url(" + fest.img + ")" }}
        >
          <div className="flex justify-between m-2">
            <DateFestival date={fest.data_start} />
          </div>
        </div>
        <div className=" bg-zinc-900">
          <div className="flex items-center justify-between p-3 gap-2">
            <div>
              <h2 className="uppercase  w-full text-lg font-semibold  ">{fest.name}</h2>
              <span className="capitalize">{fest.city}</span>
            </div>
            <div className="flex items-center gap-2">
            
              {auth===fest.userId && <ButtonDeleteFest fest={fest} />}
              {showButtonAddFavorite && <ButtonAddFavorite fest={fest} />}
              
              {showButtonDeleteFavorite && <ButtonDeleteFav fest={fest} />}
              
              
              <img
                className="w-5"
                src={replay}
                alt="replay"
                onClick={handleFlip}
              />
            </div>
          </div>
          <div className="card-footer">
            <CountDawn date={fest.data_start} docId={fest.docId} />
          </div>
        </div>
      </div>
      <div className="card rounded min-w-72 h-72 border border-orange-200 bg-zinc-800 text-orange-200 shadow-xl overflow-hidden">
        <div className="flex justify-between items-center p-2 border-b border-orange-200">
          <img className="w-5 cursor-pointer" src={replay} alt="replay" onClick={handleFlip} />
          <span className="uppercase text-center">{fest.name}</span>
          <a href={fest.link} target="_blank">
            <img src={info} alt="more info" className="w-7 cursor-pointer" />{" "}
          </a>
        </div>
        <div className="flex flex-col h-full justify-around  items-center">
        <DateFestivalHorizontal dateStart = {fest.data_start} dateEnd = {fest.data_end} />
        <div className="text-center">
        <span className="uppercase mt-6">Modalidades</span>
        <div className = "flex justify-center gap-6">
          {fest.modality.map((item, index) => <span key={index}>{item}</span>)}
        </div>

        </div>
        <div className="text-center">
        <span className="uppercase mt-6">profesores</span>
        <div className = "flex flex-col items-center ">
          {fest.listOfTeachers.map((item, index) => <span key={index}>{item}</span>)}
        </div>

        </div>

        </div>
      </div>
    </ReactCardFlip>

  );
};

export default CardFestival;
