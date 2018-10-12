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
      favorites: { people: [], planets: [], vehicles: [] },
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
    let { selected, favorites, displayFavorites } = this.state;
    displayFavorites = !displayFavorites;
    this.updateData(selected, favorites[selected], displayFavorites);
  };

  getEpisodeData() {
    API.getRandomEpisode().then(episodeData => this.setState({ episodeData }));
    setTimeout(() => {
      this.getEpisodeData();
    }, 60000);
  }

  updateData = (key, value, displayFavorites) => {
    const { favorites } = this.state;
    const names = favorites[key].map(card => card.name);
    const filteredCards = value.filter(card => {
      return !names.includes(card.name);
    });
    value = [...favorites[key], ...filteredCards];
    this.setState({ [key]: value, selected: key, displayFavorites });
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
