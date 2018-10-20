import React, { PureComponent } from "react";
import Card from "../Card";
import PropTypes from "prop-types";
import obiWan from "../../images/obi-wan.jpg";
import yoda from "../../images/yoda.png";
import "./CardContainer.css";

class CardContainer extends PureComponent {
  render() {
    const { cardData, handleCardClick, selectedCategory } = this.props;
    let displayText, characterPic;
    
    if (selectedCategory) {
      displayText = "These are not the cards you are looking for!";
      characterPic = obiWan;
    // } 
    // else if (selectedCategory !== 'favorites' && cardData === []) {
    //   displayText = "$ loading $";

    } else {
      displayText = "$ select a category, you must $";
      characterPic = yoda;
    }
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
          <img className="characterPic" alt="obi-wan/yoda" src={characterPic} />
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
