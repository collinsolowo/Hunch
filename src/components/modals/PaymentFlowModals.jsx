import React from "react";
import { FaTimes, FaCreditCard, FaExchangeAlt, FaBarcode } from "react-icons/fa";
import "../../assets/styles/paymentFlowModals.css";
import Check from '../../assets/images/greenSuccess.png'

function PaymentFlowModals({ showModal, setShowModal }) {
  if (showModal === 0) return null; // no modal visible

  // Click outside modal => close
  const handleBackdropClick = () => {
    setShowModal(0);
  };
  // Prevent close if clicking modal itself
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  // Close icon
  const handleClose = () => {
    setShowModal(0);
  };

  // Next / Previous / Final
  const handleNext = () => setShowModal(showModal + 1);
  const handlePrev = () => setShowModal(showModal - 1);
  const handleFinal = () => setShowModal(0);

  // Each step’s data
  let title = "";
  let body = null;
  let footer = null;

  switch (showModal) {
    case 1:
      title = "How would you like to pay?";
      body = (
        <div className="modal1-content">
          <label className="radio-row">
            <span>Pay before delivery (Card, Bank Transfer)</span>
            <input type="radio" name="payOption" />
          </label>
          <label className="radio-row">
            <span>Pay on delivery (Cash or POS)</span>
            <input type="radio" name="payOption" />
          </label>
        </div>
      );
      footer = (
        <button className="pm-modal-btn pm-primary" onClick={handleNext}>
          Proceed
        </button>
      );
      break;

    case 2:
      title = "Please select preferred payment method";
      body = (
        <div className="modal2-content">
          {/* 1) Pay with card */}
          <label className="pay-method-row">
            <div className="icon-box pink">
              <FaCreditCard />
            </div>
            <span>Pay with card</span>
            <input type="radio" name="method" />
          </label>
          {/* 2) Pay by transfer */}
          <label className="pay-method-row">
            <div className="icon-box peach">
              <FaExchangeAlt />
            </div>
            <span>Pay by transfer</span>
            <input type="radio" name="method" />
          </label>
          {/* 3) Pay with USSD */}
          <label className="pay-method-row">
            <div className="icon-box coral">
              <FaBarcode />
            </div>
            <span>Pay with USSD</span>
            <input type="radio" name="method" />
          </label>
        </div>
      );
      footer = (
        <div className="pm-footer-row">
          <button className="pm-modal-btn pm-secondary" onClick={handlePrev}>
            Back
          </button>
          <button className="pm-modal-btn pm-primary" onClick={handleNext}>
            Continue
          </button>
        </div>
      );
      break;

    case 3:
      title = "Please enter your card details";
      body = (
        <div className="modal3-content">
          <input type="text" placeholder="Card type" />
          <input type="text" placeholder="Card number" />
          <input type="text" placeholder="Card name" />
          <div className="row-2fields">
            <input type="text" placeholder="Expiry date (MM/YY)" />
            <input type="text" placeholder="CVV" />
          </div>
        </div>
      );
      footer = (
        <div className="pm-footer-row">
          <button className="pm-modal-btn pm-secondary" onClick={handlePrev}>
            Back
          </button>
          <button className="pm-modal-btn pm-primary" onClick={handleNext}>
            Continue
          </button>
        </div>
      );
      break;

    case 4:
      title = "Your payment of NGN 5,000 was successful!";
      body = (
        <div className="modal4-content">
          <div className="success-icon">
            <img
              src={Check}
              alt="Success"
              className="check-img"
            />
          </div>
          {/* or just a big icon or <FaCheckCircle> if you want */}
        </div>
      );
      footer = (
        <a href="#track" className="track-link" onClick={handleFinal}>
          Track my order
        </a>
      );
      break;

    default:
      return null;
  }

  return (
    <div className="pm-backdrop" onClick={handleBackdropClick}>
      <div className="pm-modal" onClick={handleModalClick}>
        {/* Close icon top-right */}
        <button className="pm-close-btn" onClick={handleClose}>
          <FaTimes />
        </button>

        <h2 className="pm-title">{title}</h2>
        <div className="pm-body">{body}</div>
        <div className="pm-footer">{footer}</div>
      </div>
    </div>
  );
}

export default PaymentFlowModals;
