import React from "react";
import "./Footer.css";
import sikwensLogo from "../assets/SikwensLogoH2.png"; 
import gameLogo from "../assets/SikwensGameLogoH1.png";
import blogLogo from "../assets/TheEverythingBlogLogoH1.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src={gameLogo} alt="Sikwens Game" className="footer-logo" />
        <img src={sikwensLogo} alt="Sikwens" className="footer-logo" />
        <img src={blogLogo} alt="TheEverythingBlog" className="footer-logo" />
      </div>


      
    </footer>
  );
};

export default Footer;
