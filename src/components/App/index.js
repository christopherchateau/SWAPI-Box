import React, { Component } from "react";
import * as API from "../../helper/helper";
import MainPage from "../MainPage";
import SideScroll from "../SideScroll";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: window.location.pathname.split("/")[1],
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
    let { selected, favorites } = this.state;
    if (this.state.selected) {
      this.updateData(selected, favorites[selected]);
    }
  };

  async getEpisodeData() {
    const episodeData = await API.randomEpisode();
    this.setState({ episodeData });
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
    console.log(value);
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
    const { episodeData, favorites, selected } = this.state;
    const bundledAppFunctions = {
      toggleFavorites: this.toggleFavorites,
      updateData: this.updateData,
      handleCardClick: this.handleCardClick
    };
    let selectedData = [];
    let favoritesCount = 0;

    if (selected) {
      selectedData = this.state[selected];
      favoritesCount = favorites[selected].length;
    }
    return (
      <div className="App">
        <SideScroll className="hide" episodeData={episodeData} />
        <Route
          exact
          path="/(planets|people|vehicles|)"
          render={({ match }) => {
            const pathUsed = match.url.split("/")[1];
            return (
              <MainPage
                pathUsed={pathUsed}
                {...bundledAppFunctions}
                selectedCategory={selected}
                cardData={selectedData || []}
                favoritesCount={favoritesCount}
              />
            );
          }}
        />
        <Route
          path="/(planets|people|vehicles)/favorites"
          render={({ match }) => {
            const pathUsed = match.url.split("/")[1];
            selectedData = favorites[pathUsed];
            favoritesCount = favorites[pathUsed].length;
            return (
              <MainPage
                pathUsed={pathUsed}
                {...bundledAppFunctions}
                selectedCategory={selected}
                cardData={selectedData}
                favoritesCount={favoritesCount}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
