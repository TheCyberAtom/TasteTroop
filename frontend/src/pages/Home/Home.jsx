import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import MenuList from "../../components/MenuList/MenuList";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="home">
      <Header />
      <MenuList category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
