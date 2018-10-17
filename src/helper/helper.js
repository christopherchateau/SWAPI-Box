import * as apiCalls from './apiCalls';

export const randomEpisode = async () => {
  const episode = apiCalls.getRandomEpisode();
  return {
    opening_crawl: episode.opening_crawl,
    title: episode.title,
    release_date: episode.release_date
  };
};

export const people = async () => {
  const people = await apiCalls.getPeople();
  return Promise.all(people.map(async person => {
    const species = await apiCalls.getEndpoint(person.species);
    const homeworld = await apiCalls.getEndpoint(person.homeworld);
    return {
      name: person.name,
      species: species.name,
      homeworld: homeworld.name,
      language: species.language,
      population: homeworld.population,
      favorited: false
    }
  }));
};

export const planets = async () => {
  const planets = await apiCalls.getPlanets();
  return Promise.all(planets.map(async planet => {
    let residents = await Promise.all(planet.residents.map(async resident => {
      const residentData = await apiCalls.getEndPoint(resident);
      return " " + residentData.name;
    }));
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residents,
      favorited: false
    };
  }));
}

export const getVehicles = async () => {
  const vehicles = await apiCalls.getVehicles();
  return vehicles.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      favorited: false
    };
  });
}
