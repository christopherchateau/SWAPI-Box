import React, { Component } from "react";
import * as API from "../../helper/helper";
import MainPage from "../MainPage";
import SideScroll from "../SideScroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      episodeData: {}
    };
  }

  componentDidMount() {
    this.getEpisodeData();
  }

  getEpisodeData() {
    Promise.resolve(API.getRandomEpisode())
      .then(episodeData => this.setState({ episodeData }))
      .catch(() => console.log("Error fetching episode"));
  }

  handleCardClick = (event) => {
    console.log(event)
  };

  render() {
    const { episodeData } = this.state;
    return (
      <div className="App">
        <SideScroll episodeData={episodeData} />
        <MainPage handleCardClick={this.handleCardClick}/>
      </div>
    );
  }
}

export default App;
