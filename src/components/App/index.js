import React, { Component } from "react";
import * as API from "../../helper/helper";
import MainPage from "../MainPage";
import SideScroll from "../SideScroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      episodeData: {},
      vehicles: [],
      people: [],
      planets: [],
      favorites: { people: [], planets: [], vehicles: [] }
    };
  }

  componentDidMount() {
    this.getEpisodeData();
    if (localStorage.getItem("favorites")) {
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      this.setState({ favorites });
    }
  }

  toggleFavorites = () => {
    const { selected, favorites } = this.state;
    this.updateData(selected, favorites[selected]);
  };

  getEpisodeData() {
    API.getRandomEpisode().then(episodeData => this.setState({ episodeData }));
    setTimeout(() => {
      this.getEpisodeData();
    }, 60000);
  }

  updateData = (key, value) => {
    this.setState({ [key]: value, selected: key });
  };

  handleCardClick = (card, favorited) => {
    let { selected, favorites } = this.state;
    const updatedFavorites = favorites;
    let updateArray;

    if (!favorited) {
      updateArray = [card, ...favorites[selected]];
    } else {
      updateArray = favorites[selected].filter(favorite => {
        return favorite.name !== card.name;
      });
    }
    updatedFavorites[selected] = updateArray;
    this.setState({ favorites: updatedFavorites });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  render() {
    const { episodeData, selected, favorites } = this.state;
    const counter = favorites[selected] ? favorites[selected].length : 0;
    return (
      <div className="App">
        <SideScroll className="hide" episodeData={episodeData} />
        <MainPage
          toggleFavorites={this.toggleFavorites}
          favoritesCount={counter}
          cardData={this.state[selected] || []}
          updateData={this.updateData}
          handleCardClick={this.handleCardClick}
        />
      </div>
    );
  }
}

export default App;
