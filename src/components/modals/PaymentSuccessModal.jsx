import React from "react";
import '../../assets/styles/modals.css'; // shared CSS file for all modals
import paymentSuccessImage from "../../assets/logos/paymentSuccess.png"; // replace with your actual image path

function PaymentSuccessModal() {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay">
      <div className="payment-success-modal" onClick={stopPropagation}>
        {/* Header with "Save card details" label + close button */}
        <div className="payment-success-header">
          <span className="payment-success-label">Save card details</span>
          <button className="close-button">&times;</button>
        </div>

        {/* Success icon */}
        <img
          src={paymentSuccessImage}
          alt="Green check indicating successful payment"
          className="payment-success-image"
        />

        {/* Main text */}
        <p className="payment-success-text">
          Your payment of <span className="payment-amount">NGN 5,000</span> was
          successful!
        </p>

        {/* Track order link */}
        <a href="#" className="track-order-link">
          Track my order
        </a>
      </div>
    </div>
  );
}

export default PaymentSuccessModal;
