import React, { useContext, useReducer, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function countReducer(state, action) {
  if (action.type === "increment") {
    return { itemCount: state.itemCount + 1 };
  } else if (action.type === "decrement") {
    return { itemCount: state.itemCount - 1 };
  }
  throw Error("Unknown action.");
}

const FoodItem = ({ id, name, price, desc, image }) => {
  // const [state, dispatch] = useReducer(countReducer, { itemCount: 0 });
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
        />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <h4>{name}</h4>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <div className="food-item-pricing">
          <p className="food-item-price">&#8377;{price * 49}</p>
          {!cartItems[id] ? (
            <button
              onClick={() => addToCart(id)}
              className="primary-btn add-to-cart"
            >
              Add
            </button>
          ) : (
            <div className="food-item-counter">
              <button onClick={() => removeFromCart(id)}>
                <span>&#8722;</span>
              </button>
              <p>{cartItems[id]}</p>
              <button onClick={() => addToCart(id)}>
                <span>&#43;</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
