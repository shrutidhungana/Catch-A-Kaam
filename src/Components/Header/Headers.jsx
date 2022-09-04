import React from 'react'
import logo1 from "../../Assets/logo1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Header, Image, Heading, Button } from './HeaderStyle';
import './Header.css'


const Headers = () => {
  return (
      <Header>
          <Image src={logo1} alt="logo" />
          <Heading>Catch A Kaam</Heading>
        <Button>Login</Button>
        <AiOutlineMenu className="menu" />
      </Header>
  )
}

export default Headers