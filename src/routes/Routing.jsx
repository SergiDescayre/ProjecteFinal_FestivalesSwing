import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import ListFestivals from "../pages/ListFestivals"
import AddFestival from "../pages/AddFestival"
import MyFestivals from "../pages/MyFestivals"
import InfoFestival from "../pages/InfoFestival"
import CalendarFestivals from "../pages/CalendarFestivals"


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/festivales" element={<ListFestivals/>} />
      <Route path="/addFestival" element={<AddFestival/>} />
      <Route path="/calendar" element={<CalendarFestivals/>} />
      <Route path="/myFestivals" element={<MyFestivals />} />
      <Route path="/infoFestival/:idFestival" element={<InfoFestival />} />
    </Routes>
  )
}

export default Routing
