import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Favorite.css';

class Favorite extends Component {
  render() {
    console.log(this.props.favoritesCount)
    return (
      <div className="Favorites">
        <button className="favoritesBtn"># Favorites: {this.props.favoritesCount}</button>
      </div>
    );
  }
}

Favorite.propTypes = {
  favoritesCount: PropTypes.number.isRequired
};

export default Favorite;
