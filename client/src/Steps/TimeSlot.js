import React, { useState } from 'react'
import './timeslot.css'

function TimeSlot() {

  const [times, setTimes] = useState([
    {time: "10:00 AM", avaliable: true, selected: false},
    {time: "10:15 AM", avaliable: true, selected: false},
    {time: "10:30 AM", avaliable: true, selected: false},
    {time: "10:45 AM", avaliable: true, selected: false},
    {time: "11:00 AM", avaliable: true, selected: false},
    {time: "11:15 AM", avaliable: true, selected: false},
    {time: "11:30 AM", avaliable: true, selected: false},
    {time: "11:45 AM", avaliable: true, selected: false},
  ])

  const getDate = (days) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    const date = new Date();
    date.setDate(date.getDate() + days);
    const formatted = date.toLocaleDateString('en-GB', options);
    return formatted
}

  const [dates, setDates] = useState([
    {date: 'Today', slots: 0},
    {date: 'Tomorrow', slots: 8},
    {date: getDate(2), slots: 8},
    {date: getDate(3), slots: 8},
    {date: getDate(4), slots: 8},
    {date: getDate(5), slots: 8},
  ])

  const handleClick = (time) => {
    const clickedArr = times.map(item => {
      return time === item.time ? {...item, selected: !item.selected} : {...item, selected: false}
    })
    setTimes(clickedArr)
  }



  return (
    <div className='time-slot-wrapper'>
      <div className='time-slot-days'>
        <div className='time-slot-days-inner'>
          <div className='time-slot-day-1'>
            {dates.slice(0, 3).map(day => (
              <div className='time-slot-card'>
                <h4>{day.date}</h4>
                <p>{day.slots ? `${day.slots} slots available` : 'No slots available'}</p>
              </div>
            ))}
          </div>
          <div className='time-slot-day-2'>
            {dates.slice(3, 6).map(day => (
              <div className='time-slot-card'>
                <h4>{day.date}</h4>
                <p>{day.slots ? `${day.slots} slots available` : 'No slots available'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='time-slot-times'>
        {times.map(time => {
          return <button className={`time-slot-button ${time.selected ? 'selected' : ''} ${time.avaliable ? '' : 'unavailable'}`} disabled={time.avaliable ? '' : 'disabled'} onClick={() => handleClick(time.time)} key={time.time}>{time.time}</button>
        })}
      </div>
      <div className='time-slot-continue'>
        <a href='#'>Continue</a>
      </div>
    </div>
  )
}

export default TimeSlot