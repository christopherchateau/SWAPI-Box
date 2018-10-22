import * as API from "./helper";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
jest.mock("./apiCalls");

describe("SWAPI", () => {
  let expectedResult;

  describe("random episode", () => {

    beforeEach(() => {
      expectedResult = {
        opening_crawl: "star wars blah blah blah",
        title: "Star Wars",
        release_date: "1977"
      };
      Math.random = () => 0;
    });

    it("should return episode fetch in expected format", async () => {
      expect(await API.randomEpisode()).toEqual(expectedResult);
    });

    it("should store results in localStorage", async () => {
      await API.randomEpisode();
      const jsonEpisode = localStorage.getItem("episode1");
      const episode = JSON.parse(jsonEpisode);
      expect(episode).toEqual(expectedResult);
    });

    it("should return data from localStorage when it has been stored", async () => {
      const storedEpisode = "stored episode";
      localStorage.setItem("episode1", JSON.stringify(storedEpisode));
      const episode = await API.randomEpisode();
      expect(episode).toBe(storedEpisode);
    });
  });

  describe("people", () => {
    beforeEach(() => {
      expectedResult = [
        {
          name: "Luke Skywalker",
          species: "endpoint name",
          homeworld: "endpoint name",
          language: "endpoint language",
          population: "endpoint population",
          favorited: false,
          type: "people"
        },
        {
          name: "C-3P0",
          species: "endpoint name",
          homeworld: "endpoint name",
          language: "endpoint language",
          population: "endpoint population",
          favorited: false,
          type: "people"
        }
      ];
      Math.random = () => 0;
    });

    it("should return people fetch in expected format", async () => {
      expect(await API.people()).toEqual(expectedResult);
    });

    it("should store results in localStorage", async () => {
      await API.people();
      const people = JSON.parse(localStorage.getItem("people"));
      expect(people).toEqual(expectedResult);
    });

    it("should return results from localStorage if they exist", async () => {
      const expected = "local storage people";
      localStorage.setItem("people", JSON.stringify(expected));
      const result = await API.people();
      expect(result).toBe(expected);
    });
  });

  describe("vehicles", () => {

    beforeEach(() => {
      expectedResult = [
        {
          class: "wheeled",
          favorited: false,
          model: "Digger Crawler",
          name: "Sand Crawler",
          passengers: 30,
          type: "vehicles"
        }
      ];
    });

    it("should return vehicle fetch in expected format", async () => {
      expect(await API.vehicles()).toEqual(expectedResult);
    });

    it("Should store results in localStorage", async () => {
      await API.vehicles();
      const vehicles = JSON.parse(localStorage.getItem("vehicles"));
      expect(vehicles).toEqual(expectedResult);
    });

    it("Should return results from localStorage if they exist", async () => {
      const expected = "local storage vehicles";
      localStorage.setItem("vehicles", JSON.stringify(expected));
      const result = await API.vehicles();
      expect(result).toBe(expected);
    });
  });

  describe("planets", () => {

    beforeEach(() => {
      expectedResult = [
        {
          name: "Alderaan",
          terrain: "grasslands, mountains",
          population: 2000000000,
          climate: "temperate",
          residents: [" endpoint name", " endpoint name", " endpoint name"],
          favorited: false,
          type: "planets"
        },
        {
          name: "Yavin IV",
          terrain: "jungle, rainforests",
          population: 1000,
          climate: "temperate, tropical",
          residents: [],
          favorited: false,
          type: "planets"
        }
      ];
    });

    it("should return planets fetch in expected format", async () => {
      expect(await API.planets()).toEqual(expectedResult);
    });

    it("Should store results in localStorage", async () => {
      await API.planets();
      const planets = JSON.parse(localStorage.getItem("planets"));
      expect(planets).toEqual(expectedResult);
    });

    it("Should return results from localStorage if they exist", async () => {
      const expected = "local storage planets";
      localStorage.setItem("planets", JSON.stringify(expected));
      const result = await API.planets();
      expect(result).toBe(expected);
    });
  });
});