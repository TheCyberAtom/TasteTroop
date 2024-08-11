import React, { useContext } from "react";
import "./Order.css";
import { StoreContext } from "../../context/StoreContext";

const Order = () => {
  const { getTotalCartVal } = useContext(StoreContext);

  return (
    <form className="order">
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCartVal() * 49}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#8377;{getTotalCartVal() > 0 ? 59 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                &#8377;{getTotalCartVal() > 0 ? getTotalCartVal() * 49 + 59 : 0}
              </b>
            </div>
          </div>
          <button className="primary-btn">Continue To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
