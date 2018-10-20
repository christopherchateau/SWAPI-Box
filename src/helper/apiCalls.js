export const url = "https://swapi.co/api/";

export const getRandomEpisode = () => {
  const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
  return fetch(url + `films/${randomEpisodeNumber}`).then(response =>
    response.json()
  );
};

export const getPeople = async () => {
  const response = await fetch(url + "people");
  const people = await response.json();
  // localStorage.setItem("people", JSON.stringify(people.results));
  return people.results;
};

export const getPlanets = async () => {
  const response = await fetch(url + "planets");
  const planets = await response.json();
  // localStorage.setItem("planets", JSON.stringify(planets.results));
  return planets.results;
};

export const getVehicles = async () => {
  const response = await fetch(url + "vehicles");
  const vehicles = await response.json();
  // localStorage.setItem("vehicles", JSON.stringify(vehicles.results));
  return vehicles.results;
};

export const getEndpoint = async url => {
  const response = await fetch(url);
  return await response.json();
};

