import React from "react";
import Card from "../Card";
import PropTypes from "prop-types";
import "./CardContainer.css";

const CardContainer = ({ handleCardClick }) => {
  return (
    <div className="card-container">
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
      <Card handleCardClick={handleCardClick} />
    </div>
  );
};

CardContainer.propTypes = {
  handleCardClick: PropTypes.func.isRequired
};

export default CardContainer;
