import React, { useState } from 'react'
import './timeslot.css'

function TimeSlot() {

  const [times, setTimes] = useState([
    {time: "10:00 AM", avaliable: true},
    {time: "10:15 AM", avaliable: true},
    {time: "10:30 AM", avaliable: true},
    {time: "10:45 AM", avaliable: true},
    {time: "11:00 AM", avaliable: true},
    {time: "11:15 AM", avaliable: true},
    {time: "11:30 AM", avaliable: true},
    {time: "11:45 AM", avaliable: true},
  ])

  return (
    <div className='time-slot-wrapper'>
      <div className='time-slot-today'>
        <h2>Today</h2>
        <p>Slots Avaliable</p>
      </div>
    </div>
  )
}

export default TimeSlot