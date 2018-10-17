import React, { Component } from "react";
import * as API from "../../helper/helper";
import MainPage from "../MainPage";
import SideScroll from "../SideScroll";
import { Route } from "react-router-dom"; import "./App.css";

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

  async getEpisodeData() {
   const episodeData = await API.randomEpisode()
    console.log(episodeData);
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
    const appFunctionBundle = {
      toggleFavorites: this.toggleFavorites,
      updateData: this.updateData,
      handleCardClick: this.handleCardClick
    }
    return (
      <div className="App">
        <SideScroll className="hide" episodeData={episodeData} />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <MainPage
                selectedCategory={"initial"}
                appFunctionBundle={appFunctionBundle}
                favoritesCount={0}
                cardData={[]}
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
                appFunctionBundle={appFunctionBundle}
                favoritesCount={favorites.people.length}
                cardData={this.state.people}
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
                appFunctionBundle={appFunctionBundle}
                favoritesCount={favorites.planets.length}
                cardData={this.state.planets}
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
                appFunctionBundle={appFunctionBundle}
                favoritesCount={favorites.vehicles.length}
                cardData={this.state.vehicles}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
