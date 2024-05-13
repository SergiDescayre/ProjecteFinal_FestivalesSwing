import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/arrowLeft.svg";

const ButtonComeBack = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => navigate(-1)}
        className="w-6 md:w-7 cursor-pointer"
        src={arrowLeft}
        alt="comeBack"
      />
    </div>
  );
};

export default ButtonComeBack;
