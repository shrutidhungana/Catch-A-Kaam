import React, { useState, useEffect } from "react";
import logo1 from "../../Assets/logo1.png";

import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Header, Image, Heading, Button, UserEmail } from "./HeaderStyle";
import "./Header.css";

const Headers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user);
    });
  }, []);

  const { logOut, user } = useUserAuth();
  let navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Header>
      <Image src={logo1} alt="logo" />
      <Heading>Catch A Kaam</Heading>
      {!isLoggedIn && (
        <Button>
          <Link to="/login" className="ln">
            Login
          </Link>
        </Button>
      )}
      {isLoggedIn && (
        <div>
          <UserEmail>{user && user.email}</UserEmail>
        </div>
      )}

      {isLoggedIn && (
        <div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </Header>
  );
};

export default Headers;
