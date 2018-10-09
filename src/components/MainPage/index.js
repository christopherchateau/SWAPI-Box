import React from "react";
import PropTypes from "prop-types";
import Favorite from "../Favorite";
import CardContainer from "../CardContainer";
import Buttons from "../Buttons";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <header className="title-favorites">
        <h1 className="title-text ">SWAPi-Box $</h1>
        <Favorite />
      </header>
      <Buttons />
      <hr />
      <CardContainer />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
