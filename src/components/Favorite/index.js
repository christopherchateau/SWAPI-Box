import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Favorite.css";

class Favorite extends Component {
  render() {
    const { toggleFavorites, favoritesCount, selectedCategory } = this.props;
    const isFavorites = window.location.pathname
      .split("/")
      .includes("favorites");
    return (
      <div className="Favorites">
        <NavLink
          to={`${selectedCategory}/favorites`}
          className="favoritesBtn"
          onClick={toggleFavorites}
          disabled={isFavorites}
        >
          <span className="favoritesIcon">#</span> Favorite{" "}
          {selectedCategory !== "initial" ? selectedCategory : ""}:{" "}
          {favoritesCount}
        </NavLink>
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
