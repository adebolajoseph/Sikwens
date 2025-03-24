import React from "react";
import "./Game.css"; 
import quickPlayImg from "../assets/quickPlayImg.png";
import dailyChallengeImg from "../assets/dailyChallenge.png";
import logo from "../assets/SikwensLogoH2.png"; 

export default function Game() {
  return (
    <div className="container">
      
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Sikwens Logo" className="logo" />
          <h1>
            The <span className="highlight">SIKWENS</span> Game
          </h1>
        </div>
        <p>Play SIKWENS; Solve, Enjoy and Repeat!</p>
      </header>

     
      <div className="cards-container">
        
        <div className="card">
          <img src={quickPlayImg} alt="Quick Play" />
          <h2>Quick Play Mode</h2>
          <p>
            Instantly access the full SIKWENS library, featuring all past daily
            challenges and bonus puzzles. Choose a SIKWENS and start playing
            anytime, no registration required.
          </p>
          <button className="play-button">Play Now</button>
        </div>

        
        <div className="card">
          <img src={dailyChallengeImg} alt="Daily Challenge" />
          <h2>Daily SIKWENS Challenge</h2>
          <p>
            Log in to tackle a new SIKWENS challenge. Test your skills against
            the GameMaster’s latest trick and compete for the top spot on the
            leaderboard.
          </p>
          <button className="login-button">Login/Register</button>
        </div>
      </div>
    </div>
  );
}
