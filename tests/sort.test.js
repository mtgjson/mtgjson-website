import sort from '../docs/.vuepress/scripts/sort';

describe('sort', () => {
  it('should return the same data if an empty filter is passed', async () => {
    const filter = '';
    const data = [
      {
        type: 'creature',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(data);
  });

  it('should return sorted data if a filter by recent releaseData is passed', async () => {
    const filter = 'releaseDate:true';
    const data = [
      {
        releaseDate: '1995-07-13',
      },
      {
        releaseDate: '2020-01-01',
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
        releaseDate: '1995-07-13',
      },
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });

  it('should throw a Error if a DOM event filter has no value', async () => {
    const filter = document.createElement('div');
    const data = [
      {
        type: 'creature',
      },
    ];

    expect(() => {
      sort(filter, data);
    }).toThrow(Error);
  });

  it('should throw a TypeError if not data was passed in but no filter was passed', () => {
    expect(() => {
      sort();
    }).toThrow(TypeError);
  });

  it('should return a TypeError if not data was passed in but a filter was', () => {
    expect(() => {
      sort('test-filter');
    }).toThrow(TypeError);
  });
});
