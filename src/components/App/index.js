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
      const favorites = JSON.parse(localStorage.getItem("favorites"));
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
      updateArray = favorites[selected].filter(favorite => {
        return favorite.name !== card.name;
      });
    }
    updatedFavorites[selected] = updateArray;
    this.setState({ favorites: updatedFavorites });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  render() {
    const { episodeData, favorites } = this.state;
    return (
      <div className="App">
        <SideScroll className="hide" episodeData={episodeData} />
        <Route
          exact
          path="/"
          render={() => {
            const counter = 0;
            return (
              <MainPage
                selectedCategory={"initial"}
                toggleFavorites={this.toggleFavorites}
                favoritesCount={counter}
                cardData={[]}
                updateData={this.updateData}
                handleCardClick={this.handleCardClick}
              />
            );
          }}
        />
        <Route
          path="/people"
          render={() => {
            return (
              <MainPage
                selectedCategory={"people"}
                toggleFavorites={this.toggleFavorites}
                favoritesCount={favorites.people.length}
                cardData={this.state.people}
                updateData={this.updateData}
                handleCardClick={this.handleCardClick}
              />
            );
          }}
        />
        <Route
          path="/planets"
          render={() => {
            return (
              <MainPage
                selectedCategory={"planets"}
                toggleFavorites={this.toggleFavorites}
                favoritesCount={favorites.planets.length}
                cardData={this.state.planets}
                updateData={this.updateData}
                handleCardClick={this.handleCardClick}
              />
            );
          }}
        />
        <Route
          path="/vehicles"
          render={() => {
            return (
              <MainPage
                selectedCategory={"vehicles"}
                toggleFavorites={this.toggleFavorites}
                favoritesCount={favorites.vehicles.length}
                cardData={this.state.vehicles}
                updateData={this.updateData}
                handleCardClick={this.handleCardClick}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
