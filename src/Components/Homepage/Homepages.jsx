import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import Banners from "./Banner/Banners";
import { Homepage, Button, Heading, Paragraph,Para } from "./HomepageStyle";
import Text from "./Text/Text";
import "./Homepage.css";
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'

const Homepages = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user);
    });
  }, []);
  return (
    <Homepage>
      <div>
        <Heading>Welcome to Catch-A-Kaam</Heading>
        <Banners />
        <Text />
        {!isLoggedIn &&
          <div>
        <Para>Please login or register to continue</Para>
        
          <Button>
            <Link to="/login" className="link">Login</Link>
            </Button>
            </div>
        }
      
        <Paragraph>Start exploring the website</Paragraph>
      
      </div>
    </Homepage>
  );
};

export default Homepages;
