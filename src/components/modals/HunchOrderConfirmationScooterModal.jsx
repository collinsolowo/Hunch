import React from 'react';
import '../../assets/styles/modals.css'; // shared CSS file for all modals
import scooterArcImage from '../../assets/logos/scooterArc.png'; // replace with your actual path

function HunchOrderConfirmationScooterModal() {

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay">
      <div className="hunch-order-scooter-modal" onClick={stopPropagation}>
        {/* Header area with small label and close button */}
        <div className="order-confirmation-header">
          <span className="order-confirmation-label">Order confirmation</span>
          <button className="close-button">&times;</button>
        </div>

        {/* Scooter icon with dotted arc */}
        <img
          src={scooterArcImage}
          alt="Scooter with dotted arc"
          className="order-scooter-image"
        />

        {/* Main text content */}
        <h2 className="order-received-title">Order Received!</h2>
        <p className="order-received-text">
          Your jollof is on its way.
          <br />
          Order ID: <span className="order-id">HUNCH-94567</span>
        </p>
        <a href="#" className="track-order-link">
          Track my order
        </a>
      </div>
    </div>
  );
}

export default HunchOrderConfirmationScooterModal;
