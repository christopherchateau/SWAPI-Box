export const url = 'https://swapi.co/api/';

export const getRandomEpisode = async () => {
  const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
  if (localStorage.getItem(`episode${randomEpisodeNumber}`)) {
    return JSON.parse(localStorage.getItem(`episode${randomEpisodeNumber}`));
  }
  const response = await fetch(url + `films/${randomEpisodeNumber}`);
  const episode = await response.json();
  localStorage.setItem(`episode${randomEpisodeNumber}`, JSON.stringify(episode));
  return episode;
};

export const getPeople = async () => {
  if (localStorage.getItem("people")) {
    const people = localStorage.getItem("people");
    return JSON.parse(people);
  }
  const response = await fetch(url + "people");
  const people = await response.json();
  localStorage.setItem("people", JSON.stringify(people.results));
  return people.results;

};

export const getPlanets = async () => {
  if (localStorage.getItem("planets")) {
    const planets = localStorage.getItem("planets");
    return JSON.parse(planets);
  }
  const response = await fetch(url + "planets");
  const planets = await response.json();
  localStorage.setItem("planets", JSON.stringify(planets.results));
  return planets.results;
};

export const getVehicles = async () => {
  if (localStorage.getItem("vehicles")) {
    const vehicles = localStorage.getItem("vehicles");
    return JSON.parse(vehicles);
  }
  const response = await fetch(url + "vehicles");
  const vehicles = await response.json();
  localStorage.setItem("vehicles", JSON.stringify(vehicles.results));
  return vehicles.results;
};

export const getEndpoint = async url => {
  if (localStorage.getItem(url)) {
    const endpoint = localStorage.getItem(url);
    return JSON.parse(endpoint);
  }
  const response = await fetch(url);
  const endpoint = await response.json();
  localStorage.setItem(url, JSON.stringify(endpoint));
  return endpoint;
};
