import * as apiCalls from "./apiCalls";

describe("apiCalls", () => {
  describe("getRandomEpisode", () => {
    beforeEach(() => {
      localStorage.clear();
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => "episode data here"
        })
      );
      Math.random = () => 0;
    });

    it("Should call fetch with a random episode's endpoint", () => {
      const expected = "https://swapi.co/api/films/1";
      apiCalls.getRandomEpisode();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("Should return the json'd response from fetch", async () => {
      const expected = "episode data here";
      const result = await apiCalls.getRandomEpisode();
      expect(result).toBe(expected);
    });

    it("Should store results in localStorage", async () => {
      const expected = "episode data here";
      await apiCalls.getRandomEpisode()
      const jsonEpisode = localStorage.getItem("episode1")
      const episode = JSON.parse(jsonEpisode);
      expect(episode).toBe(expected);
    });

    it("Should return data from localStorage when it has been stored", async () => {
      const storedEpisode = "stored episode";
      localStorage.setItem("episode1", JSON.stringify(storedEpisode));
      const episode = await apiCalls.getRandomEpisode();

      expect(episode).toBe(storedEpisode);
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

    it("Should store results in localStorage", async () => {
      const expected = "people data here";
      await apiCalls.getPeople();
      const people = JSON.parse(localStorage.getItem("people"));
      expect(people).toBe(expected);
    });

    it("Should return results from localStorage if they exist", async () => {
      const expected = "local storage people"
      localStorage.setItem("people", JSON.stringify(expected));
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

    it("Should store results in localStorage", async () => {
      const expected = "planet data here";
      await apiCalls.getPlanets();
      const planets = JSON.parse(localStorage.getItem("planets"));
      expect(planets).toBe(expected);
    });

    it("Should return results from localStorage if they exist", async () => {
      const expected = "local storage planets"
      localStorage.setItem("planets", JSON.stringify(expected));
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

    it("Should store results in localStorage", async () => {
      const expected = "vehicle data here";
      await apiCalls.getVehicles();
      const vehicles = JSON.parse(localStorage.getItem("vehicles"));
      expect(vehicles).toBe(expected);
    });

    it("Should return results from localStorage if they exist", async () => {
      const expected = "local storage vehicles"
      localStorage.setItem("vehicles", JSON.stringify(expected));
      const result = await apiCalls.getVehicles();
      expect(result).toBe(expected);
    });
  });

  describe("getEndpoint", () => {
    localStorage.clear();
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

    it("Should store results in localStorage", async () => {
      const expected = "endpoint data here";
      await apiCalls.getEndpoint("url.com");
      const people = JSON.parse(localStorage.getItem("url.com"));
      expect(people).toBe(expected);
    });

    it("Should return results from localStorage if they exist", async () => {
      const expected = "local storage people"
      localStorage.setItem("url.com", JSON.stringify(expected));
      const result = await apiCalls.getEndpoint("url.com");
      expect(result).toBe(expected);
    });
  });
});
