import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import ListFestivals from "../pages/ListFestivals"
import AddFestival from "../pages/AddFestival"
import MyFestivals from "../pages/MyFestivals"
import InfoFestival from "../pages/InfoFestival"
import MapFestivals from "../components/MapFestivals"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/festivales" element={<ListFestivals/>} />
      <Route path="/addFestival" element={<AddFestival/>} />
      <Route path="/calendar" element={<MapFestivals/>} />
      <Route path="/myFestivals" element={<MyFestivals />} />
      <Route path="/InfoFestival/:idFestival" element={<InfoFestival />} />
    </Routes>
  )
}

export default Routing
