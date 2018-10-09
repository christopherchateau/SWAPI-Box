class SWapi {
  constructor() {
  }

  getRandomEpisode() {
    const randomEpisodeNumber = Math.floor(Math.random() * 7) + 1;
    return fetch(`https://swapi.co/api/films/${randomEpisodeNumber}`)
      .then(response => response.json())
      .then(json => {
        return {
          opening_crawl: json.opening_crawl,
          title: json.title,
          release_date: json.release_date
        }})
      .catch(err => console.log('Error fetching episode data'))
  }
}

export default SWapi;
