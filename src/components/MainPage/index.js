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
  toggleFavorites,
  selectedCategory
}) => {
  return (
    <div className="MainPage">
      <h1 className="mainTitle">$ SWAPi-Box $</h1>
      <Favorite
        selectedCategory={selectedCategory}
        toggleFavorites={toggleFavorites}
        favoritesCount={favoritesCount}
      />
      <Buttons selectedCategory={selectedCategory} updateData={updateData} />
      <CardContainer cardData={cardData} handleCardClick={handleCardClick} />
    </div>
  );
};

MainPage.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  cardData: PropTypes.array.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired
};

export default MainPage;
