import React from 'react'

import ShareEvent from '../components/ShareEvent'
import Editor from '../components/Editor'

const Calendar = () => {
    console.log("calendar")
  return (
    <div>Calendar
        <ShareEvent eventTitle ={"hola"} eventUrl={"https://design2tailwind.com/blog/tailwindcss-hide-scrollbar/"}/>
        <Editor />
        <h1>hola</h1>
    <p>adios</p>
    </div>
  )
}

export default Calendar