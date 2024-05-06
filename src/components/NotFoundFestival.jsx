import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundFestival = () => {

const navigate = useNavigate()    

const handleClick = () => {
    navigate("/")
}

  return (
    <div className="card bg-zinc-900 shadow-xl flex flex-col items-center m-5 p-8 text-zinc-200 max-w-[450px] w-[80%] mx-auto">
    <span>No tienes festivales en favoritos</span>
    <button className=" mt-10 btn btn-sm bg-orange-200 border-none hover:bg-orange-100" onClick={handleClick}>Añadir</button>
  </div>
  )
}

export default NotFoundFestival