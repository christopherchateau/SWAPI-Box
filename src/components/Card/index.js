import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";

class Card extends Component {
  constructor() {
    super();
    this.state = { favorited: false };
  }

  handleClick = () => {
    const { favorited } = this.state;
    this.setState(
      { favorited: !favorited },
      this.props.handleCardClick(this.props.cardData, this.state.favorited)
    );
  };

  render() {
    const { favorited } = this.state;
    const { handleCardClick, cardData } = this.props;
    const { name } = cardData;
    const listItems = Object.keys(cardData).map((value, index) => {
      if (value === "name") return;
      if (cardData[value].length) {
        return <li key={name + index}>{`${value}: ${cardData[value]}`}</li>;
      }
    });
    return (
      <div className={"Card" + (favorited ? " favorited" : "")}>
        <h2 className="name">
          {name}
          <span className="favoriteIcon" onClick={this.handleClick}>
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
