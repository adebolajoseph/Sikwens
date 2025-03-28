import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/SikwensLogoH2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Sikwens Logo" />
      </div>

      {/* Authentication Buttons (Always Visible) */}
      <div className="auth-buttons">
        <button className="sign-up">Sign Up</button>
        <button className="login">Login</button>
      </div>

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Links (Hidden by Default) */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#">Play</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
