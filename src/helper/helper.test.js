import SWapi from './helper'

describe('SWAPI', () => {
  let api;
  beforeEach(() => {
    api = new SWapi();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        title: 'A New Hope',
        opening_crawl: 'Sample Text'
      })
    }))
  });

  it('Should match snapshot', () => {
    expect(api).toMatchSnapshot();
  });

  it('Should fetch a random movie\'s data', () => {
    Promise.resolve(api.getRandomEpisode())
      .then((episode) => expect(episode).toBeDefined())
      .catch((err) => console.log('Test 2 error!'));
  });
});
