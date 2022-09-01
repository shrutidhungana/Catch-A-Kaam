import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav>
          <ul>
              <li>
                  <Link to = "/">Home</Link>
              </li>
              <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/add">Add Project</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
      </nav>
  )
}

export default NavBar