export const url = "https://swapi.co/api/";

export const getRandomEpisode = () => {
  const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
  return fetch(url + `films/${randomEpisodeNumber}`)
    .then(response => response.json());
}

export const getPeople = () => {
  return fetch(url + 'people')
    .then(response => response.json())
}


export const getPlanets = () => {
  return fetch(url + 'planets')
    .then(response => response.json())
}

export const getVehicles = () => {
  return fetch(url + 'vehicles')
    .then(response => response.json())
}

export const getEndpoint = (url) => {
  return fetch(url).then(response.json());
}
