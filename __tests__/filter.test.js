import { filter } from '../docs/.vitepress/theme/util';

test('should return the same data if no filter is passed', () => {
  const dataFilter = '';
  const data = [
    {
      type: 'creature',
    },
  ];
  const filtered = filter(dataFilter, data);

  expect(filtered).toEqual(data);
});

test('should return filtered data if a filter is passed', () => {
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
  const filtered = filter(dataFilter, data);

  expect(filtered).toEqual(expected);
});
