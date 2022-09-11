import React from "react";
import { Link } from "react-router-dom";
import Inputfield from "./Inputfield";
import { Login, Heading, Button, Paragraph, Paragraph1 } from "./LoginStyle";
import "./Login.css";

const Logins = () => {
  return (
    <div className="background">
      <Heading>Enter your login details in the form below:</Heading>
      <Login>
        <form>
          <div>
            <Inputfield
              type="email"
              placeholder="E-mail"
              required
              name="email"
              label="Email:"
            />
          </div>
          <div>
            <Inputfield
              type="password"
              placeholder="Password"
              required
              name="email"
              label="Password:"
            />
          </div>
          <Button>Login</Button>
          <Paragraph>Don't have an Account?</Paragraph>
          <Paragraph1 className="paragraph">
            <Link to="/register">Register</Link>
          </Paragraph1>
        </form>
      </Login>
    </div>
  );
};

export default Logins;
