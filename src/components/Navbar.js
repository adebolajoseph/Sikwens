import React from "react";
import "./Navbar.css";
import logo from "../assets/SikwensLogoH2.png"; // Updated filename

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Sikwens Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Play</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="sign-up">Sign Up</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
