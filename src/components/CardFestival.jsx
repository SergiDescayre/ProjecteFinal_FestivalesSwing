import ButtonDeleteFav from "./ButtonDeleteFav";
import DateFestival from "./DateFestival";
import ButtonAddFavorite from "./ButtonAddFavorite";
import { useNavigate } from "react-router-dom";
import price from "../assets/price.svg";
import location from "../assets/location.svg";
import calendar from "../assets/calendar.svg";

const CardFestival = ({
  fest,
  showButtonDeleteFavorite,
  showButtonAddFavorite,
}) => {
  const auth = JSON.parse(localStorage.getItem("uid"));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/infoFestival/${fest.docId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer shadow-xl  ease-in-out rounded-md min-w-64  text-orange-200 overflow-hidden transition duration-300 transform hover:scale-95 "
    >
      <div
        className="flex items-end justify-end h-[150px] bg-cover bg-center overflow-hidden transition duration-300 ease-in-out"
        style={{ backgroundImage: "url(" + fest.img + ")" }}
      >
        <div className="flex">
          <div className="shadow bg-zinc-900 bg-opacity-80 m-2  p-2 rounded-full">
            {showButtonAddFavorite && <ButtonAddFavorite fest={fest} />}
            {showButtonDeleteFavorite && <ButtonDeleteFav fest={fest} />}
          </div>
        </div>
      </div>
      <div className=" bg-zinc-900">
        <div className="flex items-center justify-between p-3 gap-2">
          <div>
            <h2 className="uppercase w-[225px]  font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis  ">
              {fest.name}
            </h2>
            <span className="capitalize text-sm text-stone-200 ">
              {fest.city}
            </span>
          </div>
        </div>
        <div className="px-3 flex flex-col gap-2 py-4 text-stone-200">
          <div className="flex gap-2">
            <img className="w-4" src={location} alt="" />
            <span className="text-xs ">{fest.address}</span>
          </div>

          <div className="flex gap-2 text-xs">
            <img className="w-4" src={calendar} alt="" />
            <DateFestival date={fest.data_start} />
          </div>

          <div className="flex gap-2">
            <img className="w-4" src={price} alt="price" />
            <span className="text-xs">{fest.minPrice} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFestival;
