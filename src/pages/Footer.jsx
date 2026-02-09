import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-brand">FunFriday 🎉</p>
        <p className="footer-text">
          © {new Date().getFullYear()} FunFriday. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
