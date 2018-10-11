import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Favorite.css";

class Favorite extends Component {
  render() {
    const { toggleFavorites, favoritesCount } = this.props;
    return (
      <div className="Favorites">
        <button onClick={toggleFavorites} className="favoritesBtn">
          # Favorites: {favoritesCount}
        </button>
      </div>
    );
  }
}

Favorite.propTypes = {
  favoritesCount: PropTypes.number.isRequired
};

export default Favorite;
