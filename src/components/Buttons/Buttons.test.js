import React from "react";
import Buttons from "./index";
import { shallow } from "enzyme";

describe("Buttons", () => {
  let wrapper, updateData;

  beforeEach(() => {
    updateData = jest.fn()
    wrapper = shallow(
      <Buttons updateData={updateData} selectedCategory={"planets"} />
    );
  });

  it("Renders like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should add selected className to planets when selected", () => {
    const planets = wrapper.find(".planets");
    expect(planets.hasClass("selected")).toBe(true);
  });

  it("Should add selected className to people when selected", () => {
    wrapper = shallow(
      <Buttons updateData={updateData} selectedCategory={"people"} />
    );
    const people = wrapper.find(".people");
    expect(people.hasClass("selected")).toBe(true);
  });

  it("Should add selected className to vehicles when selected", () => {
    wrapper = shallow(
      <Buttons updateData={updateData} selectedCategory={"vehicles"} />
    );
    const vehicles = wrapper.find(".vehicles");
    expect(vehicles.hasClass("selected")).toBe(true);
  });
});
