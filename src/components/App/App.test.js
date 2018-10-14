import React from "react";
import { shallow, mount } from "enzyme";
import App from "./index";

describe("App", () => {
  let wrapper;
  let mockPeople;
  let mockPlanets;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockPeople = [
      {
        name: "C-3PO",
        homeworld: "Tatooine",
        language: "n/a",
        population: "200000",
        species: "Droid",
        favorited: false
      },
      {
        name: "Luke Skywalker",
        homeworld: "Tatooine",
        language: "Galactic Basic",
        population: "200000",
        species: "Human",
        favorited: false
      }
    ];
    mockPlanets = [
      {
        name: "Alderaan",
        climate: "temperate",
        population: "2000000000",
        residents: [" Leia Organa", " Bail Prestor Organa", " Raymus Antilles"],
        terrain: "grasslands, mountains",
        favorited: false
      },
      {
        name: "Yavin IV",
        climate: "temperate, tropical",
        population: "1000",
        residents: [],
        terrain: "jungle, rainforests",
        favorited: true
      }
    ];
  });

  it("selected property in state should initialize as 'initial' ", () => {
    expect(wrapper.state().selected).toEqual("initial");
  });

  it("updateData should add data to appropriate array in state", () => {
    wrapper.instance().updateData("people", mockPeople);
    expect(wrapper.state().people).toHaveLength(2);
    expect(wrapper.state().people[1].name).toEqual("Luke Skywalker");
  });

  it("toggleFavorites should toggle", () => {
    wrapper.instance().updateData("planets", mockPlanets);
    console.log(wrapper.state());
    wrapper.instance().toggleFavorites();
    console.log(wrapper.state());
    
  });
});
