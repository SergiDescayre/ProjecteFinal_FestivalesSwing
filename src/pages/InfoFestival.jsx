import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useFestivalContext } from "../context/FestivalContext";
import DateFestivalHorizontal from "../components/DateFestivalHorizontal";
import Loading from "../components/Loading";
import ButtonDeleteFest from "../components/ButtonDeleteFest";

import calendar from "../assets/calendar.svg";
import price from "../assets/price.svg";
import location from "../assets/location.svg";

const InfoFestival = () => {
  const params = useParams();

  const user = JSON.parse(localStorage.getItem("uid"));

  const { setInfoFestival, infoFestival, getFestivalByDocId } =
    useFestivalContext();
  useEffect(() => {
    getFestivalByDocId(params.idFestival);
    return () => setInfoFestival("");
  }, []);

  return (
    <>
      {!infoFestival ? (
        <Loading title={"Cargando..."} />
      ) : (
        <div className="w-full bg-zinc-800 text-zinc-200 ">
          <div className="text-center p-5">
            <span className="text-orange-200 uppercase font-semibold mt-5 mb-3 ">
              {infoFestival.name}
            </span>
          </div>
          <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto px-3">
            <div>
              <img
                src={infoFestival.img}
                alt="image"
                className="overflow-hidden md:object-cover md:h-[320px] md:w-[420px]  lg:w-[520px]  xl:w-[620px] xl:h-[400px]  mx-auto rounded-lg  "
              />
            </div>

            <div className="flex flex-col justify-between gap-2 p-5 xl:pl-20 flex-grow ">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <img className="w-4 lg:w-6" src={location} alt="" />
                    <span className="text-xs xl:text-lg capitalize ">
                      {infoFestival.address} - {infoFestival.city} -{" "}
                      {infoFestival.CP}
                    </span>
                  </div>
                  <div>
                    {user === infoFestival.userId && (
                      <ButtonDeleteFest fest={infoFestival} />
                    )}
                  </div>
                </div>

                <div className="flex gap-2 text-xs xl:text-lg">
                  <img className="w-4 lg:w-6" src={calendar} alt="" />
                  <DateFestivalHorizontal
                    dateStart={infoFestival.data_start}
                    dateEnd={infoFestival.data_end}
                  />
                </div>

                <div className="flex gap-2">
                  <img className="w-4 lg:w-6" src={price} alt="price" />
                  <span className="text-xs xl:text-lg">
                    Desde {infoFestival.minPrice} € hasta{" "}
                    {infoFestival.maxPrice} €
                  </span>
                </div>
              </div>

              <div>
                <span className="block mt-5 mb-2  xl:text-xl text-orange-200">
                  Modalidades
                </span>
                <ul>
                  {infoFestival.modality.map((item) => (
                    <li className="text-xs xl:text-xl ms-2"> -{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="block mt-5 mb-2  xl:text-xl text-orange-200">
                  Profesores
                </span>
                <ul>
                  {infoFestival.listOfTeachers.map((item) => (
                    <li className="text-xs xl:text-xl ms-2"> -{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div id="content_quill">
            {/* <div
              dangerouslySetInnerHTML={{ __html: infoFestival.contentQuill }}
            ></div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default InfoFestival;
