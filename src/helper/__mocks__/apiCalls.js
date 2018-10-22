export const getRandomEpisode = jest.fn().mockImplementation(() => ({
  opening_crawl: "star wars blah blah blah",
  title: "Star Wars",
  release_date: "1977"
}));

export const getPeople = jest.fn().mockImplementation(() => [
  {
    name: "Luke Skywalker",
    species: { name: "Human" },
    homeworld: { name: "Tatooine" },
    language: "Galactic Basic",
    population: 200000,
    favorited: false,
    type: "people"
  },
  {
    name: "C-3P0",
    species: { name: "Droid" },
    homeworld: { name: "Tatooine" },
    language: "n/a",
    population: 200000,
    favorited: false,
    type: "people"
  }
]);

export const getEndpoint = jest.fn().mockImplementation(() => ({
  name: "endpoint name",
  language: "endpoint language",
  population: "endpoint population"
}));

export const getVehicles = jest.fn().mockImplementation(() => [
  {
    name: "Sand Crawler",
    model: "Digger Crawler",
    passengers: 30,
    vehicle_class: "wheeled",
    favorited: false
  }
]);

export const getPlanets = jest.fn().mockImplementation(() => [
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
]);
