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
      let wrapper;
      let API = {};

      beforeEach(() => {
        wrapper = shallow(
          <Buttons updateData={jest.fn()} selectedCategory={"planets"} />
        );
      });

      it.skip("Should call getPeople when people button is clicked", () => {
        const peopleBtn = wrapper.find(".people");
        peopleBtn.simulate("click");
        expect(wrapper.instance().updateData("planets")).toHaveBeenCalled();
      });

      it.skip("Should call getPlanets when planets button is clicked", () => {
        let planets = jest.fn();
        const planetBtn = wrapper.find(".planets");
        planetBtn.simulate("click");
        expect(planets).toHaveBeenCalled();
      });

      it.skip("Should call getVehicles when vehicles button is clicked", () => {
        API.getVehicles = jest.fn();
        const vehicleBtn = wrapper.find(".vehicles");
        vehicleBtn.simulate("click");
        expect(API.getVehicles).toHaveBeenCalled();
      });
    });
  });
});
