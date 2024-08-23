import React, { useContext, useEffect, useState } from "react";
import "./Order.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { getTotalCartVal, token, foodList, cartItems, loadCartData, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    const proceed = confirm("Do you want to continue with the payment?");
    if (proceed) {
      let orderItems = [];
      foodList.map((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      });
      let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartVal() + 59,
      };
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        loadCartData(token);
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } else {
      toast.warning("Payment Cancelled");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartVal() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="order">
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            name="firstName"
            value={data.firstName}
            onChange={onChangeHandler}
            type="text"
            placeholder="First Name"
            required
          />
          <input
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="street"
          value={data.street}
          onChange={onChangeHandler}
          type="text"
          placeholder="Street"
          required
        />
        <div className="multi-fields">
          <input
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            type="text"
            placeholder="City"
            required
          />
          <input
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="multi-fields">
          <input
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandler}
            type="text"
            placeholder="Zip code"
            required
          />
          <input
            name="country"
            value={data.country}
            onChange={onChangeHandler}
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
          type="text"
          placeholder="Phone"
          required
        />
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
              <b>&#8377;{getTotalCartVal() > 0 ? getTotalCartVal() + 59 : 0}</b>
            </div>
          </div>
          <button type="submit" className="primary-btn">
            Continue To Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Order;
