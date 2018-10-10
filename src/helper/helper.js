export const url = 'https://swapi.co/api/'

export const getRandomEpisode = async () => {
  const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
  const episode = await getData(url + `films/${randomEpisodeNumber}`)
  return {
    opening_crawl: episode.opening_crawl,
    title: episode.title,
    release_date: episode.release_date
  }
}
export const getPeople = async () => {
  const response = await getData(url + 'people')
  const people =  await getPersonInfo(response.results);
  console.log(people);
}

export const getPersonInfo = (peopleArray) => {
  return Promise.all(peopleArray.map( async(person) => {
    const species = await getData(person.species);
    const homeworld = await getData(person.homeworld);
    return {
      name: person.name,
      species: species.name,
      homeworld: homeworld.name
    }
  }));
}

export const getData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json();
    return data;
  } catch(error) {
    return error.message;
  }
}
