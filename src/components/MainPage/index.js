import React from "react";
import PropTypes from "prop-types";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <h1>SWAPI-Box$</h1>
      <Favorite />
      <Buttons />
      <hr />
      <CardContainer />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
