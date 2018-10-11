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

  describe("getPeople", () => {
    let expected;

    beforeEach(() => {
      expected = [
        {
          name: "Luke Skywalker",
          species: ["https://swapi.co/api/species/1/"],
          homeworld: "https://swapi.co/api/planets/1/"
        },
        {
          name: "C-3P0",
          species: ["https://swapi.co/api/species/2/"],
          homeworld: "https://swapi.co/api/planets/1/"
        }
      ];
    });

    it.skip("Should fetch species and people", async () => {
      const getPersonInfo = jest.fn().mockImplementation(() => expected);
      const characterInfo = await API.getPeople();
      expect(characterInfo).toEqual(expected);
    });

    it.skip("should call getPersonInfo with the correct params", () => {
      API.getPersonInfo(expected);
      expect(API.getPersonInfo).toHaveBeenCalledWith(expected);
    });

    it("Should fetch a character's info", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => ({ name: "species/homeworld" })
        })
      );
      expected = [
        {
          name: "Luke Skywalker",
          species: "species/homeworld",
          homeworld: "species/homeworld"
        }
      ];
      const characterInfo = await API.getPersonInfo(expected);
      expect(characterInfo).toEqual(expected);
    });
  });


});
