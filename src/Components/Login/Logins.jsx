import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Login,
  Heading,
  Button,
  Paragraph,
  Paragraph1,
  Paragraph2,
  Inputs,
  Input,
  Label,
  Labels
} from "./LoginStyle";
import "./Login.css";
import { useUserAuth } from "../../Context/UserAuthContext";
import {  Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Logins = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className="background">
      <Heading>Enter your login details in the form below:</Heading>
      {error && <Alert variant="danger">
        {error}
      </Alert>}
      <Login>
        <form onSubmit = {handleSubmit}>
          <Labels>
            <Label htmlFor="email">Email:
            </Label>
          </Labels>
          <Inputs>
            <Input
              type="email"
              placeholder="E-mail"
              required
              name="email"
              onChange = {(e) => setEmail(e.target.value)}
            />
          </Inputs>
          <Labels>
            <Label htmlFor="password">Password:
            </Label>
          </Labels>
          <Inputs>
            <Input
              type="password"
              placeholder="Password"
              required
              name="email"
              onChange = {(e) => setPassword(e.target.value)}
            />
          </Inputs>
          <Button
            varient = "primary"
            type="submit">
            Login
          </Button>
          <Paragraph2>OR</Paragraph2>
          <Paragraph2>
            
            <GoogleButton 
              className="g-btn"
              type="dark"
              onClick = {handleGoogleSignIn}
            />
          </Paragraph2>
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
