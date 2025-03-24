import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./BlogCategories.css";
import logo from "../assets/TheEverythingBlogLogoH1.png";
import sportsImg from "../assets/balls.png";
import fashionImg from "../assets/clothes.png";
import politicsImg from "../assets/podium.png";

const Everything = () => {
  return (
    <div className="everything-container">
      {/* Header Section */}
      <header className="header">
        <img src={logo} alt="The Everything Blog" className="logo" />
        <h1>The Everything Blog</h1>
        <p className="description">
          Welcome to The Everything Blog—a one-stop destination for daily insights, trivia, and more!
          Whether you’re a curious mind, a puzzle enthusiast, or just looking for a dose of daily inspiration,
          It’s Sports, It’s Fashion, it’s Pop Culture: It's The Everything Blog!
        </p>
        <div className="buttons">
          {/* "See More" now navigates to /more */}
          <Link to="/more" className="btn">See more</Link> 
          
          <div className="toggle-buttons">
            <button className="btn active">Blogpost</button>
            <button className="btn">Video Reels</button>
          </div>
        </div>
      </header>

      {/* Blog Categories Section */}
      <div className="blog-categories">
        <div className="card">
          <img src={sportsImg} alt="Sports" />
          <h2>Sports</h2>
          <p>Dive into the world of athletics with analysis of game strategies, player statistics, and behind-the-scenes stories.</p>
          <a href="#">Read more →</a>
        </div>

        <div className="card">
          <img src={fashionImg} alt="Fashion" />
          <h2>Fashion</h2>
          <p>Discover the hidden mathematics of design and pattern in the fashion world.</p>
          <a href="#">Read more →</a>
        </div>

        <div className="card">
          <img src={politicsImg} alt="Politics" />
          <h2>Politics</h2>
          <p>Get insights into global politics with trending discussions and expert perspectives.</p>
          <a href="#">Read more →</a>
        </div>
      </div>
    </div>
  );
};

export default Everything;
