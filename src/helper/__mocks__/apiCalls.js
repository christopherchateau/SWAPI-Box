export const getRandomEpisode = jest
  .fn()
  .mockImplementationOnce(() => ({
    opening_crawl: "star wars blah blah blah",
    title: "Star Wars",
    release_date: "1977"
  }))
  .mockImplementationOnce(() => {
    throw Error("failed to fetch episode");
  });

export const getPeople = jest
  .fn()
  .mockImplementationOnce(() => [
    {
      name: "Luke Skywalker",
      species: "Human",
      homeworld: "Tatooine",
      language: "Galactic Basic",
      population: 200000
    },
    {
      name: "C-3P0",
      species: "Droid",
      homeworld: "Tatooine",
      language: "n/a",
      population: 200000
    }
  ])
  .mockImplementationOnce(() => {
    throw Error("failed to fetch people");
  });

export const getEndpoint = jest.fn().mockImplementationOnce(() => ({
  species: { name: "endpoint" }
}));
// .mockImplementationOnce(() => {
//   throw Error("failed to fetch endpoint");
// });

export const getVehicles = jest
  .fn()
  .mockImplementationOnce(() => [
    {
      name: "Sand Crawler",
      model: "Digger Crawler",
      passengers: 30,
      vehicle_class: 'wheeled',
      favorited: false
    }
  ])
  .mockImplementationOnce(() => {
    throw Error("failed to fetch vehicle");
  });
