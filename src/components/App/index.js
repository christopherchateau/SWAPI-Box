import React, { Component } from 'react';
import SWapi from '../../helper/helper';
import MainPage from '../MainPage'
import SideScroll from '../SideScroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      api: new SWapi(),
      episodeData: {}
    };
  }

  componentDidMount() {
    this.getEpisodeData();
  }

  getEpisodeData() {
    const { api } = this.state;
    Promise.resolve(api.getRandomEpisode())
      .then((episodeData) => this.setState({episodeData}))
      .catch(() => console.log('Error fetching episode'));
  }
  render() {
    const {episodeData} = this.state;
    return (
      <div className="App">
        <SideScroll episodeData={episodeData}/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
