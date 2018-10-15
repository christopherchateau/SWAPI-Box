import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";
import * as API from "../../helper/helper";

const Buttons = ({ updateData, selectedCategory }) => {
  return (
    <div className="Buttons">
      <button
        className={"people " + (selectedCategory === "people" ? "selected" : "")}
        onClick={() =>
          API.getPeople().then(people => updateData("people", people))
        }
      >
        people
      </button>
      <button
      className={"planets " + (selectedCategory === "planets" ? "selected" : "")}
        onClick={() =>
          API.getPlanets().then(planets => updateData("planets", planets))
        }
      >
        planets
      </button>
      <button
      className={"vehicles " + (selectedCategory === "vehicles" ? "selected" : "")}
        onClick={() =>
          API.getVehicles().then(vehicles => updateData("vehicles", vehicles))
        }
      >
        vehicles
      </button>
    </div>
  );
};

Buttons.propTypes = {
  updateData: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired
};

export default Buttons;
