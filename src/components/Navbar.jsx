import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setIsLogin } from "../features/authUserSlice";

import { signOut, getAuth } from "firebase/auth";
import appFirebase from "../credentials";


import logo from "../assets/logo_ligth.png";
import login from "../assets/login.svg";
import logout from "../assets/logout.svg"
import menu from "../assets/menu.svg";

// Componente de la barra de navegación

function Navbar() {
  const auth = getAuth(appFirebase);

  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const { user, isLogin } = useSelector((state) => state.authUser);

  const getUsernName = (email) => {
    const ArrayUserName = email.split("");
    const userName = ArrayUserName[0].toUpperCase();
    return userName;
  };

  getUsernName("leprtitdesca@gmail.com");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = async () => {
    await signOut(auth);
    dispatch(setIsLogin(false));
    localStorage.removeItem("uid")
    navigate("/login")
   
  };

  return (
    <nav className="bg-zinc-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
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
        <div className="hidden md:flex flex-grow justify-center">
          <NavLink to="/" className="text-orange-200 px-4 py-2">
            Inicio
          </NavLink>
      
          <NavLink to="/addfestival" className="text-orange-200 px-4 py-2">
            Registrar festival
          </NavLink>

          <NavLink to="/calendar" className="text-orange-200 px-4 py-2">
            Calendario
          </NavLink>
         
        </div>

        {/* Icono de login (alineado a la derecha) */}
        {isLogin ? (
          <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className ="border-2 border-orange-200 w-8 h-8 rounded-full flex items-center justify-center">
          <div   className=""> <span className="text-orange-200">{getUsernName(user.email)}</span></div>
          </div>
            <div tabIndex={0} className=" flex flex-col gap-3 items-end dropdown-content z-[1] p-2 shadow bg-zinc-950 text-orange-200 rounded-box w-32 mt-10">
              <NavLink to="myFestivals">Mis festivales</NavLink>
              <div onClick={handleLogOut} className="cursor-pointer flex gap-2">
                <span>Salir </span>
                <img
                  className="w-6"
                  src={logout}
                  alt="logout"
                />
              </div>

            </div>
          </div>



        ) : (
          <div className="flex flex-col ml-auto">
            <img onClick={handleLogin} src={login} alt="login" />
          </div>
        )}
      </div>

      {/* Menús desplegables (solo visibles en dispositivos móviles) */}
      <div className={`md:hidden ${menuOpen ? "" : "hidden"}`}>
        <div className="flex flex-col items-center">
          <NavLink to="/" className="text-orange-200 px-4 py-2">
            Inicio
          </NavLink>
        
          <NavLink to="/addfestival" className="text-orange-200 px-4 py-2">
            Registrar festival
          </NavLink>

          <NavLink to="/calendar" className="text-orange-200 px-4 py-2">
            Calendario
          </NavLink>
        
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
