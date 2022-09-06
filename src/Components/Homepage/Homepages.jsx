import React from "react";
import background from '../../Assets/background.jpg'
import Testimonial from "./Testimonial/Testimonials";
import Banner from "./Banner/Banner";
import { Homepage, Button } from "./HomepageStyle";


const Homepages = () => {
  return (
    <Homepage>
      <q>The only great work is to love what you do </q>
      <cite>-Steve Jobs</cite>
      <h1> Find the best freelancing Service here; the possibilities are endless</h1>
      <img src={background} alt="img" />
      <h2>Think what you want to achieve through this website.</h2>
      <p>
        Catch A Kaam is best platform if you want to post any freelancing
        project you have and also if you want best price for your project. It
        also provides you the best freelancing services.
      </p>
      <p>Catch-A-Kaam helps you get best offering of any projects you want to do as the freelancerr as well.</p>
      <p>
        <Testimonial />
      </p>
      
      <p>Please Login or Register to continue</p>
      
      <Button>Login</Button>
    </Homepage>
  );
};

export default Homepages;