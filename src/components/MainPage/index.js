import React, { Component } from "react";
import PropTypes from "prop-types";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    const {
      favoritesCount,
      toggleFavorites,
      updateData,
      handleCardClick,
      selectedCategory,
      //pathUsed,
      cardData,
    } = this.props;
    return (
      <div className="MainPage">
        <h1 className="mainTitle">$ SWAPi-Box $</h1>
        <Favorite
          toggleFavorites={toggleFavorites}
          favoritesCount={favoritesCount}
        />
        <Buttons
          selectedCategory={selectedCategory}
          updateData={updateData}
        />
        <CardContainer
          selectedCategory={selectedCategory}
          cardData={cardData}
          handleCardClick={handleCardClick}
        />
      </div>
    );
  }
}

MainPage.propTypes = {
  favoritesCount: PropTypes.number.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  //pathUsed: PropTypes.string.isRequired
};

export default MainPage;
