import * as apiCalls from "./apiCalls";

describe("apiCalls", () => {

  describe("getRandomEpisode", () => {

    it("Should call fetch with a random episode's endpoint", () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ results: "episode data here" })
        })
      );
      const expected = "https://swapi.co/api/films/1";
      apiCalls.getRandomEpisode(1);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("Should return the json'd response from fetch", async () => {
      const expected = "episode data here";
      const result = await apiCalls.getRandomEpisode(1);
      expect(result.results).toBe(expected);
    });
  });

  describe("getPeople", () => {

    beforeEach(() => {
      localStorage.clear();
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ results: "people data here" })
        })
      );
    });

    it("Should call fetch for all people", () => {
      const expected = "https://swapi.co/api/people";
      apiCalls.getPeople();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("Should return results from the json'd response from fetch", async () => {
      const expected = "people data here";
      const result = await apiCalls.getPeople();
      expect(result).toBe(expected);
    });
  });

  describe("getPlanets", () => {

    beforeEach(() => {
      localStorage.clear();
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ results: "planet data here" })
        })
      );
    });

    it("Should call fetch for all planets", () => {
      const expected = "https://swapi.co/api/planets";
      apiCalls.getPlanets();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("Should return results from the json'd response from fetch", async () => {
      const expected = "planet data here";
      const result = await apiCalls.getPlanets();
      expect(result).toBe(expected);
    });
  });

  describe("getVehicles", () => {

    beforeEach(() => {
      localStorage.clear();
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ results: "vehicle data here" })
        })
      );
    });

    it("Should call fetch for all vehicles", () => {
      const expected = "https://swapi.co/api/vehicles";
      apiCalls.getVehicles();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("Should return results from the json'd response from fetch", async () => {
      const expected = "vehicle data here";
      const result = await apiCalls.getVehicles();
      expect(result).toBe(expected);
    });
  });

  describe("getEndpoint", () => {
    
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => "endpoint data here"
        })
      );
    });

    it("Should call fetch with any url given", () => {
      const expected = "https://swapi.co/api/people/1";
      apiCalls.getEndpoint(expected);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("Should return json'd response from fetch", async () => {
      const expected = "endpoint data here";
      const result = await apiCalls.getEndpoint("url.com");
      expect(result).toBe(expected);
    });
  });
});
