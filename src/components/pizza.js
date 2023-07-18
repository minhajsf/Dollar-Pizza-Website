import React from "react";
import "./css/pizza.css";
import background from "./images/pizza-splash.jpg";

function Pizza() {
  return (
    <div className="Pizza" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="header-text">Kelsie's Dollar Pizza</h1>
    </div>
  );
}

export default Pizza;
