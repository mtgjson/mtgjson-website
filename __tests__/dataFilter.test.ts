import { dataFilter } from '../docs/.vitepress/theme/helpers';

test('should return the same data if no filter is passed', () => {
  const filter: string = '';
  const data: object[] = [
    {
      type: 'creature',
    },
  ];
  const expected: object[] = data;
  const filtered: object[] = dataFilter(filter, data);

  expect(filtered).toEqual(expected);
});

test('should return filtered data if a filter is passed', () => {
  const filter: string = 'creature';
  const data: object[] = [
    {
      type: 'creature',
    },
    {
      type: 'instant',
    },
  ];
  const expected: object[] = [
    {
      type: 'creature',
    },
  ];
  const filtered: object[] = dataFilter(filter, data);

  expect(filtered).toEqual(expected);
});
