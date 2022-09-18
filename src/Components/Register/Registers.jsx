import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {  Alert } from "react-bootstrap";
import "./Register.css";

import { useUserAuth } from "../../Context/UserAuthContext";
import {
  Register,
  Heading,
  Button,
  Paragraph,
  Paragraph1,
  Labels,
  Label,
  Input,
  Inputs
} from "./RegisterStyle";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <div className = "background">
      
        <Heading>Enter the following to register:</Heading>
      {error && <Alert variant="danger">{error}</Alert>}
      <Register>
        <form onSubmit={handleSubmit}>
         
            <Labels>
              <Label htmlFor="email">Email:</Label>
          </Labels>
          <Inputs>
            <Input
              type="email"
              placeholder="Email address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            </Inputs>
          
            <Labels>
              <Label htmlFor="password">Password:</Label>
          </Labels>
          <Inputs>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </Inputs>

          
            <Button variant="primary" type="Submit">
              Create Account
            </Button>
          
          <Paragraph>
            Already have an account?
          </Paragraph>
          <Paragraph1 className="paragraph">
          <Link to="/login">
          Log In
        </Link>
          </Paragraph1>
            
      
        </form>
      </Register>
     
      </div>
  );
};

export default Signup;
