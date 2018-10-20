import * as apiCalls from "./apiCalls";

export const randomEpisode = async () => {
  const episode = await apiCalls.getRandomEpisode();
  return {
    opening_crawl: episode.opening_crawl,
    title: episode.title,
    release_date: episode.release_date
  };
};

export const people = async () => {
  if (checkLocalStorage("people")) {
    return checkLocalStorage("people");
  }
  const people = await apiCalls.getPeople();
  const cleanedPeople = await Promise.all(
    people.map(async person => {
      const species = await apiCalls.getEndpoint(person.species);
      const homeworld = await apiCalls.getEndpoint(person.homeworld);
      return {
        name: person.name,
        species: species.name,
        homeworld: homeworld.name,
        language: species.language,
        population: homeworld.population,
        favorited: false,
        type: 'people'
      };
    })
  );
  localStorage.setItem("people", JSON.stringify(cleanedPeople));
  return cleanedPeople;
};

export const planets = async () => {
  if (checkLocalStorage("planets")) {
    return checkLocalStorage("planets");
  }
  const planets = await apiCalls.getPlanets();
  const cleanedPlanets = await Promise.all(
    planets.map(async planet => {
      let residents = await Promise.all(
        planet.residents.map(async resident => {
          const residentData = await apiCalls.getEndpoint(resident);
          return " " + residentData.name;
        })
      );
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residents,
        favorited: false,
        type: 'planets'
      };
    })
  );
  localStorage.setItem("planets", JSON.stringify(cleanedPlanets));
  return cleanedPlanets;
};

export const vehicles = async () => {
  if (checkLocalStorage("vehicles")) {
    return checkLocalStorage("vehicles");
  }
  const vehicles = await apiCalls.getVehicles();
  const cleanedVehicles = vehicles.map(vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      favorited: false,
      type: 'vehicles'
    };
  });
  localStorage.setItem("vehicles", JSON.stringify(cleanedVehicles));
  return cleanedVehicles;
};

// export const favorites = () => {
//   console.log('asdf')
//   if (localStorage.getItem("favorites")) {
//     return JSON.parse(localStorage.getItem("favorites"));
//   }
//   //return []; 
// }



function checkLocalStorage(category) {
  return JSON.parse(localStorage.getItem(category));
}
