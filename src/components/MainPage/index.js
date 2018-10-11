import React from "react";
import PropTypes from "prop-types";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

const MainPage = ({
  cardData,
  updateData,
  handleCardClick,
  favoritesCount,
  toggleFavorites
}) => {
  return (
    <div className="MainPage">
      <header className="mainHeader">
        <Favorite
          toggleFavorites={toggleFavorites}
          favoritesCount={favoritesCount}
        />
        <h1 className="mainTitle">$ SWAPi-Box $</h1>
      </header>
      <Buttons updateData={updateData} />
      <CardContainer cardData={cardData} handleCardClick={handleCardClick} />
    </div>
  );
};

MainPage.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  cardData: PropTypes.array.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  toggleFavorites: PropTypes.func.isRequired
};

export default MainPage;
