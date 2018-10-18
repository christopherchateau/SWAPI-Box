import * as API from "./helper";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("./apiCalls");

describe("SWAPI", () => {
  describe("getData", () => {
    let url;

    it("should return episode fetch in expected format", async () => {
      const expectedResult = {
        opening_crawl: "star wars blah blah blah",
        title: "Star Wars",
        release_date: "1977"
      };
      expect(await API.randomEpisode()).toEqual(expectedResult);
    });

    it("should return people fetch in expected format", async () => {
      let expectedResult = [
        {
          name: "Luke Skywalker",
          species: "endpoint name",
          homeworld: "endpoint name",
          language: "endpoint language",
          population: 'endpoint population',
          favorited: false
        },
        {
          name: "C-3P0",
          species: "endpoint name",
          homeworld: "endpoint name",
          language: "endpoint language",
          population: "endpoint population",
          favorited: false
        }
      ];
      expect(await API.people()).toEqual(expectedResult);
    });

    it("should return vehicle fetch in expected format", async () => {
      const expectedResult = [
        {
          name: "Sand Crawler",
          model: "Digger Crawler",
          passengers: 30,
          class: "wheeled",
          favorited: false
        }
      ];
      expect(await API.vehicles()).toEqual(expectedResult);
    });
  });
});

// let expected = {
//   results: [
//     {
//       name: "Luke Skywalker",
//       species: "Human",
//       homeworld: "Tatooine",
//       language: "Galactic Basic",
//       population: 200000
//     },
//     {
//       name: "C-3P0",
//       species: "Droid",
//       homeworld: "Tatooine",
//       language: "n/a",
//       population: 200000
//     }
//   ]
// };

// results: [
//   {
//     name: "Alderaan",
//     terrain: "grasslands, mountains",
//     population: 2000000000,
//     climate: "temperate",
//     residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]
//   },
//   {
//     name: "Yavin IV",
//     terrain: "jungle, rainforests",
//     population: 1000,
//     climate: "temperate, tropical",
//     residents: []
//   }
// ]
