import React from "react";
import "../../assets/styles/howItWorks.css";

import headingIcon from "../../assets/images/headingIcon.png";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-title">
        Join Hunch In A Crunch – It’s That Easy
        <img src={headingIcon} alt="Heading Icon" className="title-icon" />
      </h2>
      <p className="how-subtitle">Here’s how it works</p>

      <div className="steps-row">
        {/* Step 01 */}
        <div className="step-block">
          <div className="circle">Step 01</div>
          <h3>Enter Your Details</h3>
          <p>
            Fill in your basic info—name, email, weight, height, dietary
            preferences, etc.
          </p>
        </div>

        {/* Dotted Wave Connector */}
        <div className="wave-img">
          {" "}
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 20 Q 20 0, 40 20 T 80 20"
              stroke="#7fb336"
              stroke-width="2"
              stroke-dasharray="4 4"
              fill="none"
            />
          </svg>
        </div>

        {/* Step 02 */}
        <div className="step-block">
          <div className="circle">Step 02</div>
          <h3>Instantly Join the Waitlist</h3>
          <p>No extra steps—once you sign up, you’re in!</p>
        </div>

        {/* Dotted Wave Connector */}
        <div className="wave-img">
          {" "}
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 20 Q 20 0, 40 20 T 80 20"
              stroke="#7fb336"
              stroke-width="2"
              stroke-dasharray="4 4"
              fill="none"
            />
          </svg>
        </div>

        {/* Step 03 */}
        <div className="step-block">
          <div className="circle">Step 03</div>
          <h3>Crunch the Digits with Hunch</h3>
          <p>
            Analyze your eating habits with the Hunch calculator and get a
            personalized score.
          </p>
        </div>

        {/* Dotted Wave Connector */}
        <div className="wave-img">
          {" "}
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 20 Q 20 0, 40 20 T 80 20"
              stroke="#7fb336"
              stroke-width="2"
              stroke-dasharray="4 4"
              fill="none"
            />
          </svg>
        </div>

        {/* Step 04 */}
        <div className="step-block">
          <div className="circle">Step 04</div>
          <h3>Get Ready for a Healthier You</h3>
          <p>
            From your data, Hunch will tailor recommendations to improve your
            nutrition once we launch!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
