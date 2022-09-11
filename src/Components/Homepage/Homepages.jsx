import React from "react";
import Testimonial from "./Testimonial/Testimonials";
import { Link } from "react-router-dom";
import Banners from "./Banner/Banners";
import { Homepage, Button } from "./HomepageStyle";
import Text from "./Text/Text";
import './Homepage.css'


const Homepages = () => {
  return (
    <Homepage>
      <Banners />
      <Text />
    
      
      <p>Please Login or Register to continue</p>
      <Button>
        <Link to = "/login" className = "link">Login</Link>
      </Button>
      
      <p>
      <Testimonial />
    </p>
    </Homepage>
  );
};

export default Homepages;
