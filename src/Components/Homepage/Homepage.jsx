import React from "react";
import background from '../../Assets/background.jpg'


const Homepage = () => {
  return (
    <div>
      <q>The only great work is to love what you do </q>
      <cite>-Steve Jobs</cite>
      <h1> Find the best freelancing Service here</h1>
      <img src = {background} alt = "img" />
      <p>
        Catch A Kaam is best platform if you want to post any freelancing
        project you have and also if you want best price for your project. It
        also provides you the best freelancing services.
      </p>
      <p>Catch-A-Kaam helps you get best offering of any projects you want to do as the freelancerr as well.</p>
      
      <p>Please Login or Register to continue</p>
      
      <button>Login</button>
    </div>
  );
};

export default Homepage;
