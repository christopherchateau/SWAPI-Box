import React, { Component } from "react";
import * as API from "../../helper/helper";
import MainPage from "../MainPage";
import SideScroll from "../SideScroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
      episodeData: {},
      vehicles: [],
      people: [],
      planets: []
    };
  }

  componentDidMount() {
    this.getEpisodeData();
  }

  getEpisodeData() {
    API.getRandomEpisode()
      .then(episodeData => this.setState({ episodeData }))
  }

  updateData = (key, value) => {
    this.setState({ [key]: value, selected: key });
  }

  handleCardClick = (event) => {
    console.log(event)
  };

  render() {
    const { episodeData } = this.state;
    return (
      <div className="App">
        <SideScroll episodeData={episodeData} />
        <MainPage
          cardData={this.state[this.state.selected] || []}
          updateData={this.updateData}
          handleCardClick={this.handleCardClick}/>
      </div>
    );
  }
}

export default App;
