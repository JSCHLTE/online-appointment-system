import './App.css';
import BookingForm from './pages/BookingForm';
import Navbar from './components/Navbar';
import Booking from './pages/Booking';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Verify from './Steps/Verify';
import TimeSlot from './Steps/TimeSlot';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<BookingForm/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/confirmation' />
        </Routes>
      
    </BrowserRouter>
    </>
    
  )
}

export default App;
