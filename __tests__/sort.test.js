import sort from '../docs/.vuepress/src/scripts/sort';

describe('sort', () => {
  it('should return the same data if an empty filter is passed', async () => {
    const filter = '';
    const data = [
      {
        type: 'creature'
      }
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(data);
  });

  it('should return no data if the filter is not found', async () => {
    const filter = 'crater';
    const data = [
      {
        type: 'creature'
      }
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(data);
  });

  it('should return sorted data if a filter by recent releaseDate by descending order is passed', async () => {
    const filter = 'releaseDate:true';
    const data = [
      {
        releaseDate: '1995-07-13'
      },
      {
        releaseDate: '2020-01-01'
      },
      {
        releaseDate: '2017-04-05'
      }
    ];
    const expected = [
      {
        releaseDate: '2020-01-01'
      },
      {
        releaseDate: '2017-04-05'
      },
      {
        releaseDate: '1995-07-13'
      }
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });

  it('should return sorted data if a filter by recent releaseDate is missing', async () => {
    const filter = 'releaseDate:true';
    const data = [
      {
        releaseDate: '1995-07-13'
      },
      {
        releaseDate: null
      },
      {
        releaseDate: '2017-04-05'
      }
    ];
    const expected = [
      {
        releaseDate: '2017-04-05'
      },
      {
        releaseDate: null
      },
      {
        releaseDate: '1995-07-13'
      }
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });



  it('should return sorted data if a filter by oldest releaseDate is missing', async () => {
    const filter = 'releaseDate';
    const data = [
      {
        releaseDate: '2017-04-05'
      },
      {
        releaseDate: null
      },
      {
        releaseDate: '1995-07-13'
      }
    ];
    const expected = [
      {
        releaseDate: '1995-07-13'
      },
      {
        releaseDate: null
      },
      {
        releaseDate: '2017-04-05'
      }
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });

  it('should return sorted data if a filter by recent releaseData by ascending order is passed', async () => {
    const filter = 'releaseDate';
    const data = [
      {
        releaseDate: '1995-07-13'
      },
      {
        releaseDate: '2020-01-01'
      },
      {
        releaseDate: '2017-04-05'
      }
    ];
    const expected = [
      {
        releaseDate: '1995-07-13'
      },
      {
        releaseDate: '2017-04-05'
      },
      {
        releaseDate: '2020-01-01'
      }
    ];
    const sorted = await sort(filter, data);

    expect(sorted).toEqual(expected);
  });

  it('should throw a TypeError if not data was passed in but no filter was passed', () => {
    expect(() => {
      sort();
    }).toThrow(TypeError);
  });

  it('should throw a TypeError if not data was passed in but a filter was', () => {
    expect(() => {
      sort('test-filter');
    }).toThrow(TypeError);
  });
});
