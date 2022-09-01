import React from 'react'
import logo3 from "../../Assets/logo3.png";
import { AiOutlineMenu } from "react-icons/ai";

const Headers = () => {
  return (
      <header>
          <img src={logo3} alt="logo" />
          <h2>Catch A Kaam</h2>
        <button>Login</button>
        <AiOutlineMenu className="menu" />
      </header>
  )
}

export default Headers