import React from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import "./Register.css";
import {
  Register,
  Heading,
  Button,
  Paragraph,
  Paragraph1,
} from "./RegisterStyle";

const Registers = () => {
  return (
    <div className="background">
      <Heading>Enter the following to register:</Heading>
      <Register>
        <form>
          <div>
            <InputField
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              label="Full Name:"
            />
          </div>
          <div>
            <InputField
              type="email"
              placeholder="E-mail"
              name="E-mail"
              required
              label="Email:"
            />
          </div>
          <div>
            <InputField
              type="password"
              placeholder="Password"
              required
              name="Password"
              label="Password:"
            />
          </div>
          <div>
            <InputField
              type="password"
              placeholder="Confirm Password:"
              required
              name="confirmPassword"
              label="Confirm Password"
            />
          </div>

          <Button>Create Account</Button>
          <Paragraph>Already have an account?</Paragraph>
          <Paragraph1 className="paragraph">
            <Link to="/login">Login</Link>
          </Paragraph1>
        </form>
      </Register>
    </div>
  );
};

export default Registers;
