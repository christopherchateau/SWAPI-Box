import React from "react";
import Buttons from "./index";
import { shallow } from "enzyme";

describe("Buttons", () => {
  describe("Rendering", () => {
    let wrapper, updateData;

    beforeEach(() => {
      updateData = jest.fn();
      wrapper = shallow(
        <Buttons updateData={updateData} selectedCategory={"planets"} />
      );
    });

    it("Renders like snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it.skip("Should add activated className to planets when activated", () => {
      const planets = wrapper.find(".planets");
      const people = wrapper.find(".people");
      const vehicles = wrapper.find(".vehicles");
      expect(planets.hasClass("active")).toBe(true);
      expect(people.hasClass("active")).toBe(false);
      expect(vehicles.hasClass("active")).toBe(false);
    });

    it.skip("Should add selected className to people when selected", () => {
      wrapper = shallow(
        <Buttons updateData={updateData} selectedCategory={"people"} />
      );
      const planets = wrapper.find(".planets");
      const people = wrapper.find(".people");
      const vehicles = wrapper.find(".vehicles");
      expect(people.hasClass("selected")).toBe(true);
      expect(planets.hasClass("selected")).toBe(false);
      expect(vehicles.hasClass("selected")).toBe(false);
    });

    it.skip("Should add selected className to vehicles when selected", () => {
      wrapper = shallow(
        <Buttons updateData={updateData} selectedCategory={"vehicles"} />
      );
      const planets = wrapper.find(".planets");
      const people = wrapper.find(".people");
      const vehicles = wrapper.find(".vehicles");
      expect(vehicles.hasClass("selected")).toBe(true);
      expect(planets.hasClass("selected")).toBe(false);
      expect(people.hasClass("selected")).toBe(false);
    });
  });

  describe("onClick", () => {
    let wrapper, updateData;
    const API = {};

    beforeEach(() => {
      updateData = jest.fn();
      wrapper = shallow(
        <Buttons updateData={updateData} selectedCategory={"planets"} />
      );
    });

    it.skip("Should call getPeople when people button is clicked", () => {
      API.getPeople = jest.fn();
      const peopleBtn = wrapper.find(".people");
      peopleBtn.simulate("click");
      expect(API.getPeople).toHaveBeenCalled();
    });

    it.skip("Should call getPlanets when planets button is clicked", () => {
      API.getPlanets = jest.fn();
      const planetBtn = wrapper.find(".planets");
      planetBtn.simulate("click");
      expect(API.getPlanets).toHaveBeenCalled();
    });

    it.skip("Should call getVehicles when vehicles button is clicked", () => {
      API.getVehicles = jest.fn();
      const vehicleBtn = wrapper.find(".vehicles");
      vehicleBtn.simulate("click");
      expect(API.getVehicles).toHaveBeenCalled();
    });
  });
});
