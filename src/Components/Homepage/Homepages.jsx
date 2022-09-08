import React from "react";
import Testimonial from "./Testimonial/Testimonials";
import Banners from "./Banner/Banners";
import { Homepage, Button } from "./HomepageStyle";
import Text from "./Text/Text";


const Homepages = () => {
  return (
    <Homepage>
      <Banners />
      <Text />
    
      
      <p>Please Login or Register to continue</p>
     
      <Button>Login</Button>
      <p>
      <Testimonial />
    </p>
    </Homepage>
  );
};

export default Homepages;
