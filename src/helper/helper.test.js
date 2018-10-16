import * as API from "./helper";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("SWAPI", () => {
  describe("getData", () => {
    let url;
    beforeEach(() => {
      url = "https://swapi.co/api/films/1";
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ data: "here's some stuff" })
        })
      );
    });

    it("Should call fetch with the argument as a path", () => {
      const expected = url;
      API.getData(url);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("Should return an object from the fetch call", () => {
      const expected = { data: "here's some stuff" };
      expect(API.getData(url)).resolves.toEqual(expected);
    });

    it.skip("Should return an error when fetch does not work", () => {
      window.fetch = jest
        .fn()
        .mockImplementation(() => Promise.reject(Error("failed")));
      expect(API.getData(url)).resolves.toBe("failed");
    });

    it("Should add fetch results to localStorage", async () => {
      localStorage.clear();
      await API.getData(url);

      expect(
        JSON.parse(localStorage.getItem("https://swapi.co/api/films/1"))
      ).toEqual({ data: "here's some stuff" });
    });
  });

  describe("getRandomEpisode", () => {
    it.skip("Should fetch a random movie's data", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({
            title: "A New Hope",
            opening_crawl: "Sample Text",
            release_date: "Date"
          })
        })
      );
      const expected = {
        title: "A New Hope",
        opening_crawl: "Sample Text",
        release_date: "Date"
      };
      const episode = await API.getRandomEpisode();
      expect(episode).toEqual(expected);
    });
  });

  describe("getPeople", () => {
    let url;
    let expected = [
      {
        name: "Luke Skywalker",
        species: ["https://swapi.co/api/species/1/"],
        homeworld: "https://swapi.co/api/planets/1/"
      },
      {
        name: "C-3P0",
        species: ["https://swapi.co/api/species/2/"],
        homeworld: "https://swapi.co/api/planets/1/"
      }
    ];

    beforeEach(() => {
      url = "https://swapi.co/api/films/1";
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => expected
        })
      );
    });

    it.skip("should call getPersonInfo with the correct params", () => {
      API.getPersonInfo(expected);
      expect(API.getPersonInfo).toHaveBeenCalledWith(expected);
    });

    it.skip("Should fetch a character's info", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ name: "species/homeworld" })
        })
      );
      expected = [
        {
          name: "Luke Skywalker",
          species: "species/homeworld",
          homeworld: "species/homeworld"
        }
      ];
      const characterInfo = await API.getPersonInfo(expected);
      expect(characterInfo).toEqual(expected);
    });
  });

  describe("getPlanets", () => {
    let url;
    let expected = {
      results: [
        {
          name: "Alderaan",
          terrain: "grasslands, mountains",
          population: 2000000000,
          climate: "temperate",
          residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]
        },
        {
          name: "Yavin IV",
          terrain: "jungle, rainforests",
          population: 1000,
          climate: "temperate, tropical",
          residents: []
        }
      ]
    };

    beforeEach(() => {
      url = "https://swapi.co/api/films/1";
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => expected
        })
      );
    });

    it("getPlanets should return expected results", async () => {
      const returnedPlanets = await API.getPlanets();
      expect(returnedPlanets).toHaveLength(2)
      expect(returnedPlanets[0].name).toEqual('Alderaan')
    });

    it("getPlanets should add 'favorited: false' prop to fetched data", async () => {
      expect(expected.results[0].favorited).toBeUndefined()

      const returnedPlanets = await API.getPlanets();

      expect(returnedPlanets[0].favorited).toBeFalsy()
      expect(returnedPlanets[1].favorited).toBeFalsy()
    });

  });
});
