import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import About from "./About";
import Game from "./Game";
import BlogCategories from "./BlogCategories";
import Details from "./Details";


const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <Footer/>
      <About />
      <Game />
      <BlogCategories />
      <Details />

      {/* "See More" button takes users to another page */}
      

     
    </div>
  );
};

export default Homepage;
