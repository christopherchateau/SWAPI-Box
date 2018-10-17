import React from "react";
import PropTypes from "prop-types";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

const MainPage = ({
  cardData,
  favoritesCount,
  appFunctionBundle,
  selectedCategory
}) => {
  return (
    <div className="MainPage">
      <h1 className="mainTitle">$ SWAPi-Box $</h1>
      <Favorite
        selectedCategory={selectedCategory}
        toggleFavorites={appFunctionBundle.toggleFavorites}
        favoritesCount={favoritesCount}
      />
      <Buttons
        selectedCategory={selectedCategory}
        updateData={appFunctionBundle.updateData}
      />
      <CardContainer
        selectedCategory={selectedCategory}
        cardData={cardData}
        handleCardClick={appFunctionBundle.handleCardClick}
      />
    </div>
  );
};

MainPage.propTypes = {
  cardData: PropTypes.array.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  appFunctionBundle: PropTypes.object.isRequired
};

export default MainPage;
