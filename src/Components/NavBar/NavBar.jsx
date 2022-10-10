import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, List } from "./NavBarStyle";
import "./NavBar.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user);
    });
  }, []);

  return (
    <Nav>
      <List>
        {!isLoggedIn && (
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        )}

        {isLoggedIn && (
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </div>
        )}

        {isLoggedIn && (
          <div>
            <li>
              <Link to="/addproject">Add Project</Link>
            </li>
          </div>
        )}

        {isLoggedIn && (
          <div>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        )}
      </List>
    </Nav>
  );
};

export default NavBar;
