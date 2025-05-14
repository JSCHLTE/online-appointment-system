import React, { useEffect, useState } from 'react'
import './timeslot.css'

function TimeSlot() {
  const [times, setTimes] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [chunkedDates, setChunkedDates] = useState([])

  const genTimes = (daySlots) => {
    setTimes([
      {time: "10:00 AM", avaliable: daySlots, selected: false},
      {time: "10:15 AM", avaliable: daySlots, selected: false},
      {time: "10:30 AM", avaliable: daySlots, selected: false},
      {time: "10:45 AM", avaliable: daySlots, selected: false},
      {time: "11:00 AM", avaliable: daySlots, selected: false},
      {time: "11:15 AM", avaliable: daySlots, selected: false},
      {time: "11:30 AM", avaliable: daySlots, selected: false},
      {time: "11:45 AM", avaliable: daySlots, selected: false},
    ])
  }

  useEffect(() => {
    genTimes();
  }, [])

  const getDate = (days) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    const date = new Date();
    date.setDate(date.getDate() + days);
    const formatted = date.toLocaleDateString('en-GB', options);
    return formatted
  }

  const [dates, setDates] = useState([
    {date: 'Today', slots: 0, selected: false, id: 0},
    {date: 'Tomorrow', slots: 8, selected: true, id: 1},
    {date: getDate(2), slots: 8, selected: false, id: 2},
    {date: getDate(3), slots: 8, selected: false, id: 3},
    {date: getDate(4), slots: 8, selected: false, id: 4},
    {date: getDate(5), slots: 8, selected: false, id: 5},
  ])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 550) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const chunks = []
    for (let i = 0; i < dates.length; i += itemsPerPage) {
      chunks.push(dates.slice(i, i + itemsPerPage))
    }
    setChunkedDates(chunks)
    // Only reset page when itemsPerPage changes, not when dates change
    if (chunks.length <= currentPage) {
      setCurrentPage(0)
    }
  }, [dates, itemsPerPage, currentPage])

  const handleClick = (time) => {
    const clickedArr = times.map(item => {
      return time === item.time ? {...item, selected: !item.selected} : {...item, selected: false}
    })
    setTimes(clickedArr)
  }

  const handleCardClick = (day) => {
    const clickedCardArr = dates.map(date => {
      return day.id === date.id ? {...date, selected: !date.selected} : {...date, selected: false}
    })
    setDates(clickedCardArr)
    genTimes(day.slots);
  }

  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : chunkedDates.length - 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => (prev < chunkedDates.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className='time-slot-wrapper'>
      <div className='time-slot-days'>
        <div className='time-slot-days-inner'>
          <button onClick={handlePrevPage} className='slider-reverse'>◄</button>
          <div className='time-slot-days-container'>
            {chunkedDates[currentPage]?.map(day => (
              <div key={day.id} className={`time-slot-card ${day.selected ? 'active' : ''}`} onClick={() => handleCardClick(day)}>
                <h4>{day.date}</h4>
                <p>{day.slots ? `${day.slots} slots available` : 'No slots available'}</p>
              </div>
            ))}
          </div>
          <button onClick={handleNextPage} className='slider-forward'>►</button>
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