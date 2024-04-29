import React from 'react'

import ShareEvent from '../components/ShareEvent'

const Calendar = () => {
    console.log("calendar")
  return (
    <div>Calendar
        <ShareEvent eventTitle ={"hola"} eventUrl={"https://design2tailwind.com/blog/tailwindcss-hide-scrollbar/"}/>
    </div>
  )
}

export default Calendar