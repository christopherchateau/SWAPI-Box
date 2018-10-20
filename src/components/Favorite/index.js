import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Favorite.css";

class Favorite extends Component {

  handleClick = e => {
    // if (window.location.pathname === "/" ||
    //   window.location.pathname.split("/").includes("favorites")) {
    //   e.preventDefault();
    // }
  };

  render() {
    const { favoritesCount, selectedCategory, toggleFavorites } = this.props;
    return (
      <div className="Favorites">
        <NavLink
          to={`/favorites`}
          className="favoritesBtn"
          onClick={toggleFavorites}
        >
          <span className="favoritesIcon">#</span> Favorites: {favoritesCount} 
          {/* {selectedCategory !== "initial" ? selectedCategory : ""}:{" "} */}
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
