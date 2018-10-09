class SWapi {
  getRandomEpisode() {
    const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
    return this.getData(`films/${randomEpisodeNumber}`)
      .then(episode => {
        return {
          opening_crawl: episode.opening_crawl,
          title: episode.title,
          release_date: episode.release_date
        }});
  }
  async getPeople() {
    const species = await this.getSpecies();
    const response = await this.getData('people')
    const people = response.results.map(person => {
      const speciesData = person.species[0]
      const speciesID = speciesData.charAt(speciesData.length - 2);
      return {
        name: person.name,
        homeworld: person.homeworld,
        species: species[speciesID].name,
      }
      })
    console.log(people);
  }
  getSpecies() {
    this.getData('species')
      .then(response => this.species = response.results);
  }
  getData(type) {
    return fetch(`https://swapi.co/api/${type}`)
      .then(response => response.json())
      .catch(err => console.log(`Error fetching ${type} data`));
  }
}

export default SWapi;
