import React from "react";
import "./Details.css";
import sikwensLogo from "../assets/SikwensLogoH2.png"; 
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import women from "../assets/women.png"; 
import sky from "../assets/sky.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Blog and Video Section */}
        <div className="latest-updates">
          <div className="blog-post">
            <img src={sky} alt="Latest Blog" />
            <div className="content">
              <h4>Latest Blogpost</h4>
              <p><strong>The Magic of Fibonacci: The Man, the Myth, the SIKWENS</strong></p>
              <p>
                In today’s post, we dive into one of the most famous mathematical sequences—
                the Fibonacci sequence...
              </p>
            </div>
          </div>

          <div className="latest-video">
            <img src={women} alt="Latest Video" />
            <div className="content">
              <h4>Latest Video</h4>
              <p><strong>The Secret of Prime Numbers: Why They Matter</strong></p>
              <p>
                In today’s quick video, we break down how prime numbers can help you solve SIKWENS puzzles...
              </p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Play</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Invite Friends</a></li>
            <li><a href="#">Advertise with Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h4>Contact Details</h4>
          <p>61, Shaki Crescent, Surulere, Lagos.</p>
          <p>Email: <a href="mailto:info@sikwens.com">info@sikwens.com</a></p>
          <p>Phone: +234 701 237 7495</p>
          <div className="social-icons">
            <FaLinkedin aria-label="LinkedIn" />
            <FaInstagram aria-label="Instagram" />
            <FaFacebookF aria-label="Facebook" />
            <FaTwitter aria-label="Twitter" />
          </div>
          <img src={sikwensLogo} alt="Sikwens Logo" className="footer-logo" />
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Sikwens. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
