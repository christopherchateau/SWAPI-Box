import React, { Component } from 'react';
import './Favorite.css';

class Favorite extends Component {
  render() {
    return (
      <div className="favorites">
        <button className="favorites-button">View Favorites</button>
      </div>
    );
  }
}

export default Favorite;
