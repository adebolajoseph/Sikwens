import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/Group39.png"; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Welcome to <span className="highlight">SIKWENS:</span> <br />
          Here Maths Meets Fun!!!
        </h1>
        <p>
          Join the Daily SIKWENS Challenge, and explore The Everything Blog, 
          packed with fascinating trivia and insights!
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Play Now</button>
          <button className="btn btn-secondary">Visit the Blog</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Illustration" />
      </div>
    </section>
  );
};

export default HeroSection;
