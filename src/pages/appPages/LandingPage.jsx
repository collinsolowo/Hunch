import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "../../assets/styles/landingPage.css";
import FOODBOWL from "../../assets/images/foodLogo.png";
import jollofBowl from "../../assets/images/jollofBowl.png";

/* 1) Import React Icons that closely match your FontAwesome ones */
import {
  FaUtensils,
  FaBoxOpen,
  FaHeart,
  FaCalendarCheck,
} from "react-icons/fa";

/* 2) Import meal images (example file names) */
import meal1 from "../../assets/images/meal1.png";
import meal2 from "../../assets/images/meal2.png";
import meal3 from "../../assets/images/meal3.png";
import ReviewsSection from "../../components/reuseables/ReviewSection";
import HowItWorks from "../../components/reuseables/HowItWorks";
import CoveredSection from "../../components/reuseables/GotYouCovered";
import MultiStepForm from "../../components/reuseables/MultiStepForm";
import FollowUs from "../../components/reuseables/FollowUs";
import Footer from "../../components/Footer";

function LandingPage() {
  /* Meal Plans Data (7 items) */
  const mealPlans = [
    {
      img: meal1,
      title: "Mediterranean",
      info: "Rich in fresh veggies, whole grains, and heart-healthy ingredients.",
    },
    {
      img: meal2,
      title: "Vegetarian",
      info: "Nutritious and delicious vegetarian meals packed with plant-based goodness.",
    },
    {
      img: meal3,
      title: "Dairy-Free",
      info: "Made with wholesome ingredients, no dairy allowed for convenience.",
    },
    {
      img: meal1,
      title: "Keto",
      info: "Low-carb, high-fat meals to help keep you in ketosis.",
    },
    {
      img: meal3,
      title: "Paleo",
      info: "Meals inspired by the Paleolithic era: lean meats, fruits, veggies.",
    },
    {
      img: meal2,
      title: "Gluten-Free",
      info: "Perfect for gluten-sensitive individuals with delicious, safe ingredients.",
    },
    {
      img: meal1,
      title: "Balanced",
      info: "A balanced blend of proteins, carbs, and healthy fats for overall well-being.",
    },
  ];

  /* 3-at-a-time carousel logic */
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // If we can move forward, move forward; else wrap around
    if (currentIndex < mealPlans.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    // If we can move back, move back; else wrap to the end
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(mealPlans.length - 3);
    }
  };

  return (
    <>
      <Navbar />

      {/* ====== Landing Banner (unchanged) ====== */}
      <div className="landing-banner">
        <div className="landing-overlay"></div>
        <div className="landing-contents">
          <p className="landing-subtitle">
            Delivering Tailored, Healthy Meals to Your Door Daily
          </p>
          <h1 className="landing-title">
            Personalized, ready-to-eat meal plans tailored to individual needs,
            including dietary restrictions
          </h1>
          <button className="landing-button">Join the Waitlist</button>
        </div>
      </div>

      {/* ====== Landing Info Section (unchanged except for icons) ====== */}
      <div className="landing-info">
        {/* Left: sliced image grid */}
        <div className="info-img-grid">
          <div className="image-slice slice1"></div>
          <div className="image-slice slice2"></div>
          <div className="image-slice slice3"></div>
        </div>

        {/* Right: details and features */}
        <div className="info-details">
          <h2 className="info-heading">
            What Is Hunch
            <img src={FOODBOWL} className="food-bowl" alt="Food Bowl" />
          </h2>
          <p className="info-description">
            Hunch is a smart meal-planning platform that delivers personalized
            meal plans and ready-to-eat meals tailored to your dietary needs,
            lifestyle, and preferences, making nutrition simple and convenient.
          </p>

          <div className="info-features">
            <div className="info-feature">
              {/* Replaced <i className="fa-solid fa-utensils"> with React Icon */}
              <FaUtensils className="feature-icon" />
              <div className="feature-text">
                <h4>Personalized Meal Plans</h4>
                <p>
                  Meals designed specifically for your unique goals, tastes, and
                  health.
                </p>
              </div>
            </div>

            <div className="info-feature">
              {/* Replaced <i className="fa-solid fa-box"> with React Icon */}
              <FaBoxOpen className="feature-icon" />
              <div className="feature-text">
                <h4>Daily Ready-to-Eat Meals</h4>
                <p>
                  Perfectly portioned meals delivered daily, ensuring you get
                  the nutrition you need without compromising convenience.
                </p>
              </div>
            </div>

            <div className="info-feature">
              {/* Replaced <i className="fa-solid fa-heart-circle-check"> with React Icon */}
              <FaHeart className="feature-icon" />
              <div className="feature-text">
                <h4>Dietary Restrictions Simplified</h4>
                <p>
                  We accommodate allergies, intolerances, and specific diet
                  needs with ease.
                </p>
              </div>
            </div>

            <div className="info-feature">
              {/* Replaced <i className="fa-solid fa-calendar-check"> with React Icon */}
              <FaCalendarCheck className="feature-icon" />
              <div className="feature-text">
                <h4>Effortless Meal Planning</h4>
                <p>
                  Simplify your nutrition routine with curated meal plans that
                  fit your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Meal Plans Section ====== */}
      <div className="meal-plans">
        <h2 className="meal-heading">Explore Our Meal Plans</h2>
        <p className="meal-subtext">
          From wholesome meals to low-carb plans, we keep you satisfied all year
          round.
        </p>

        <div className="carousel-container">
          <button className="carousel-btn left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="meal-cards">
            {mealPlans
              .slice(currentIndex, currentIndex + 3)
              .map((plan, idx) => (
                <div className="meal-card" key={idx}>
                  <img src={plan.img} alt={plan.title} className="meal-img" />
                  <div className="meal-info">
                    <h4>{plan.title}</h4>
                    <p>{plan.info}</p>
                    <a href="#learnmore" className="learn-more">
                      Learn More &#187;
                    </a>
                  </div>
                </div>
              ))}
          </div>

          <button className="carousel-btn right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Jollof Form Section */}
      <section className="jollof-section">
        {/* ===== Left Side: "Ad" ===== */}
        <div className="jollof-left">
          <img
            src={jollofBowl}
            alt="Delicious Jollof Bowl"
            className="jollof-image"
          />
          <h2 className="jollof-title">Craving Jollof? Order Yours Now!</h2>
          <p className="jollof-subtitle">
            Made fresh daily, packed with rich flavors, and delivered to your
            doorstep. No hassles, just great taste!
          </p>
        </div>

        {/* ===== Right Side: Form ===== */}
        <div className="jollof-right">
          <p className="jollof-count">
            Join over <strong>1000+</strong> happy Hunchies enjoying our
            signature jollof rice
          </p>

          <form className="jollof-form">
            {/* Name */}
            <input type="text" placeholder="Name" />

            {/* Phone Number */}
            <input type="text" placeholder="Phone Number" />

            {/* No + City/LGA (two fields side by side) */}
            <div className="row">
              <select>
                <option value="">No</option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* Add more if needed */}
              </select>
              <input type="text" placeholder="City/LGA" />
            </div>

            {/* Number of Packs */}
            <input type="number" placeholder="Number of packs" />

            {/* Preferred Protein */}
            <select>
              <option value="">Preferred protein</option>
              <option value="chicken">Chicken</option>
              <option value="beef">Beef</option>
              <option value="fish">Fish</option>
              {/* etc. */}
            </select>

            {/* Extras */}
            <select>
              <option value="">Extras</option>
              <option value="plantain">Plantain</option>
              <option value="moimoi">Moi Moi</option>
              <option value="salad">Salad</option>
              {/* etc. */}
            </select>

            {/* Spice Level */}
            <select>
              <option value="">Spice Level</option>
              <option value="mild">Mild</option>
              <option value="medium">Medium</option>
              <option value="hot">Hot</option>
            </select>

            {/* Request Textarea */}
            <textarea placeholder="Any special instructions?"></textarea>

            {/* Submit Button */}
            <button type="submit" className="order-btn">
              Place Order Now
            </button>
          </form>
        </div>
      </section>
      <ReviewsSection/>
      <HowItWorks/>
      <CoveredSection/>
      <MultiStepForm/>
      <FollowUs/>
      <Footer/>
    </>
  );
}

export default LandingPage;
