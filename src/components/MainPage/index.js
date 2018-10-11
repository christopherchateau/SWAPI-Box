import React from "react";
import PropTypes from "prop-types";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

const MainPage = ({ cardData, updateData, handleCardClick, favoritesCount }) => {
  return (
    <div className="MainPage">
      <header className="mainHeader">
        <Favorite favoritesCount={favoritesCount}/>
        <h1 className="mainTitle">$ SWAPi-Box $</h1>
      </header>
      <Buttons updateData={updateData}/>
      <CardContainer
        cardData={cardData}
        handleCardClick={handleCardClick} />
    </div>
  );
};

MainPage.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  cardData: PropTypes.array.isRequired,
  favoritesCount: PropTypes.number.isRequired
};

export default MainPage;
