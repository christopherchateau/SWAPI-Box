import React, { PureComponent } from "react";
import Card from "../Card";
import PropTypes from "prop-types";
import "./CardContainer.css";

class CardContainer extends PureComponent {
  constructor(cardData, handleCardClick) {
    super();
    this.state = {};
  }

  render() {
    const { cardData, handleCardClick } = this.props;
    const cards = cardData.map((card, index) => {
      return (
        <Card
          key={Math.random() + index}
          handleCardClick={handleCardClick}
          cardData={card}
        />
      );
    });
    return <div className="CardContainer">{cards}</div>;
  }
}

CardContainer.propTypes = {
  handleCardClick: PropTypes.func.isRequired
};

export default CardContainer;
