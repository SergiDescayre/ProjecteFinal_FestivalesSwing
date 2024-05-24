import FormSearchHome from "../components/FormSearchHome";
import ListFestivals from "./ListFestivals";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="paralax ">
        <div className="bg-zinc-950 min-h-[500px] bg-opacity-70">
          <div className=" flex flex-col md:py-[60px]">
            <span className="leading-[50px] text-4xl text-primary m-9 md:text-center md:text-5xl">
              {t("home.text")}
            </span>
          </div>
          <FormSearchHome />
        </div>
      </div>
      <div className="relative">
        <div className="-z-0 clip absolute -top-[100px] min-w-full  md:h-28 bg-dark50"></div>
        <ListFestivals />
      </div>
    </>
  );
};

export default Home;
