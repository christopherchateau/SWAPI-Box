import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Favorite.css";

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      linkDisabled:
        window.location.pathname === "/" ||
        window.location.pathname.split("/").includes("favorites")
    };
  }

  handleClick = e => {
    if (this.state.linkDisabled) {
      e.preventDefault();
    }
  };

  render() {
    const { favoritesCount, selectedCategory } = this.props;
    return (
      <div className="Favorites">
        <NavLink
          to={`${selectedCategory}/favorites`}
          className="favoritesBtn"
          onClick={this.handleClick}
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
