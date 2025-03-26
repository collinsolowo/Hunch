import React from 'react';
import '../../assets/styles/modals.css'; // shared CSS file for all modals
import lime80Image from '../../assets/logos/lime.png'; // update path as needed

function Lime80Modal() {
  // Prevent click on modal content from closing the modal
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay">
      <div className="health-modal" onClick={stopPropagation}>
        <img
          src={lime80Image}
          alt="Smiling lime indicating 80% healthy"
          className="health-image"
        />
        <h2 className="health-title">You&apos;re 80% Healthy!</h2>
        <p className="health-text">
          Based on your details, you&apos;re on track for a balanced lifestyle.
          Keep it up!
        </p>
      </div>
    </div>
  );
}

export default Lime80Modal;
