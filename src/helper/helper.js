export const url = "https://swapi.co/api/";

export const getRandomEpisode = async () => {
  const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
  const episode = await getData(url + `films/${randomEpisodeNumber}`);
  return {
    opening_crawl: episode.opening_crawl,
    title: episode.title,
    release_date: episode.release_date
  };
};
export const getPeople = async () => {
  try {
    const response = await getData(url + "people");
    return getPersonInfo(response.results);
  } catch (error) {
    return error.message;
  }
};

export const getPersonInfo = peopleArray => {
  try {
    return Promise.all(
      peopleArray.map(async person => {
        const species = await getData(person.species);
        const homeworld = await getData(person.homeworld);
        return {
          name: person.name,
          species: species.name,
          homeworld: homeworld.name,
          language: species.language,
          population: homeworld.population
        };
      })
    );
  } catch (error) {
    return error.message;
  }
};

export const getPlanets = async () => {
  try {
    const response = await getData(url + "planets");
    return Promise.all(
      response.results.map(async planet => {
        let residents = await Promise.all(
          planet.residents.map(async resident => {
            const residentData = await getData(resident);
            return " " + residentData.name;
          })
        );
        return {
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: residents
        };
      })
    );
  } catch (error) {
    return error.message;
  }
};

export const getVehicles = async () => {
  try {
    const response = await getData(url + "vehicles");
    return response.results.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      };
    });
  } catch (error) {
    return error.message;
  }
};

export const getData = async url => {
  if (localStorage.getItem(url)) {
    return JSON.parse(localStorage.getItem(url));
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem(url, JSON.stringify(data));
    return data;
  } catch (error) {
    return error.message;
  }
};
