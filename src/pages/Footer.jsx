import React from "react";
import { Link } from "react-router-dom";
import  '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>FunFriday 🎉</h2>
          <p>Making teamwork fun and effortless</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/about">About</Link>
           <Link to="/contact">Contact us</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} FunFriday. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
