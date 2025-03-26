import React from "react";
import "../../assets/styles/orderComponents.css";

/* Example images */
import noOrdersImg from "../../assets/images/noOrders.png";
import arrow from "../../assets/images/arrowDotted.png"; // The dotted arrow

const OrderComponent = () => {
  return (
    <section className="order-section">
      {/* Left side */}
      <div className="order-left">
        <img src={noOrdersImg} alt="No orders yet" className="no-orders-img" />
        <h2>No orders yet</h2>
        <p>Feeling hungry? Place your first order now!</p>
      </div>

      {/* Arrow in the middle */}
      <div className="arrow-container">
        <img src={arrow} alt="Dotted arrow" className="arrow-img" />
      </div>

      {/* Right side: The Jollof form */}
      <div className="order-right">
        <div className="order-header">
          <h3>Order Hunch's Signature Jollof</h3>
          <p>Join over 1000+ happy Hunchies enjoying our signature jollof rice</p>
        </div>

        <form className="jollof-form">
          <label>Name</label>
          <input type="text" placeholder="Name" />

          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />

          {/* Row with No + Street + City/LGA */}
          <div className="row-group">
            <div>
              <label>No</label>
              <input type="text" placeholder="No" />
            </div>
            <div>
              <label>Street</label>
              <input type="text" placeholder="Street" />
            </div>
            <div>
              <label>City/LGA</label>
              <input type="text" placeholder="City/LGA" />
            </div>
          </div>

          <label>Number of packs</label>
          <input type="number" placeholder="Number of packs" />

          <label>Preferred protein</label>
          <select>
            <option>Chicken</option>
            <option>Beef</option>
            <option>Fish</option>
          </select>

          <label>Extras</label>
          <select>
            <option>Plantain</option>
            <option>Moi Moi</option>
            <option>Salad</option>
          </select>

          <label>Spice Level</label>
          <select>
            <option>Mild</option>
            <option>Medium</option>
            <option>Hot</option>
          </select>

          <label>Make a request here...</label>
          <textarea placeholder="Any special instructions?"></textarea>

          <button type="submit" className="order-btn">Order Now</button>
        </form>
      </div>
    </section>
  );
};

export default OrderComponent;
