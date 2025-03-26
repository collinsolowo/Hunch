import React, { useState } from "react";
import { FaBars } from "react-icons/fa";  // Import the hamburger icon
import "../assets/styles/navbar.css";
import NavLogo from "../assets/images/hunchLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  // State to toggle mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the hamburger
  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log('opened')
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <img src={NavLogo} alt="hunch-logo" />
      </div>

      {/* NAV CONTENTS (list + buttons) */}
      <div className={`nav-contents ${isOpen ? "open" : ""}`}>
        {/* NAV LIST */}
        <ul className="nav-list">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/order'>Track Order</Link></li>
          <li>Contact Us</li>
        </ul>
        {/* NAV BUTTONS */}
        <div className="nav-btns">
          <button className="nav-white-btn">Get My Jollof</button>
          <button className="nav-red-btn">Join the Waitlist</button>
        </div>
      </div>

      {/* HAMBURGER ICON (visible only on mobile) */}
      <div className="hamburger" onClick={handleToggle}>
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;
