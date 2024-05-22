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

import { useTranslation } from "react-i18next";

const InfoFestival = () => {
  const { t } = useTranslation("global");
  const params = useParams();
  const user = JSON.parse(localStorage.getItem("uid"));
  const { setInfoFestival, infoFestival, getFestivalByDocId, festivals } =
    useFestivalContext();

  useEffect(() => {
    getFestivalByDocId(params.idFestival);
    return () => setInfoFestival("");
  }, [params.idFestival]);

  return (
    <>
      {!infoFestival ? (
        <div className="min-h-[950px]">
          <Loading title={"Cargando..."} />
        </div>
      ) : (
        <div className="w-full bg-zinc-800 text-secondary max-w-[1440px] mx-auto ">
          <div className="w-[80%] text-center flex items-center justify-between mx-auto">
            <span className="text-primary uppercase font-semibold mt-5 mb-3 md:text-2xl xl:text-4xl x:mb-5">
              {infoFestival.name}
            </span>
            <ButtonComeBack />
          </div>

          <div className="flex flex-col md:flex-row w-[80%] md:align-center max-w-[1440px] mx-auto">
            <div className="mb-4">
              <div className="relative transition duration-300 ease-in-out">
                <div className="bottom-3  right-3 flex items-center  md:mt-4  gap-3 ">
                  {user === infoFestival.userId && (
                    <div className="absolute bottom-3 left-3">
                      <ButtonDeleteFest
                        fest={infoFestival}
                        title={t("infoFestival.delete")}
                      />
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
                    className="cursor-pointer overflow-hidden md:object-cover md:h-[320px] md:w-[420px]  lg:w-[520px]  xl:w-[620px] xl:h-[400px]  mx-auto rounded-lg border-2 border-transparent hover:border-2 hover:border-secondary   "
                  />
                </a>
              </div>
              <div className="md:flex md:justify-between">
                <div className="xl:pt-3 md:-ms-5">
                  <CountDawn
                    date={infoFestival.data_start}
                    docId={infoFestival.docId}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:mt-4  gap-3 md:ps-6  flex-grow ">
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
                    {t("infoFestival.from")} {infoFestival.minPrice} €{" "}
                    {t("infoFestival.to")} {infoFestival.maxPrice} €
                  </span>
                </div>
              </div>

              <div>
                <span className="block mt-5 mb-2  xl:text-xl text-primary">
                  {t("infoFestival.modalities")}
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
                  <span className="block mt-5 mb-2  xl:text-xl text-primary">
                    {t("infoFestival.teachers")}
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
            <span className="text-primary xl:text-xl">
              {t("infoFestival.description")}
            </span>
            <div
              className="text-justify mt-2 text-xs xl:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: infoFestival.contentQuill }}
            ></div>
          </div>
          <ListFestivalsModality
            title={t("infoFestival.moreFestivals")}
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
