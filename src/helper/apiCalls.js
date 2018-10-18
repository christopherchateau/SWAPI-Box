export const url = 'https://swapi.co/api/';

export const getRandomEpisode = () => {
  const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
  return fetch(url + `films/${randomEpisodeNumber}`)
    .then(response => response.json())
}

export const getPeople = () => {
  return fetch(url + 'people')
    .then(response => response.json())
    .then(people => people.results)
}


export const getPlanets = () => {
  return fetch(url + 'planets')
    .then(response => response.json())
    .then(planets => planets.results)
}

export const getVehicles = () => {
  return fetch(url + 'vehicles')
    .then(response => response.json())
    .then(vehicles => vehicles.results)
}

export const getEndpoint = (url) => {
  return fetch(url).then(response => response.json());
}
