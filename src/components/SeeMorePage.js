import React from "react";
import styles from "./SeeMorePage.module.css";
import Details from "./Details";
import logo from "../assets/SikwensGameLogoH1.png";
import lappy from "../assets/lappy.png";
import man from "../assets/man.png";
import booknum from "../assets/booknum.png";
import hanger from "../assets/hangers.png";
import markerhand from "../assets/markerhand.png";
import sky from "../assets/sky.png";
import womanplay from "../assets/womanplay.png";
import warriors from "../assets/warriors.png";
import mancity from "../assets/mancity.png";
import tenis from "../assets/tenis.png";
import taperule from "../assets/taperule.png";
import scissors from "../assets/scissors.png";
import dress from "../assets/dress.png";
import manwhite from "../assets/manwhite.png";
import red from "../assets/red.png";
import whitehouse from "../assets/whitehouse.png";

const SeeMore = () => {
  return (
    <div className={styles.seeMoreContainer}>
      {/* Navbar */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#">Play</a></li>
            <li><a href="#" className={styles.active}>Blog</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          <div className={styles.authButtons}>
            <button className={styles.signup}>Sign Up</button>
            <button className={styles.login}>Login</button>
          </div>
        </nav>
      </header>
      
      {/* Hero Section */}
      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>The Everything Blog</h1>
            <h2 className={styles.heroSubtitle}>Your Hub for Trivia, Math, and More!</h2>
            <p>
              Welcome to The Everything Blog—a one-stop destination for daily insights,
              trivia, and more! Whether you're a curious mind, a puzzle enthusiast, or
              just looking for a dose of daily inspiration, it's The Everything Blog!
            </p>
          </div>
          <div className={styles.heroImage}>
            <img src={lappy} alt="Illustration" />
          </div>
        </section>

        {/* Sections */}
        {[
          { 
            title: "Top Stories", 
            items: [
              { img: man, text: "How Sports Stats Can Improve Your Number Game" },
              { img: booknum, text: "The Role of Numbers: How It Could Be the Clue" },
              { img: hanger, text: "Probability in Numbers: The Math Behind Decisions" }
            ] 
          },
          { 
            title: "Top Video Reels", 
            items: [
              { img: markerhand, text: "Election Data Analysis: Apply Polling Trends to Puzzle Solving" },
              { img: sky, text: "Fibonacci Sequence: The Hidden Key to Creating Today’s Trends" },
              { img: womanplay, text: "Geometry in Fashion: Discover the Math Behind Design" }
            ] 
          },
          { 
            title: "Sports", 
            items: [
              { img: warriors, text: "Golden State Warriors: How 3-Point Math Changed the NBA" },
              { img: mancity, text: "Manchester City’s Game by Numbers: Expected Goals and Data-Driven Winning" },
              { img: tenis, text: "The Math of Tennis: Breaking Down Serve Speed and Win Probability" }
            ] 
          },
          { 
            title: "Fashion", 
            items: [
              { img: taperule, text: "Geometry in Fashion: Discover the Math Behind Design" },
              { img: scissors, text: "Symmetry & Aesthetics: Why Proportions Matter" },
              { img: dress, text: "The Fibonacci Sequence: The Hidden Key to Creating Today’s Trends" }
            ] 
          },
          { 
            title: "Politics", 
            items: [
              { img: manwhite, text: "The Math of Polling: How Election Predictions Are Made" },
              { img: red, text: "Gerrymandering: How Math Shapes Political Districts" },
              { img: whitehouse, text: "The Fibonacci Sequence: The Hidden Key to Creating Today’s Trends" } // Fixed syntax here
            ] 
          },
        ].map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            <div className={styles.grid}>
              {section.items.map((item, idx) => (
                <div key={idx} className={styles.card}>
                  <img src={item.img} alt={item.text} />
                  <h3>{item.text}</h3>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Details Component */}
      <Details/>
    </div>
  );
};

export default SeeMore;
