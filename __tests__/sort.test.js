import { sort } from '../docs/.vitepress/theme/util';

test('should return the same data if an empty filter is passed', () => {
  const filter = '';
  const data = [
    {
      type: 'creature',
    },
  ];
  const sorted = sort(filter, data);

  expect(sorted).toEqual(data);
});

test('should return no data if the filter is not found', () => {
  const filter = 'crater';
  const data = [
    {
      type: 'creature',
    },
  ];
  const sorted = sort(filter, data);

  expect(sorted).toEqual(data);
});

test('should return sorted data if a filter by recent releaseDate by descending order is passed', () => {
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
  const sorted = sort(filter, data);

  expect(sorted).toEqual(expected);
});

test('should return sorted data if a filter by recent releaseDate is missing', () => {
  const filter = 'releaseDate:true';
  const data = [
    {
      releaseDate: '1995-07-13',
    },
    {
      releaseDate: null,
    },
    {
      releaseDate: '2017-04-05',
    },
  ];
  const expected = [
    {
      releaseDate: '2017-04-05',
    },
    {
      releaseDate: null,
    },
    {
      releaseDate: '1995-07-13',
    },
  ];
  const sorted = sort(filter, data);

  expect(sorted).toEqual(expected);
});

test('should return sorted data if a filter by oldest releaseDate is missing', () => {
  const filter = 'releaseDate';
  const data = [
    {
      releaseDate: '2017-04-05',
    },
    {
      releaseDate: null,
    },
    {
      releaseDate: '1995-07-13',
    },
  ];
  const expected = [
    {
      releaseDate: '1995-07-13',
    },
    {
      releaseDate: null,
    },
    {
      releaseDate: '2017-04-05',
    },
  ];
  const sorted = sort(filter, data);

  expect(sorted).toEqual(expected);
});

test('should return sorted data if a filter by recent releaseData by ascending order is passed', () => {
  const filter = 'releaseDate';
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
      releaseDate: '1995-07-13',
    },
    {
      releaseDate: '2017-04-05',
    },
    {
      releaseDate: '2020-01-01',
    },
  ];
  const sorted = sort(filter, data);

  expect(sorted).toEqual(expected);
});

test('should throw a TypeError if no data was passed in and no filter was passed', () => {
  expect(() => {
    sort();
  }).toThrow(TypeError);
});

test('should throw a TypeError if no data was passed in but a filter was', () => {
  expect(() => {
    sort('test-filter');
  }).toThrow(TypeError);
});
