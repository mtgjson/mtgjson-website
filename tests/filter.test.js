import helpers from '../docs/.vuepress/scripts/helpers';
const { filter } = helpers;

describe('filter', () => {
  it('filter should return the same data if no filter is passed', async () => {
    const dataFilter = '';
    const data = [
      {
        type: 'creature',
      },
    ];
    const filtered = await filter(dataFilter, data);

    expect(filtered).toEqual(data);
  });

  it('filter should return filtered data if a filter is passed', async () => {
    const dataFilter = 'creature';
    const data = [
      {
        type: 'creature',
      },
      {
        type: 'instant',
      },
    ];
    const expected = [
      {
        type: 'creature',
      },
    ];
    const filtered = await filter(dataFilter, data);

    expect(filtered).toEqual(expected);
  });
});
