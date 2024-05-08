import { useEffect } from "react";

import appFirebase from "../credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { setAuthUser, setIsLogin } from "../features/authUserSlice";

import Navbar from "../components/Navbar";
import Routing from "../routes/Routing";
import Footer from "../components/Footer";

import { useFestivalContext } from "../context/FestivalContext";

const MainLayout = () => {
  const { getFestivals } = useFestivalContext();

  useEffect(() => {
    getFestivals();
  }, []);

  const dispatch = useDispatch();
  const auth = getAuth(appFirebase);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userObject = {
          email: user.email,
          password: user.password,
        };
        dispatch(setIsLogin(true));
        dispatch(setAuthUser(userObject));
        localStorage.setItem(
          "uid",
          JSON.stringify(getAuth(appFirebase).currentUser.uid)
        );
      }
    });

    // Realiza la limpieza del listener cuando el componente se desmonte
    return () => unsubscribe();
  }, [auth]);

  return (
    <>
      <div className="fixed w-full z-20">
        <Navbar />
      </div>
      <div className="pt-[75px] md:pt-[90px]">
        <Routing />
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
