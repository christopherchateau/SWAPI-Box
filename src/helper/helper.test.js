import * as API from './helper'

describe('SWAPI', () => {
  describe('getData', () => {
    let extension;
    beforeEach(() => {
      extension = 'films/1';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => ({data: 'here\'s some stuff'})
      }));
    });

    it('Should call fetch with the argument as a path', () => {
      const expected = 'https://swapi.co/api/' + extension;
      API.getData(extension);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('Should return an object from the fetch call', () => {
      const expected = {data: 'here\'s some stuff'};
      expect(API.getData(extension)).resolves.toEqual(expected);
    });

    it('Should return an error when fetch does not work', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(
        Error('failed')))
      expect(API.getData(extension)).resolves.toBe('failed');
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
