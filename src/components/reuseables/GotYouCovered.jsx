import React, { useState } from "react";
import "../../assets/styles/gotYouCovered.css";
import burgerbowl from "../../assets/images/burgerbowl.png";

/* React Icons with distinct colors */
import {
  FaUtensils,
  FaStar,
  FaHeartbeat,
  FaTruck,
  FaChartPie,
  FaConciergeBell,
  FaBullseye,
} from "react-icons/fa";

const coveredItems = [
  {
    id: 1,
    label: "Personalized Meal Planning",
    icon: <FaUtensils style={{ color: "#7fb336" }} />,
  },
  {
    id: 2,
    label: "Custom Meal Options",
    icon: <FaStar style={{ color: "#ffb74d" }} />,
  },
  {
    id: 3,
    label: "Dietary Restriction Management",
    icon: <FaHeartbeat style={{ color: "#f06292" }} />,
  },
  {
    id: 4,
    label: "Daily Meal Delivery",
    icon: <FaTruck style={{ color: "#4fc3f7" }} />,
  },
  {
    id: 5,
    label: "Nutritional Tracking",
    icon: <FaChartPie style={{ color: "#ba68c8" }} />,
  },
  {
    id: 6,
    label: "Meal Prep Assistance",
    icon: <FaConciergeBell style={{ color: "#ffa726" }} />,
  },
  {
    id: 7,
    label: "Goal Tracking",
    icon: <FaBullseye style={{ color: "#ec407a" }} />,
  },
];

const CoveredSection = () => {
  const [index, setIndex] = useState(0);

  // We'll display 5 items at a time. Wrap around if we reach the ends.
  const nextSlide = () => {
    if (index < coveredItems.length - 5) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(coveredItems.length - 5);
    }
  };

  return (
    <section className="covered-section">
      <div className="covered-content">
        <h2 className="covered-heading">
          Hunch got you covered
          <img src={burgerbowl} alt="Bowl" className="heading-icon" />
        </h2>
        <p className="covered-subtitle">
          A platform that empowers individuals to effortlessly maintain a
          healthier lifestyle by delivering personalized, nutritious meals
          tailored to their specific health needs, goals and dietary
          restrictions.
        </p>

        {/* Carousel Container */}
        <div className="covered-carousel">
          {/* Left Arrow Button */}
          <button className="carousel-btn left" onClick={prevSlide}>
            &#10094;
          </button>

          {/* The "chips" wrapper */}
          <div className="chips-wrapper">
            {coveredItems.slice(index, index + 5).map((item) => (
              <div className="chip" key={item.id}>
                <div className="chip-icon">{item.icon}</div>
                <select className="chip-select">
                  <option value="main">{item.label}</option>
                  <option value="optionA">Option A</option>
                  <option value="optionB">Option B</option>
                </select>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button className="carousel-btn right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoveredSection;
