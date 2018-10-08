import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";

const Buttons = props => {
  return (
    <div className="button-section">
      <button>people</button>
      <button>planets</button>
      <button>vehicles</button>
    </div>
  );
};

Buttons.propTypes = {};

export default Buttons;
