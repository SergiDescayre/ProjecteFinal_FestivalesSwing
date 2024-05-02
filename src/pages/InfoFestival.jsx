import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useFestivalContext } from "../context/FestivalContext";
import DateFestivalHorizontal from "../components/DateFestivalHorizontal";

const InfoFestival = () => {
  const params = useParams();

  const { setInfoFestival, infoFestival, getFestivalByDocId } =
    useFestivalContext();
  useEffect(() => {
    getFestivalByDocId(params.idFestival);
    return () => setInfoFestival("");
  }, []);

  return (
    <div className="w-full bg-zinc-800 text-zinc-200">
      <div className="flex flex-col items-center ">
        <span className="text-orange-200 uppercase font-semibold mt-5 mb-3">
          {infoFestival.name}
        </span>
        <img
          src={infoFestival.img}
          alt=""
          className="overflow-hidden md:object-cover w-[95%] md:w-[80%] md:h-[300px]  mx-auto rounded-md  "
        />
        {/* {infoFestival && (
          <DateFestivalHorizontal
            dateStart={infoFestival.data_start}
            dateEnd={infoFestival.data_end}
          />
        )} */}
      </div>
      {infoFestival.name}
      <div id="content_quill">
        <div
          dangerouslySetInnerHTML={{ __html: infoFestival.contentQuill }}
        ></div>
      </div>
    </div>
  );
};

export default InfoFestival;
