export const getRandomEpisode = jest.fn()
  .mockImplementationOnce(() => ({
    opening_crawl: 'star wars blah blah blah',
    title: 'Star Wars',
    release_date: '1977'
  }))
  .mockImplementationOnce(() => {
    throw(Error('failed to fetch episode'))
  })