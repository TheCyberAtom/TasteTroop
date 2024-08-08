import React from "react";
import "./MenuList.css";
import { menu_list } from "../../assets/assets";

const MenuList = ({ category, setCategory }) => {
  return (
    <div className="menu-container" id="menu-container">
      <h1>Our Menu</h1>
      <p className="menu-desc">
        Choose a diverse menu featuring a delectable list of foods.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
              className="menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default MenuList;
