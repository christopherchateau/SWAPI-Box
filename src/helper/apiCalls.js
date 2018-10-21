export const url = 'https://swapi.co/api/';

export const getRandomEpisode = () => {
  const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
  if (localStorage.getItem(`episode${randomEpisodeNumber}`)) {
    return JSON.parse(localStorage.getItem(`episode${randomEpisodeNumber}`));
  }
  return fetch(url + `films/${randomEpisodeNumber}`).then(response =>
    response.json())
    .then(episode => {
      localStorage.setItem(`episode${randomEpisodeNumber}`, JSON.stringify(episode));
      return episode;
    });
};

export const getPeople = () => {
  if (localStorage.getItem("people")) {
    const people = localStorage.getItem("people");
    return JSON.parse(people);
  }
  return fetch(url + "people")
    .then(response => response.json())
    .then(people => people.results)
    .then(people => {
      const stringifyPeople = JSON.stringify(people);
      localStorage.setItem("people", stringifyPeople);
      return people;
    });
};

export const getPlanets = () => {
  if (localStorage.getItem("planets")) {
    const planets = localStorage.getItem("planets");
    return JSON.parse(planets);
  }

  return fetch(url + "planets")
    .then(response => response.json())
    .then(planets => planets.results)
    .then(planets => {
      const stringifyPlanets = JSON.stringify(planets);
      localStorage.setItem("planets", stringifyPlanets);
      return planets;
    });
};

export const getVehicles = () => {
  if (localStorage.getItem("vehicles")) {
    const vehicles = localStorage.getItem("vehicles");
    return JSON.parse(vehicles);
  }

  return fetch(url + "vehicles")
    .then(response => response.json())
    .then(vehicles => vehicles.results)
    .then(vehicles => {
      const stringifyVehicles = JSON.stringify(vehicles);
      localStorage.setItem("vehicles", stringifyVehicles);
      return vehicles;
    });
};

export const getEndpoint = url => {
  if (localStorage.getItem(url)) {
    const endpoint = localStorage.getItem(url);
    return JSON.parse(endpoint);
  }

 return fetch(url).then(response => response.json())
    .then(endpoint => {
      const stringifyData = JSON.stringify(endpoint);
      localStorage.setItem(url, stringifyData);
      return endpoint;
    });
};
