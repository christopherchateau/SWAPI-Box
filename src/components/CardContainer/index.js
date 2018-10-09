import React from "react";
import Card from "../Card";
import "./CardContainer.css";

const CardContainer = props => {
  return (
    <div className="card-container">
      <h2>
        <Card />
      </h2>
    </div>
  );
};

export default CardContainer;
