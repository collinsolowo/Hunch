import React from "react";
import "../../assets/styles/modals.css"; // shared CSS file for all modals
import mangosteen65Image from "../../assets/logos/onion.png"; // update path as needed

function Mangosteen65Modal() {
  // Prevent the modal from closing if clicking inside the content
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay">
      <div className="health-modal" onClick={stopPropagation}>
        <img
          src={mangosteen65Image}
          alt="Smiling mangosteen indicating 65% healthy"
          className="health-image"
        />
        <h2 className="health-title">You&apos;re 65% Healthy!</h2>
        <p className="health-text">
          You&apos;re making progress! With a few small changes, reach your best
          self.
        </p>
      </div>
    </div>
  );
}

export default Mangosteen65Modal;
