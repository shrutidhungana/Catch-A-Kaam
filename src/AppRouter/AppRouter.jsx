import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Header from '../Components/Header/Headers'
import NavBar from '../Components/NavBar/NavBar'
import Homepage from '../Components/Homepage/Homepages'
import Footer from '../Components/Footer/Footers'
import AboutUs from '../Components/AboutUS/AboutUs'
import ContactUs from '../Components/ContactUs/ContactUs'
import Logins from '../Components/Login/Logins'
import Registers from '../Components/Register/Registers'


const AppRouter = () => {
  return (
      <div>
          <Router>
              <Header />
              <NavBar />
              <Routes>
                  <Route exact path="/" element={<Homepage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/login" element={<Logins />} />
                  <Route path = "/register" element = {<Registers/>} />
                  
              </Routes>
              
              <Footer />
              
              </Router>
      </div>
  )
}

export default AppRouter