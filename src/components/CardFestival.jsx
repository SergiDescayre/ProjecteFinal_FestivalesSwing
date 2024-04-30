import ButtonDeleteFav from "./ButtonDeleteFav";
import DateFestival from "./DateFestival";
import ButtonAddFavorite from "./ButtonAddFavorite";
import ButtonDeleteFest from "./ButtonDeleteFest"

import { useNavigate } from "react-router-dom";

import info from "../assets/info.svg"

import price from "../assets/price.svg";
import location from "../assets/location.svg";
const CardFestival = ({
  fest,
  showButtonDeleteFavorite,
  showButtonAddFavorite,
}) => {
  const auth = JSON.parse(localStorage.getItem("uid"));
  const navigate = useNavigate()

  const handleClick = () => {

    navigate(`infoFestival/${fest.docId}`)
  }
  return (
    <>
      <div className="shadow-xl transition duration-300 ease-in-out rounded-md min-w-64  text-orange-200 overflow-hidden ">
        <div
          className="h-[150px] bg-cover bg-center overflow-hidden transition duration-300 ease-in-out   "
          style={{ backgroundImage: "url(" + fest.img + ")" }}
        >
          <div className="flex justify-end">
            <div className="shadow bg-zinc-900 flex flex-col items-center m-2  px-1 py-2 rounded">
                {showButtonAddFavorite && <ButtonAddFavorite fest={fest} />}
                {showButtonDeleteFavorite && <ButtonDeleteFav fest={fest} />}
                <img onClick={handleClick}className="w-6 cursor-pointer" src={info} alt="" />
            </div>
          
          </div>
        </div>
        <div className=" bg-zinc-800">
          <div className="flex items-center justify-between p-3 gap-2">
            <div>
              <h2 className="uppercase w-[225px]  font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis  ">
                {fest.name}
              </h2>
              <span className="capitalize text-sm text-stone-200 ">{fest.city}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* {auth===fest.userId && <ButtonDeleteFest fest={fest} />} */}
              {/* {showButtonAddFavorite && <ButtonAddFavorite fest={fest} />}
              {showButtonDeleteFavorite && <ButtonDeleteFav fest={fest} />} */}
            </div>
          </div>
          <div className="px-3 flex flex-col gap-2 py-4 text-stone-200">
            <div className="flex gap-2">
              <img className="w-4" src={location} alt="" />
              <span className="text-xs ">C/ de los olmos 45</span>
            </div>

            <DateFestival date={fest.data_start}  />
            <div className="flex gap-2">
              <img className="w-4" src={price} alt="price" />
              <span className="text-xs">desde 125 €</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFestival;
