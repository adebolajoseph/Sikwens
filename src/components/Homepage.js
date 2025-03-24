import React from "react";
import "./Homepage.css"; 

const HomePage = () => {
  return (
    <div className="homepage">
      
      <nav className="navbar">
        <div className="logo">SIKWENS</div>
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

      
      <header className="hero-section">
        <h1>
          Welcome to <span>SIKWENS:</span> <br />
          Here Maths Meets Fun!!!
        </h1>
        <p>
          Join the Daily SIKWENS Challenge, and explore The Everything Blog,
          packed with fascinating trivia and insights!
        </p>
        <div className="hero-buttons">
          <button className="play-now">Play Now</button>
          <button className="visit-blog">Visit the Blog</button>
        </div>
      </header>

      
      <div className="illustration">
        <img src="/assets/illustration.png" alt="People playing" />
      </div>

      
      <div className="logos">
        <img src="/assets/sikwens-game.png" alt="Sikwens Game" />
        <img src="/assets/sikwens-logo.png" alt="Sikwens Logo" />
        <img src="/assets/everything-blog.png" alt="Everything Blog" />
      </div>
    </div>
  );
};

export default HomePage;
