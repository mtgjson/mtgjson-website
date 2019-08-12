import helpers from '../docs/.vuepress/scripts/helpers';
const { sort } = helpers;

describe('sort', () => {
  it('sort should return the same data if a filter is passed', async () => {
    const dataSortFilter = '';
    const data = [
      {
        type: 'creature',
      },
    ];
    const sorted = await sort(dataSortFilter, data);

    expect(sorted).toEqual(data);
  });

  it('sort should return sorted data recent releaseData if a filter is passed', async () => {
    const dataSortFilter = 'releaseDate:true';
    const data = [
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '1995-7-13',
      },
      {
        releaseDate: '2017-04-05',
      },
    ];
    const expected = [
      {
        releaseDate: '2020-01-01',
      },
      {
        releaseDate: '2017-04-05',
      },
      {
        releaseDate: '1995-7-13',
      },
    ];
    const sorted = await sort(dataSortFilter, data);

    expect(sorted).toEqual(expected);
  });
});
