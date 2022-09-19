import React, {useState, useEffect} from "react";
import Testimonial from "./Testimonial/Testimonials";
import { Link } from "react-router-dom";
import Banners from "./Banner/Banners";
import { Homepage, Button } from "./HomepageStyle";
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
        <Banners />
        <Text />
        {!isLoggedIn &&
          <div>
        <p>Please login or register to continue</p>
        
          <Button>
            <Link to="/login" className="link">Login</Link>
            </Button>
            </div>
        }
      
        <Testimonial />
      </div>
    </Homepage>
  );
};

export default Homepages;
