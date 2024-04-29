import ButtonDeleteFav from "./ButtonDeleteFav";
import DateFestival from "./DateFestival";
import ButtonAddFavorite from "./ButtonAddFavorite";
import ButtonDeleteFest from "./ButtonDeleteFest"

import price from "../assets/price.svg";
import location from "../assets/location.svg";
const CardFestival = ({
  fest,
  showButtonDeleteFavorite,
  showButtonAddFavorite,
}) => {
  const auth = JSON.parse(localStorage.getItem("uid"));

  return (
    <>
      <div className="shadow-xl cursor-pointer transition duration-300 ease-in-out rounded-md min-w-60  text-orange-200 overflow-hidden ">
        <div
          className="h-[150px] bg-cover bg-center overflow-hidden transition duration-300 ease-in-out  "
          style={{ backgroundImage: "url(" + fest.img + ")" }}
        >
          <div className="flex justify-end m-2">
          {showButtonAddFavorite && <ButtonAddFavorite fest={fest} />}
          {showButtonDeleteFavorite && <ButtonDeleteFav fest={fest} />}
          </div>
        </div>
        <div className=" bg-zinc-800">
          <div className="flex items-center justify-between p-3 gap-2">
            <div>
              <h2 className="uppercase  w-full font-semibold  ">
                {fest.name}
              </h2>
              <span className="capitalize text-sm ">{fest.city}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* {auth===fest.userId && <ButtonDeleteFest fest={fest} />} */}
         
            </div>
          </div>
          <div className="px-3 flex flex-col gap-2 py-4">
            <div className="flex gap-2">
              <img className="w-4" src={location} alt="" />
              <span className="text-xs">C/ de los olmos 45</span>
            </div>

            <DateFestival date={fest.data_start} />
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
