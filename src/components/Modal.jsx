import { useEffect } from "react";
import { useFestivalContext } from "../context/FestivalContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Modal = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  }, []);
  const { messageModal } = useFestivalContext();

  const { isLogin } = useSelector((state) => state.authUser);

  const {t} =useTranslation("global")

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.stopPropagation();
    navigate("/login");
  };

  const handleClose = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <dialog id="my_modal_5" className="modal modal-center">
      <div className="modal-box bg-orange-100">
        <span className="py-2 text-lg text-zinc-900">{messageModal}</span>
        <div className="modal-action">
          <form method="dialog">
            {!isLogin && (
              <button
                onClick={(e) => handleRegister(e)}
                className="btn text-zinc-900 btn-outline hover:bg-orange-200 hover:text-zinc-900"
              >
                {t("modal.register")}
              </button>
            )}
            <button
              onClick={(e) => handleClose(e)}
              className="btn bg-zinc-900 mx-3 text-orange-200 border-none hover:bg-zinc-700"
            >
              {t("modal.close")}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
