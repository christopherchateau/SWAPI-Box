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
    const people = wrapper.find(".people");
    const vehicles = wrapper.find(".vehicles");
    expect(planets.hasClass("selected")).toBe(true);
    expect(people.hasClass("selected")).toBe(false);
    expect(vehicles.hasClass("selected")).toBe(false);
  });

  it("Should add selected className to people when selected", () => {
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

  it("Should add selected className to vehicles when selected", () => {
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
