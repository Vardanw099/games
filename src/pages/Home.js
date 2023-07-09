import React, { useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Content from "../components/Content";

function Home() {
  const [selectedCategory, setselectedCategory] = useState([]);
  const category = (item) => {
    setselectedCategory(item);
  };

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div
        style={{
          width: "100%",
          height: "5px",
          background: "#181a1d",
        }}
      ></div>
      <div className="container-fluid contentContainer">
        <div className="row">
          <Categories toUp={category} />
          <Content categoryName={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

export default Home;
