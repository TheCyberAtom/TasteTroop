import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import MenuList from "../../components/MenuList/MenuList";
import DisplayFood from "../../components/DisplayFood/DisplayFood";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="home">
      <Header />
      <MenuList category={category} setCategory={setCategory} />
      <DisplayFood category={category} />
    </div>
  );
};

export default Home;
