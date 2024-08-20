import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <AddIcon />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <ListIcon />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <LocalAtmIcon />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
