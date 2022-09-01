import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/about">
        <p>About us</p>
      </Link>
      <Link to="/about">
        <p>Aim</p>
      </Link>
      <Link to="/about">
        <p>Visual</p>
      </Link>
      <Link to="/about">
        <p>Testimonial</p>
      </Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/contact">
        <p> Kathmandu </p>
      </Link>
      <Link to="/contact">
        <p>Pokhara</p>
      </Link>
      <Link to="/contact">
        <p>Biratnagar</p>
          </Link>
          <Link to="/profile">
              <p>Coding</p>
          </Link>
          <Link to="/profile">
              <p>Content Writing</p>
          </Link>
          <Link to="/profile">
              <p>Quality Analysis</p>
          </Link>
    </footer>
  );
};

export default Footer;