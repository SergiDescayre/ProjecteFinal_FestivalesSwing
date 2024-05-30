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

function Navbar() {
  const { t } = useTranslation("global");

  const auth = getAuth(appFirebase);

  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const { user, isLogin } = useSelector((state) => state.authUser);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogOut = async () => {
    await signOut(auth);
    dispatch(setIsLogin(false));
    localStorage.removeItem("uid");
    navigate("/login");
  };

  const getUsernName = (email) => {
    const ArrayUserName = email.split("");
    const userName = ArrayUserName[0].toUpperCase();
    return userName;
  };

  return (
    <nav className="bg-dark100 p-4 w-full ">
      <div className="container mx-auto flex justify-between items-center max-w-[1440px] lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0 lg:justify-center lg:w-auto hidden md:block">
          <img className="h-[60px] " src={logo} alt="Logo" />
        </div>

        {/* Icono de hamburguesa (solo visible en dispositivos móviles) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2 ">
            <img src={menu} alt="menu" />
          </button>
        </div>

        {/* Menús (centrados en dispositivos grandes, ocultos en dispositivos pequeños) */}
        <div className="hidden md:flex flex-grow justify-center text-secondary">
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

        {/* Icono de login  */}
        <div className="flex items-center gap-2 relative">
          <MultiLanguages />
          {isLogin ? (
            <div className="dropdown dropdown-hover dropdown-left">
              <div
                tabIndex={0}
                role="button"
                className="border-2 border-orange-200 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <div className="">
                  {" "}
                  <span className="text-primary">
                    {getUsernName(user.email)}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                className=" aboslute w-28 z-10 -mx-10 mt-8 pt-10 ml-6 flex flex-col gap-3 items-end dropdown-content  p-2 shadow bg-dark100 text-primary rounded-md "
              >
                <NavLink to="myFestivals">{t("navbar.favorites")}</NavLink>
                <div
                  onClick={handleLogOut}
                  className="cursor-pointer flex gap-2"
                >
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
        </div>
      </div>

      {/* Menús desplegables (solo visibles en dispositivos móviles) */}
      <div className={`md:hidden ${menuOpen ? "" : "hidden"} `}>
        <div className="absolute left-0 z-10 bg-dark100 w-full h-screen text-secondary">
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
