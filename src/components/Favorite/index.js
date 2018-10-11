import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Favorite.css';

class Favorite extends Component {
  render() {
    return (
      <div className="Favorites">
        <button className="favoritesBtn">Favorites: {this.props.favoriteCount}</button>
      </div>
    );
  }
}

export default Favorite;
