import React, { Component } from "react";
import * as API from "../../helper/helper";
import MainPage from "../MainPage";
import SideScroll from "../SideScroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "initial",
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
      const favorites = this.retrieveStorage();
      this.setState({ favorites });
    }
  }

  toggleFavorites = () => {
    let { selected, favorites } = this.state;
    this.updateData(selected, favorites[selected]);
  };

  getEpisodeData() {
    API.getRandomEpisode().then(episodeData => this.setState({ episodeData }));
    setTimeout(() => {
      this.getEpisodeData();
    }, 60000);
  }

  updateData = (key, value) => {
    const { favorites } = this.state;
    const names = favorites[key].map(card => card.name);
    const filteredCards = value.filter(card => {
      return !names.includes(card.name);
    });
    value = [...favorites[key], ...filteredCards];
    this.setState({ [key]: value, selected: key });
  };

  handleCardClick = (card, favorited) => {
    let { selected, favorites } = this.state;
    const updatedFavorites = favorites;
    let updateArray;

    if (!favorited) {
      updateArray = [card, ...favorites[selected]];
    } else {
      updateArray = this.removeDuplicateCard(card);
    }
    updatedFavorites[selected] = updateArray;
    this.setState({ favorites: updatedFavorites });
    this.setStorage(updatedFavorites);
  };

  removeDuplicateCard = card => {
    let { selected, favorites } = this.state;
    favorites[selected].filter(favorite => {
      return favorite.name !== card.name;
    });
  };

  setStorage = data => {
    localStorage.setItem("favorites", JSON.stringify(data));
  };

  retrieveStorage = () => {
    return JSON.parse(localStorage.getItem("favorites"));
  };

  render() {
    const { episodeData, selected, favorites } = this.state;
    const counter = favorites[selected] ? favorites[selected].length : 0;
    return (
      <div className="App">
        <SideScroll className="hide" episodeData={episodeData} />
        <MainPage
          selectedCategory={selected}
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
