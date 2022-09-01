import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Header from '../Components/Header/Headers'
import NavBar from '../Components/NavBar/NavBar'
import Homepage from '../Components/Homepage/Homepage'
import Footer from '../Components/Footer/Footer'



const AppRouter = () => {
  return (
      <div>
          <Router>
              <Header />
              <NavBar />
              <Routes>
                  <Route exact path="/" element={<Homepage />} />
                  
              </Routes>
              
              <Footer />
              
              </Router>
      </div>
  )
}

export default AppRouter