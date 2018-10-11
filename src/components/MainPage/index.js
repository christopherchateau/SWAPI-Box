import React from "react";
import PropTypes from "prop-types";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

const MainPage = ({ updateData, handleCardClick }) => {
  return (
    <div className="main-page">
      <header className="title-favorites">
        <Favorite />
        <h1 className="title-text ">$ SWAPi-Box $</h1>
      </header>
      <Buttons updateData={updateData}/>
      <CardContainer handleCardClick={handleCardClick} />
    </div>
  );
};

MainPage.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
};

export default MainPage;
