import React, { Component } from "react";
import PropTypes from "prop-types";
import * as API from "../../helper/helper";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: props.cardData
    }
  }

  async componentDidMount() {
    let cardData = [...this.state.cardData];
    if (cardData.length === 0) {
      cardData = await API[this.props.selectedCategory]();
    }
    this.setState({cardData});
  }

  render() {
    const {
      favoritesCount,
      appFunctionBundle,
      selectedCategory
    } = this.props;
    const { cardData } = this.state;
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
  }
}

MainPage.propTypes = {
  cardData: PropTypes.array.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  appFunctionBundle: PropTypes.object.isRequired
};

export default MainPage;
