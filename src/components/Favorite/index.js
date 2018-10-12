import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Favorite.css";

class Favorite extends Component {
  render() {
    const { toggleFavorites, favoritesCount, selectedCategory } = this.props;
    return (
      <div className="Favorites">
        <button
          onClick={toggleFavorites}
          className="favoritesBtn"
          disabled={!selectedCategory.length}
        >
          <span className="favoritesIcon">#</span> Favorite {selectedCategory}:{" "}
          {favoritesCount}
        </button>
      </div>
    );
  }
}

Favorite.propTypes = {
  toggleFavorites: PropTypes.func.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string.isRequired
};

export default Favorite;
