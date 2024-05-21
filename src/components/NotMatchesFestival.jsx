import { useFestivalContext } from "../context/FestivalContext";

const NotMatchesFestival = () => {
  const { error } = useFestivalContext();
  return (
    <div className="border rounded-md border-orange-200 w-full p-3 md:text-center ">
      <span className="text-secondary text-sm"> {error}</span>
    </div>
  );
};

export default NotMatchesFestival;
