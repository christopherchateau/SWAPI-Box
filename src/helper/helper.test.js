import * as API from "./helper";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
jest.mock("./apiCalls");

describe("SWAPI", () => {
  describe("random episode", () => {
    it("should return episode fetch in expected format", async () => {
      const expectedResult = {
        opening_crawl: "star wars blah blah blah",
        title: "Star Wars",
        release_date: "1977"
      };
      expect(await API.randomEpisode()).toEqual(expectedResult);
    });
  });

  describe("people", () => {
    it("should return people fetch in expected format", async () => {
      let expectedResult = [
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
      expect(await API.people()).toEqual(expectedResult);
    });
  });

  describe("vehicles", () => {
    it("should return vehicle fetch in expected format", async () => {
      const expectedResult = [
        {
          name: "Sand Crawler",
          model: "Digger Crawler",
          passengers: 30,
          class: "wheeled",
          favorited: false,
          type: "vehicles"
        }
      ];
      expect(await API.vehicles()).toEqual(expectedResult);
    });
  });

  describe("planets", () => {
    it("should return planets fetch in expected format", async () => {
      const expectedResult = [
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
      expect(await API.planets()).toEqual(expectedResult);
    });
  });
});
