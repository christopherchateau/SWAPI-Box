import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { handleCardClick, cardData } = this.props;
    const { name } = cardData;
    delete cardData.name;
    const listItems = Object.keys(cardData).map((value, index) => {
      if (cardData[value].length) {
        return <li key={name + index}>{`${value}: ${cardData[value]}`}</li>;
      }
    });
    return (
      <div className="Card">
        <h2 className="name">
          {name}
          <span
            className="favoriteIcon"
            onClick={() => handleCardClick("clicked")}
          >
            $
          </span>
        </h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

Card.propTypes = {
  handleCardClick: PropTypes.func.isRequired
};

export default Card;
