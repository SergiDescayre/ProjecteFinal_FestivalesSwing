import { useFestivalContext } from "../context/FestivalContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const { messageModal } = useFestivalContext();

  const { isLogin } = useSelector((state) => state.authUser);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.stopPropagation();
    navigate("/login");
  };

  const handleClose = (e) => {
    e.stopPropagation();
    if (!isLogin) {
      navigate("/");
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-center">
      <div className="modal-box bg-orange-200">
        <span className="py-2 text-lg text-zinc-900">{messageModal}</span>
        <div className="modal-action">
          <form method="dialog">
            {!isLogin && (
              <button
                onClick={(e) => handleRegister(e)}
                className="btn text-zinc-900 btn-outline hover:bg-orange-100 hover:text-zinc-900"
              >
                Registrarse
              </button>
            )}
            <button
              onClick={(e) => handleClose(e)}
              className="btn bg-zinc-900 mx-3 text-orange-200 border-none hover:bg-zinc-700"
            >
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
