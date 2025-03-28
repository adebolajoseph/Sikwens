import React from "react";
import "./About.css";
import aboutImage from "../assets/Group40.png"; 

const About = () => (
  <section className="about-container">
    <div className="about-image">
      <img src={aboutImage} alt="Illustration" />
    </div>
    <div className="about-content">
      <h2>
        About <span className="highlight">SIKWENS</span>
      </h2>
      <p>
        Sikwens is home to a unique game that’ll put your brain to the test, and a blog filled 
        with fascinating stories, facts, and insights to broaden your horizons.
      </p>
      <p>
        In The Game, each day unveils a new sequence of numbers based on interesting trivia topics, 
        with a hidden challenge. Your mission: crack the code within 5 guesses and reveal the missing numbers.
      </p>
      <p>
        The Sikwens Blog delves into the trivia topics of each day, sharing interesting stories, 
        facts, and insights to enhance your knowledge.
      </p>
      
    </div>
  </section>
);

export default About;
