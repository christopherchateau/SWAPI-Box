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
  }

  getEpisodeData() {
    API.getRandomEpisode().then(episodeData => this.setState({ episodeData }));
  }

  updateData = (key, value) => {
    this.setState({ [key]: value, selected: key });
  };

  handleCardClick = card => {
    const { selected, favorites } = this.state;
    const updateArray = [card, ...favorites[selected]];
    const updatedFavorites = favorites;
    updatedFavorites[selected] = updateArray;
    this.setState({ favorites: updatedFavorites });
  };

  render() {
    const { episodeData } = this.state;
    return (
      <div className="App">
        <SideScroll className="hide" episodeData={episodeData} />
        <MainPage
          cardData={this.state[this.state.selected] || []}
          updateData={this.updateData}
          handleCardClick={this.handleCardClick}
        />
      </div>
    );
  }
}

export default App;
