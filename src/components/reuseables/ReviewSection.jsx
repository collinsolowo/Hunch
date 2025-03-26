import React, { useState } from "react";
import "../../assets/styles/reviewsection.css";

/* Example user images & bowl icon */
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user2.png";
import user5 from "../../assets/images/user1.png";
import user6 from "../../assets/images/user3.png";
import user7 from "../../assets/images/user1.png";
import bowlIcon from "../../assets/images/bowlIcon.png";

/* Example data for 7 reviews */
const reviewsData = [
  {
    id: 1,
    name: "Aisha Q.",
    quote:
      "Finally, a meal plan that actually understands my diet needs. Signed up already!",
    image: user1,
  },
  {
    id: 2,
    name: "David K.",
    quote:
      "A healthy meal service that delivers fresh, tailored meals daily? This is exactly what I need to stay on track with my fitness goals.",
    image: user2,
  },
  {
    id: 3,
    name: "Tolu A.",
    quote:
      "I love that Hunch considers allergies and dietary preferences. Excited for my trials!",
    image: user3,
  },
  {
    id: 4,
    name: "Sara P.",
    quote:
      "The convenience is unmatched. No more stressing about meal prep—Hunch has me covered.",
    image: user4,
  },
  {
    id: 5,
    name: "Jake R.",
    quote:
      "Fantastic variety, top-notch ingredients. My fitness goals are now easier to achieve.",
    image: user5,
  },
  {
    id: 6,
    name: "Rita B.",
    quote:
      "I was skeptical at first, but I'm amazed by the taste and the personalized meal options.",
    image: user6,
  },
  {
    id: 7,
    name: "Chen W.",
    quote:
      "Finally found a meal service that fits my busy schedule and dietary restrictions. Love it!",
    image: user7,
  },
];

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);

  // Show 3 at a time. Wrap around when we reach the ends.
  const nextSlide = () => {
    if (index < reviewsData.length - 3) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviewsData.length - 3);
    }
  };

  return (
    <section className="reviews-section">
      {/* ====== Heading ====== */}
      <div className="reviews-header">
        <h2 className="reviews-title">
          Here’s What Our Users Say
          <img src={bowlIcon} alt="bowl icon" className="reviews-bowl-icon" />
        </h2>
        <p className="reviews-subtitle">
          Join the community of users and take a first trial with Hunch
        </p>
      </div>

      {/* ====== Carousel Container ====== */}
      <div className="reviews-carousel">
        {/* Left Nav Button */}
        <button className="carousel-btn left" onClick={prevSlide}>
          &#10094;
        </button>

        {/* ====== Review Cards ====== */}
        <div className="reviews-wrapper">
          {reviewsData.slice(index, index + 3).map((review) => (
            <div className="review-card" key={review.id}>
              {/* User Image Overlapping the Indented Arc */}
              <div className="review-user-img-wrapper">
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-user-img"
                />
              </div>

              {/* Divider below user image */}
              <div className="review-divider"></div>

              {/* Quote */}
              <p className="review-quote">“{review.quote}”</p>

              {/* User Name */}
              <p className="review-name">— {review.name}</p>

              {/* Star Rating (5 stars) */}
              <p className="review-stars">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </p>
            </div>
          ))}
        </div>

        {/* Right Nav Button */}
        <button className="carousel-btn right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
