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
      favorites: []
    };
  }

  componentDidMount() {
    const { selected } = this.state;
    this.getEpisodeData();
    if (selected.length) {
      this.loadCards(selected);
    }
  }

  loadCards = async category => {
    let cardData, favorites = [];
    if (localStorage.getItem("favorites")) {
      favorites = JSON.parse(localStorage.getItem("favorites"));
    } else {
      cardData = await API[category]();
    }
    await this.setState({ [category]: cardData, favorites });
  };

  toggleFavorites = () => {
    let { favorites } = this.state;
    this.updateData('favorites', favorites);
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
    const names = favorites.map(card => card.name);
    const filteredCards = value.filter(card => {
      return !names.includes(card.name);
    });
    value = [...favorites, ...filteredCards];
    this.setState({ [key]: value, selected: key });
  };

  handleCardClick = (card, favorited) => {
    let { selected, favorites } = this.state;
    let updatedFavorites = favorites;
    let updateArray;

    if (!favorited) {
      updateArray = [card, ...favorites];
    } else {
      updateArray = favorites.filter(favorite => {
        return favorite.name !== card.name;
      });
    }
    updatedFavorites = updateArray;
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
    if (selected) {
      selectedData = this.state[selected];
    }
    return (
      <div className="App">
        <SideScroll className="hide" episodeData={episodeData} />
        <Route
          exact
          path="/(planets|people|vehicles|favorites|)"
          render={({ match }) => {
            const pathUsed = match.url.split("/")[1];
            return (
              <MainPage
                pathUsed={pathUsed}
                {...bundledAppFunctions}
                selectedCategory={selected}
                cardData={selectedData || []}
                favoritesCount={favorites.length}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
