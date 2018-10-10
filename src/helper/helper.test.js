import * as API from './helper'

describe('SWAPI', () => {
  describe('getData', () => {
    let url;
    beforeEach(() => {
      url = 'https://swapi.co/api/films/1'
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => ({data: 'here\'s some stuff'})
      }));
    });

    it('Should call fetch with the argument as a path', () => {
      const expected = url;
      API.getData(url);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('Should return an object from the fetch call', () => {
      const expected = {data: 'here\'s some stuff'};
      expect(API.getData(url)).resolves.toEqual(expected);
    });

    it('Should return an error when fetch does not work', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(
        Error('failed')))
      expect(API.getData(url)).resolves.toBe('failed');
    });
  });

  describe('getRandomEpisode', () => {
    it('Should fetch a random movie\'s data', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => ({
          title: 'A New Hope',
          opening_crawl: 'Sample Text',
          release_date: 'Date'
        })
      }));
      const expected = {
        title: 'A New Hope',
        opening_crawl: 'Sample Text',
        release_date: 'Date'
      }
      const episode =  await API.getRandomEpisode()
      expect(episode).toEqual(expected);
    });
  });

  describe('getPeople', () => {
    it('Should fetch species and people', () => {
      API.getPeople();
    });
  });
});
