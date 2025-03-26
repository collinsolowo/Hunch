import React from "react";
import "../../assets/styles/followUs.css";

/* Example: Using React Icons for socials, or just plain <i> tags */
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // If you're using react-icons v4+ for the new X logo

/* Example lightbulb icon */
import bulb from "../../assets/images/bulb.png"; // If you have a custom icon

const FollowUs = () => {
  return (
    <section className="follow-us-section">
      {/* Did you know text */}
      <p className="follow-subtext">
        Did You Know? You need 2100 kcal/day to maintain your weight
      </p>

      {/* Main heading with icon */}
      <h2 className="follow-heading">
        <img src={bulb} alt="Lightbulb" className="bulb-icon" />
        Follow Us On All Our Socials For More Hunchdates
      </h2>

      {/* Social icons row */}
      <div className="social-icons-row">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://x.com" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://wa.me" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};

export default FollowUs;
