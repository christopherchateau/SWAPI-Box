import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Favorite.css';

class Favorite extends Component {
  render() {
    return (
      <div className="favorites">
        <button className="favorites-button">Favorites</button>
      </div>
    );
  }
}

export default Favorite;
