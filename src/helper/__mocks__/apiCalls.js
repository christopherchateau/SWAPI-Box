export const getRandomEpisode = jest
  .fn()
  .mockImplementationOnce(() => ({
    opening_crawl: "star wars blah blah blah",
    title: "Star Wars",
    release_date: "1977"
  }))
  .mockImplementationOnce(() => {
    throw new Error("failed to fetch episode");
  });

export const getPeople = jest.fn().mockImplementationOnce(() => [
  {
    name: "Luke Skywalker",
    species: { name: "Human" },
    homeworld: { name: "Tatooine" },
    language: "Galactic Basic",
    population: 200000
  },
  {
    name: "C-3P0",
    species: { name: "Droid" },
    homeworld: { name: "Tatooine" },
    language: "n/a",
    population: 200000
  }
]);

export const getEndpoint = jest.fn().mockImplementation(() => ({
  name: "endpoint name",
  language: "endpoint language",
  population: "endpoint population"
}));

export const getVehicles = jest.fn().mockImplementationOnce(() => [
  {
    name: "Sand Crawler",
    model: "Digger Crawler",
    passengers: 30,
    vehicle_class: "wheeled",
    favorited: false
  }
]);

export const getPlanets = jest.fn().mockImplementationOnce(() => [
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
