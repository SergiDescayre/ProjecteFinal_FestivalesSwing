import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setIsLogin } from "../features/authUserSlice";

import { signOut, getAuth } from "firebase/auth";
import appFirebase from "../credentials";

import logo from "../assets/logo_ligth.png";
import login from "../assets/login.svg";
import logout from "../assets/logout.svg";
import menu from "../assets/menu.svg";
import MultiLanguages from "./MultiLanguages";

import { useTranslation } from "react-i18next";

// Componente de la barra de navegación

function Navbar() {

  const {t} = useTranslation("global")

  const auth = getAuth(appFirebase);

  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const { user, isLogin } = useSelector((state) => state.authUser);

  const getUsernName = (email) => {
    const ArrayUserName = email.split("");
    const userName = ArrayUserName[0].toUpperCase();
    return userName;
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // if (!menuOpen) {
    //   document.body.style.overflow = "hidden";
    // } else document.body.style.overflow = "";
  };

  const handleLogOut = async () => {
    await signOut(auth);
    dispatch(setIsLogin(false));
    localStorage.removeItem("uid");
    navigate("/login");
  };

  return (
    <nav className="bg-zinc-950 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center max-w-[1440px] lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0 lg:justify-center lg:w-auto hidden md:block">
          <img className="h-[60px]  " src={logo} alt="Logo" />
        </div>

        {/* Icono de hamburguesa (solo visible en dispositivos móviles) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2 ">
            <img src={menu} alt="menu" />
          </button>
        </div>

        {/* Menús (centrados en dispositivos grandes, ocultos en dispositivos pequeños) */}
        <div className="hidden md:flex flex-grow justify-center text-stone-200">
          <NavLink to="/" className=" px-4 py-2">
            {t("navbar.home")}
          </NavLink>

          <NavLink to="/addfestival" className=" px-4 py-2">
            {t("navbar.registerFestival")}
          </NavLink>

          <NavLink to="/calendar" className="px-4 py-2">
           {t("navbar.calendar")}
          </NavLink>
        </div>

        {/* Icono de login (alineado a la derecha) */}
        <div className="flex items-center gap-2 relative">
        {isLogin ? (
          <div className="dropdown dropdown-hover dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="border-2 border-orange-200 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <div className="">
                {" "}
                <span className="text-orange-200">
                  {getUsernName(user.email)}
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className=" aboslute w-28 z-10 -mx-10 mt-8 pt-10 ml-6 flex flex-col gap-3 items-end dropdown-content  p-2 shadow bg-zinc-950 text-orange-200 rounded-md "
            >
              <NavLink to="myFestivals">{t("navbar.favorites")}</NavLink>
              <div onClick={handleLogOut} className="cursor-pointer flex gap-2">
                <span>{t("navbar.logOut")}</span>
                <img className="w-6" src={logout} alt="logout" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col ml-auto">
            <img onClick={handleLogin} src={login} alt="login" />
          </div>
        )}
        <MultiLanguages />
      </div>
        </div>
       

      {/* Menús desplegables (solo visibles en dispositivos móviles) */}
      <div className={`md:hidden ${menuOpen ? "" : "hidden"} `}>
        <div className="absolute left-0 z-10 bg-zinc-950 w-full h-screen text-stone-200">
          <div className="flex flex-col items-center h-[100%] gap-12 mt-[150px]">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className=" px-4 py-2 text-2xl "
            >
              {t("navbar.home")}
            </NavLink>

            <NavLink
              to="/addfestival"
              onClick={toggleMenu}
              className=" px-4 py-2 text-2xl "
            >
               {t("navbar.registerFestival")}
            </NavLink>

            <NavLink
              to="/calendar"
              onClick={toggleMenu}
              className=" px-4 py-2 text-2xl"
            >
                {t("navbar.calendar")}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
