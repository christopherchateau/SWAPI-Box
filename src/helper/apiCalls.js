export const url = "https://swapi.co/api/";

export const getRandomEpisode = async randomEpisodeNumber => {
  const response = await fetch(url + `films/${randomEpisodeNumber}`);
  const episode = await response.json();
  return episode;
};

export const getPeople = async () => {
  const response = await fetch(url + "people");
  const people = await response.json();
  return people.results;
};

export const getPlanets = async () => {
  const response = await fetch(url + "planets");
  const planets = await response.json();
  return planets.results;
};

export const getVehicles = async () => {
  const response = await fetch(url + "vehicles");
  const vehicles = await response.json();
  return vehicles.results;
};

export const getEndpoint = async url => {
  const response = await fetch(url);
  const endpoint = await response.json();
  return endpoint;
};
