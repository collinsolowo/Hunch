import React from "react";
import "../../assets/styles/modals.css"; // shared CSS file for all modals
import Banana30Image from "../../assets/logos/banana.png"; // update path as needed

function Banana30Modal() {
  // Prevent click on modal content from closing the modal
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay">
      <div className="health-modal" onClick={stopPropagation}>
        <img
          src={Banana30Image}
          alt="Smiling lime indicating 80% healthy"
          className="health-image"
        />
        <h2 className="health-title">You&apos;re 30% Healthy!</h2>
        <p className="health-text">
          You're making progress! With a few small changes, reach your best
          self.
        </p>
      </div>
    </div>
  );
}

export default Banana30Modal;
