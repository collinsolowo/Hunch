import React from "react";
import '../../assets/styles/modals.css'; // shared CSS file for all modals
import hunchOrderBox from "../../assets/logos/lunch.png"; // replace with correct path

function HunchOrderConfirmationModal() {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay">
      <div className="hunch-order-modal" onClick={stopPropagation}>
        {/* Header with small title and close button */}
        <div className="order-confirmation-header">
          <span className="order-confirmation-label">Order confirmation</span>
          <button className="close-button">&times;</button>
        </div>

        {/* Main content */}
        <img
          src={hunchOrderBox}
          alt="Green Hunch box"
          className="hunch-order-image"
        />
        <h2 className="order-received-title">Order Received!</h2>
        <p className="order-received-text">
          Your jollof is on its way.
          <br />
          Order ID: <strong style={{color: 'red'}}>HUNCH-94567</strong>
        </p>
        <a href="#" className="track-order-link">
          Track my order
        </a>
      </div>
    </div>
  );
}

export default HunchOrderConfirmationModal;
