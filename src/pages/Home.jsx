import FormSearchHome from "../components/FormSearchHome";
import ListFestivals from "./ListFestivals";

const Home = () => {
  return (
    <>
    <div className="bg-[url('./assets/Lindy_Hop.jpeg')] bg-cover bg-no-repeat ">
      <div className="bg-zinc-950 md:min-h-[470px] opacity-80">
        <div className="text-orange-200 flex flex-col md:py-[60px]">
          <span className="text-4xl m-9 md:text-center md:text-5xl">¡Siente el ritmo, vive la experiencia! </span>
          <span className="text-2xl ml-9  mb-9 md:text-center md:text-3xl">Festivales que despiertan tu pasión. </span>
        </div>
        <FormSearchHome />
      </div>
      </div>
    
        <ListFestivals />
    </>
      
   
  );
};

export default Home;
