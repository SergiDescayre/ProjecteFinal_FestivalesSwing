import { useNavigate } from "react-router-dom";

import replay from "../assets/replay.svg";

const ButtonComeBack = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => navigate(-1)}
        className="w-6 md:w-7 cursor-pointer"
        src={replay}
        alt=""
      />
    </div>
  );
};

export default ButtonComeBack;
