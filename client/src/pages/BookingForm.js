import React from 'react'
import Profile from '../components/Profile'
import BookAppointment from '../Steps/BookAppointment'
import TimeSlot from '../Steps/TimeSlot'
function BookingForm() {
  return (
    <div class="container mx-auto px-20 bg-gray-200">

    <div class="p-8 bg-white rounded-md place-items-center space-x-2">
      <Profile />
      <div>
        <p className='border-b-4 border-gray-400 py-4'></p>
      </div>
      <BookAppointment/>
      <TimeSlot/>
      <h1>Slot</h1>
      <h1>Frequently asked questions</h1>
  </div>
      
    </div>
  )
}

export default BookingForm