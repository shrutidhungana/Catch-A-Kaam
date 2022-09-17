import React from "react";
import Testimonial from "./Testimonial/Testimonials";

import Banners from "./Banner/Banners";
import { Homepage } from "./HomepageStyle";
import Text from "./Text/Text";
import './Homepage.css'


const Homepages = () => {
  return (
    <Homepage>
      <Banners />
      <Text />
      
     
      
      <p>
      <Testimonial />
      </p>
    </Homepage>
  );
};

export default Homepages;
