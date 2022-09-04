import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";
import {
  Footer,
  Container,
  Row,
  Column,
  Heading,
  
} from "./FooterStyle";
import "./Footer.css"

const Footers = () => {
  return (
    <Footer>
      <Container>
        <Row>
          <Column>
            <Heading>About us</Heading>

            <Link to="/about">
              <p>Aim</p>
            </Link>
            <Link to="/about">
              <p>Visual</p>
            </Link>
            <Link to="/">
              <p>Testimonial</p>
            </Link>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>

            <Link to="/contact">
              <p> Kathmandu </p>
            </Link>
            <Link to="/contact">
              <p>Pokhara</p>
            </Link>
            <Link to="/contact">
              <p>Biratnagar</p>
            </Link>
          </Column>
          <Column>
            <Heading>Services</Heading>

            <Link to="/profile">
              <p>Content Writing</p>
            </Link>
            <Link to="/profile">
              <p> Quality Analysis </p>
            </Link>
            <Link to="/profile">
              <p> Coding </p>
            </Link>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <p>
              <a href="https://www.linkedin.com/in/shruti-dhungana-2ab9901b5/">
                <AiOutlineLinkedin />
              </a>
            </p>
            <p>
              <a href="https://github.com/shrutidhungana">
                <AiOutlineGithub />
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/shruti.dhungana.5/">
                <AiOutlineFacebook />
              </a>
            </p>
          </Column>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footers;
