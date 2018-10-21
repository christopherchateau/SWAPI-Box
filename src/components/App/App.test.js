import React from "react";
import { shallow } from "enzyme";
import App from "./index";

describe("App", () => {
  describe("Rendering", () => {
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

    it("selected property in state should initialize as empty string ", () => {
      expect(wrapper.state().selected).toEqual("");
    });

    it("updateData should add data to appropriate array in state", () => {
      wrapper.instance().updateData("people", mockPeople);
      expect(wrapper.state().people).toHaveLength(2);
      expect(wrapper.state().people[1].name).toEqual("Luke Skywalker");
    });
  });

  describe("handleCardClick", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it("Should add a favorited card to the given category in state", () => {
      wrapper.state().selected = "people";
      const sampleCard = { name: "Luke Skywalker", homeworld: "Tatooine"};
      wrapper.instance().handleCardClick(sampleCard, false);

      expect(wrapper.state().favorites).toEqual([sampleCard]);
    });

    it("Should remove a card that is unfavorited in state", () => {
      wrapper.state().selected = "people";
      const sampleCard = { name: "Luke Skywalker", homeworld: "Tatooine"};
      wrapper.instance().handleCardClick(sampleCard, false);
      wrapper.instance().handleCardClick(sampleCard, true);
      expect(wrapper.state().favorites.length).toBe(0);
    });
  });

  describe("toggleFavorites", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it.skip("Should change selected state data out for favorites data", () => {
      const expected = ["Luke", "Leia", "Vader"];
      wrapper.state().favorites = expected;
      wrapper.state().selected = "people";
      wrapper.instance().toggleFavorites();
      console.log(wrapper.state())
      //expect(wrapper.state().people).toEqual(expected);
    });
  });

  describe("loadCards", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it("", async () => {

      //console.log(await wrapper.instance().loadCards('vehicles'))
      //console.log(wrapper.state())
    });
  });
});
