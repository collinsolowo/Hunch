import React, { useState } from "react";
import "../../assets/styles/trackOrder.css";
import jollofImg from "../../assets/images/jollof.png";
import driverImg from "../../assets/images/driver.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PaymentFlowModals from "../../components/modals/PaymentFlowModals";


const TrackOrder = () => {
  // 2) State for controlling which payment modal step is shown (0 = none)
  const [showModal, setShowModal] = useState(0);

  const handleOpenPayment = () => {
    setShowModal(1); // start at Step 1
  };

  return (
    <>
      <Navbar />
      <div className="track-order-container">
        {/* LEFT SECTION: What's In Your Jollof */}
        <div className="jollof-details">
          <div className="jollof-image">
            <img src={jollofImg} alt="Jollof Rice and Chicken" />
          </div>
          <div className="jollof-info">
            <h2>What’s In Your Jollof?</h2>
            <div className="jollof-info-items">
              <p>• Rice Portion: 300g Per Pack</p>
              <p>• Protein Choice: Grilled Chicken | Fish | Beef</p>
              <p>• Extras: Veggie, Salad, Plantain</p>
              <p>• Calories: Approx. 550 Kcal Per Pack</p>
            </div>
            <p className="jollof-desc">
              Your Hunch Jollof isn’t just delicious—it’s packed with healthy
              antioxidants from tomatoes, thyme, onion, and red peppers for
              better digestion. Plus, with nutritional plantains and a spicy kick
              to power your day, it’s as nourishing as it is satisfying!
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: Order Summary & Map */}
        <div className="order-summary-section">
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span className="item-label">Order ID:</span>
              <span className="item-value">HJNCBH-94567</span>
            </div>
            <div className="summary-item">
              <span className="item-label">Delivery Address:</span>
              <span className="item-value">23 Oja Oba St, Ikeja</span>
            </div>
            <div className="summary-item">
              <span className="item-label">Delivery Time:</span>
              <span className="item-value">30 - 45 Min</span>
            </div>
            <div className="summary-item">
              <span className="item-label">Spice Level:</span>
              <span className="item-value">Medium</span>
            </div>
            <div className="summary-item total">
              <span className="item-label">Total:</span>
              <span className="item-value">NGN 5000</span>
            </div>

            {/* Add a button to open Payment modals */}
            <button className="pay-btn" onClick={handleOpenPayment}>
              Pay to Complete Order
            </button>
          </div>

          <div className="map-card">
            <h4>Delivery Map</h4>
            <div className="map-container">
              <iframe
                title="Delivery Map"
                src="https://www.google.com/maps/embed?..."
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Order Status & Driver Info */}
        <div className="order-status-section">
          <div className="status-card">
            <h3>Order Status</h3>
            <div className="status-item active">
              <div className="status-dot"></div>
              <div className="status-text">
                <strong>Order Received</strong>
                <p>Your order has been received</p>
              </div>
            </div>

            <div className="status-item active">
              <div className="status-dot"></div>
              <div className="status-text">
                <strong>Order In Progress</strong>
                <p>We’re preparing your food</p>
              </div>
            </div>

            <div className="status-item">
              <div className="status-dot"></div>
              <div className="status-text">
                <strong>Driver On The Way</strong>
                <p>Your order is on its way</p>
              </div>
            </div>

            <div className="status-item">
              <div className="status-dot"></div>
              <div className="status-text">
                <strong>Delivered</strong>
                <p>Enjoy your meal!</p>
              </div>
            </div>
          </div>

          <div className="contact-driver">
            <h4>Contact Your Driver</h4>
            <div className="driver-info">
              <div className="driver-photo">
                <img src={driverImg} alt="Driver" />
              </div>
              <div>
                <p className="driver-name">Ahmed Mohammed</p>
                <p className="driver-phone">0801 234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render Payment Modals if showModal > 0 */}
      <PaymentFlowModals showModal={showModal} setShowModal={setShowModal} />

      <Footer />
    </>
  );
};

export default TrackOrder;
