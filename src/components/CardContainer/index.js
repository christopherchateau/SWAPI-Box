import React, { PureComponent } from "react";
import Card from "../Card";
import PropTypes from "prop-types";
import obiWan from "../../images/obi-wan.jpg";
import "./CardContainer.css";

class CardContainer extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { cardData, handleCardClick, selectedCategory } = this.props;
    let displayText;
    selectedCategory === "initial"
      ? (displayText = "$ select a category $")
      : (displayText = "These are not the cards you are looking for!");
      
    const cards = cardData.map((card, index) => {
      return (
        <Card
          key={Math.random() + index}
          handleCardClick={handleCardClick}
          cardData={card}
        />
      );
    });

    if (cards.length) {
      return <div className="CardContainer">{cards}</div>;
    } else {
      return (
        <div className="CardContainer center">
          <h1 className="emptyContainerMessage">{displayText}</h1>
          <img className="obiWanPic" src={obiWan} />
        </div>
      );
    }
  }
}

CardContainer.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  cardData: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired
};

export default CardContainer;
