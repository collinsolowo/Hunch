import React from "react";
import "../assets/styles/footer.css";
import hunchLogo from "../assets/images/hunchLogo.png";

const Footer = () => {
  return (
    <footer className="global-footer">
      {/* Top Section */}
      <div className="footer-content">
        {/* Left: Logo & Tagline */}
        <div className="footer-left">
          <img src={hunchLogo} alt="Hunch Logo" className="footer-logo" />
          <p className="footer-tagline">Healthy Meals Made For You</p>
        </div>

        {/* Middle: row with Quick Links + Contact */}
        <div className="footer-middle">
          <div className="middle-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Track Order</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="middle-contact">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-contact">61, Westay st, Lagos, Nigeria</p>
            <p className="footer-contact">hunch@gmail.com</p>
            <p className="footer-contact">01-234-9876</p>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="footer-right">
          <button className="jollof-btn">Get My Jollof!</button>
          <button className="waitlist-btn">Join the Waitlist</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© All rights reserved. Hunch 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
