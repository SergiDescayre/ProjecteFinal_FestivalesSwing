import { useEffect, useState } from "react";
import appFirebase from "../credentials";
import {useNavigate} from "react-router-dom"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsLogin,
  setAuthUser,
  setIsRegister,
} from "../features/authUserSlice.js";

import logo from "../assets/logo_dark.png";
import logoLigth from "../assets/logo_ligth.png"



const Login = () => {


  const auth = getAuth(appFirebase);
  useEffect(() => {
    //document.querySelector("nav").style.display="none"
    document.querySelector("footer").style.display="none"
    return () => {
      // Acciones a realizar al desmontar el componente
      document.querySelector("footer").style.display="block"
      //document.querySelector("nav").style.display="block"
      
    };
  },[])
  const { isRegister } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleIsRegister = () => {
    dispatch(setIsRegister(!isRegister));
  };

  const aunthenticate = async (e) => {
    e.preventDefault();
    dispatch(setAuthUser(user));
    if (user.email === "" || user.password === "") {
      setError("Debes rellenar todos los campos");
      return;
    } else {
      setError("");
    }

    if (!isRegister) {
      try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);
        dispatch(setIsLogin(true));
        navigate("/")
      } catch (error) {
        switch (error.code) {
          case "auth/weak-password":
            setError("Contraseña mínima de 6 caracteres");
            break;
          case "auth/invalid-email":
            setError("Email no valido");
            break;
          case "auth/email-already-in-use":
            setError("El email ya está en uso");
            break;
          // Manejar otros casos de error según sea necesario
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, user.email, user.password);
        dispatch(setIsLogin(true));
        navigate("/")
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-email":
            setError("Email no valido");

            break;
          case "auth/invalid-credential":
            setError("El email o la contraseña son incorrectas");
            break;
        }
      }
    }
  };

  return (
    <section className="container_login flex justify-center items-center h-screen ">
      <div className="bg-zinc-800 bg-opacity-60 w-screen h-screen flex justify-center items-center">
      <div className=" w-screen flex flex-col justify-around h-screen  md:card md:h-[700px]  bg-zinc-900  px-5 md:w-[500px] md:px-10 ">
        <div>
          <img src={logoLigth} alt="logo" className=" mx-auto" />
        </div>
        <div>
          <form
            onSubmit={aunthenticate}
            noValidate
            className="grid grid-cols-1 gap-6"
          >
            <label className="input input-bordered flex items-center gap-2 bg-stone-200 text-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2  bg-stone-200 text-stone-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="*******"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </label>
            <button className="btn border-none bg-stone-950 hover:bg-stone-700 text-orange-200">
              {isRegister ? "Inicia sesión" : "Registro"}
            </button>
          </form>
          <div className="grid grid-cols-2 items-center mt-5">
            <p className="text-orange-200">
              {isRegister ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
            </p>
            <button onClick={handleIsRegister} className=" btn border-none bg-stone-950 hover:bg-stone-700 text-orange-200">
              {isRegister ? "Registro" : "Inicia sesión"}
            </button>
          </div>
        </div>

        <div
          className={` min-h-12 border-2 rounded-lg border-orange-200  text-orange-200 flex justify-center items-center mt-10 ${
            error ? "visile " : "invisible"
          }`}
        >
          {error}
        </div>
        {user.email}
      </div>
      </div>
    </section>
  );
};

export default Login;
