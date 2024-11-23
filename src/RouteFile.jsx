import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Student from './component/Student';
import ContactUs from './component/ContactUs';


const RouteFile = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default RouteFile