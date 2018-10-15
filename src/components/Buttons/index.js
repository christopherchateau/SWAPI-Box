import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";
import * as API from "../../helper/helper";
import { NavLink } from "react-router-dom";

const Buttons = ({ updateData, selectedCategory }) => {
  return (
    <div className="Buttons">
      <NavLink
        to="/people"
        className="people"
        onClick={() =>
          API.getPeople().then(people => updateData("people", people))
        }
      >
        people
      </NavLink>
      <NavLink
        to="/planets"
        className="planets"
        onClick={() =>
          API.getPlanets().then(planets => updateData("planets", planets))
        }
      >
        planets
      </NavLink>
      <NavLink
        to="/vehicles"
        className="vehicles"
        onClick={() =>
          API.getVehicles().then(vehicles => updateData("vehicles", vehicles))
        }
      >
        vehicles
      </NavLink>
    </div>
  );
};

Buttons.propTypes = {
  updateData: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired
};

export default Buttons;
