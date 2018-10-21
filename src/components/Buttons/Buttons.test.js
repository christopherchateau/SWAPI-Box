import React from "react";
import Buttons from "./index";
import { shallow } from "enzyme";

describe("Buttons", () => {
  describe("Rendering", () => {
    it("Renders like snapshot", () => {
      let wrapper = shallow(
        <Buttons updateData={jest.fn()} selectedCategory={"planets"} />
      );
      expect(wrapper).toMatchSnapshot();
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
