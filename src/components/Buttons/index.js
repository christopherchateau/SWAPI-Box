import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";
import * as API from "../../helper/helper";

const Buttons = ({ updateData, selectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div className="Buttons">
      <button
        className={selectedCategory === "people" ? "selected" : ""}
        onClick={() =>
          API.getPeople().then(people => updateData("people", people))
        }
      >
        people
      </button>
      <button
      className={selectedCategory === "planets" ? "selected" : ""}
        onClick={() =>
          API.getPlanets().then(planets => updateData("planets", planets))
        }
      >
        planets
      </button>
      <button
      className={selectedCategory === "vehicles" ? "selected" : ""}
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
