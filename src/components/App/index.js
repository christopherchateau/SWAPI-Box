import React, { Component } from 'react';
import SideScroll from '../SideScroll';
import './App.css';

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
    const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
    fetch(`https://swapi.co/api/films/${randomEpisodeNumber}`)
      .then(response => response.json())
      .then(json => {
        return {
          opening_crawl: json.opening_crawl,
          title: json.title,
          release_date: json.release_date
        }})
      .then(episodeData => this.setState({episodeData}))
      .catch(err => console.log('Error fetching episode data'));
  }
  render() {
    const {episodeData} = this.state;
    return (
      <div className="App">
        <SideScroll episodeData={episodeData}/>
      </div>
    );
  }
}

export default App;
