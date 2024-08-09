import React, { useContext } from "react";
import "./DisplayFood.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const DisplayFood = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="display-food" id="display-food">
      <h2>Top Dishes near you</h2>
      <div className="display-food-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              desc={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DisplayFood;
