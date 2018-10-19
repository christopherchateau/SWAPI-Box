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
      cardData: props.cardData,
      category: props.pathUsed
    };
  }
  
  async componentDidMount() {
    const { pathUsed } = this.props;
    if (pathUsed.length) {
      const cardData = await API[pathUsed]();
      await this.setState({ cardData });
    }
  }

  async componentDidUpdate() {
    const { pathUsed, selectedCategory } = this.props;
    const { category } = this.state;
    const path = window.location.pathname.split("/");
    if (pathUsed !== category && pathUsed.length) {
      const cardData = await API[pathUsed]();
      this.setState({ cardData, category: pathUsed });
    } else if (
      this.props.cardData !== this.state.cardData &&
      path.includes("favorites")
    ) {
      this.setState({ cardData: this.props.cardData });
    } else if (pathUsed !== category) {
      this.setState({ cardData: [], category: "" });
    }
  }

  render() {
    const {
      favoritesCount,
      toggleFavorites,
      updateData,
      handleCardClick,
      selectedCategory,
      pathUsed
    } = this.props;
    const { cardData } = this.state;
    return (
      <div className="MainPage">
        <h1 className="mainTitle">$ SWAPi-Box $</h1>
        <Favorite
          selectedCategory={pathUsed}
          toggleFavorites={toggleFavorites}
          favoritesCount={favoritesCount}
        />
        <Buttons selectedCategory={selectedCategory} updateData={updateData} />
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
  cardData: PropTypes.array.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  bundledAppFunctions: PropTypes.object.isRequired
};

export default MainPage;
