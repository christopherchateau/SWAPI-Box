import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const mockCard = {
      name: "Luke Skywalker",
      homeworld: "Tatooine",
      species: "Human",
      language: "Galactic Basics",
      popultion: 200000
    };

    return (
      <div className="Card">
        <h2 className="name">
          {mockCard.name}
          <span className="favoriteIcon">$</span>
        </h2>
        <ul>
          <li>Homeworld: {mockCard.homeworld}</li>
          <li>Species: {mockCard.species}</li>
          <li>Language: {mockCard.language}</li>
          <li>Popultion: {mockCard.popultion}</li>
        </ul>
      </div>
    );
  }
}

export default Card;
