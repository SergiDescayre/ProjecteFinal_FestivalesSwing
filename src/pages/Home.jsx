import FormSearchHome from "../components/FormSearchHome";
import ListFestivals from "./ListFestivals";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="relative bg-[url('./assets/Lindy_Hop.jpeg')] bg-cover bg-no-repeat ">
        <div className="-z-0 clip absolute bottom-[-2px] min-w-full  md:h-28 bg-zinc-800"></div>
        <div className="bg-zinc-950 md:min-h-[470px] bg-opacity-80">
          <div className=" flex flex-col md:py-[60px]">
            <span className="leading-[50px] text-4xl text-primary m-9 md:text-center md:text-5xl">
              {t("home.text")}
            </span>
          </div>
          <FormSearchHome />
        </div>
      </div>

      <ListFestivals />
    </>
  );
};

export default Home;
