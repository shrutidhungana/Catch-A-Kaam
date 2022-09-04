import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, List, } from './NavBarStyle'
import './NavBar.css'


const NavBar = () => {
  return (
      <Nav>
          <List>
              <li>
                  <Link to = "/">Home</Link>
              </li>
              <li>
              <Link to="/about">About us</Link>
            </li>
          
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
      </List>
      
      
      </Nav>
  )
}

export default NavBar