import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useFestivalContext } from "../context/FestivalContext";
import DateFestivalHorizontal from "../components/DateFestivalHorizontal";
import Loading from "../components/Loading";
import ButtonDeleteFest from "../components/ButtonDeleteFest";

import calendar from "../assets/calendar.svg";
import price from "../assets/price.svg";
import location from "../assets/location.svg";
import ListFestivalsModality from "../components/ListFestivalsModality";
import ShareEvent from "../components/ShareEvent";
import ButtonComeBack from "../components/ButtonComeBack";
import CountDawn from "../components/CountDawn";

const InfoFestival = () => {
  const params = useParams();
  console.log(params.idFestival);
  const user = JSON.parse(localStorage.getItem("uid"));
  const {
    setInfoFestival,
    infoFestival,
    getFestivalByDocId,
    festivals,
    deleteFestival,
  } = useFestivalContext();

  useEffect(() => {
    getFestivalByDocId(params.idFestival);
    return () => setInfoFestival("");
  }, [params.idFestival]);
  console.log(infoFestival);

  return (
    <>
      {!infoFestival ? (
        <Loading title={"Cargando..."} />
      ) : (
        <div className="w-full bg-zinc-800 text-zinc-200 max-w-[1440px] mx-auto ">
          <div className="w-[80%] text-center flex items-center justify-between mx-auto">
            <span className="text-orange-200 uppercase font-semibold mt-5 mb-3 md:text-2xl xl:text-4xl x:mb-5">
              {infoFestival.name}
            </span>
            <ButtonComeBack />
          </div>

          <div className="flex flex-col md:flex-row w-[80%] max-w-[1440px] mx-auto">
            <div className="mb-4">
              <div className="relative transition duration-300 transform hover:scale-95 ease-in-out">
                <div className="bottom-3  right-3 flex items-center  md:mt-4  gap-3 ">
                  {user === infoFestival.userId && (
                    <div className="absolute bottom-3 left-3">
                      <ButtonDeleteFest fest={infoFestival} />
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3">
                    <ShareEvent fest={infoFestival} />
                  </div>
                </div>
                <a href={infoFestival.link} target="_blank">
                  <img
                    src={infoFestival.img}
                    alt="image"
                    className="cursor-pointer overflow-hidden md:object-cover md:h-[320px] md:w-[420px]  lg:w-[520px]  xl:w-[620px] xl:h-[400px]  mx-auto rounded-lg   "
                  />
                </a>
              </div>
              <div className="md:flex md:justify-between">
                <div className="xl:pt-3">
                  <CountDawn date={infoFestival.data_start} />
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-3 md:ps-6 xl:pl-20 flex-grow ">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <img className="w-4 lg:w-6" src={location} alt="" />
                  <span className="text-xs xl:text-base capitalize ">
                    {infoFestival.address} - {infoFestival.city} -{" "}
                    {infoFestival.CP}
                  </span>
                </div>

                <div className="flex gap-2 text-xs xl:text-base">
                  <img className="w-4 lg:w-6" src={calendar} alt="" />
                  <DateFestivalHorizontal
                    dateStart={infoFestival.data_start}
                    dateEnd={infoFestival.data_end}
                  />
                </div>

                <div className="flex gap-2">
                  <img className="w-4 lg:w-6" src={price} alt="price" />
                  <span className="text-xs xl:text-base ">
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
                  {infoFestival.modality.map((item, index) => (
                    <li key={index} className="text-xs xl:text-base ms-2">
                      {" "}
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>

              {infoFestival.listOfTeachers.length > 0 && (
                <div>
                  <span className="block mt-5 mb-2  xl:text-xl text-orange-200">
                    Profesores
                  </span>
                  <ul>
                    {infoFestival.listOfTeachers.map((item, index) => (
                      <li key={index} className="text-xs xl:text-base ms-2">
                        {" "}
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div
            id="content_quill"
            className=" w-[80%] max-w-[1440px] mx-auto  mt-4"
          >
            <span className="text-orange-200 xl:text-xl">Descripción</span>
            <div
              className="text-justify mt-2 text-xs xl:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: infoFestival.contentQuill }}
            ></div>
          </div>
          <ListFestivalsModality
            title={"MÁS FESTIVALES"}
            modality={festivals.filter(
              (item) => item.docId !== infoFestival.docId
            )}
          />
        </div>
      )}
    </>
  );
};

export default InfoFestival;
