import { formatTime } from '../docs/.vitepress/theme/util';

test('should return a single month', () => {
  const inputTime = '2020-12';
  const overrideTime = '2020-12';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(1 Month)');
});

test('should return a multiple months', () => {
  const inputTime = '2020-11';
  const overrideTime = '2020-12';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(2 Months)');
});

test('should return a single year', () => {
  const inputTime = '2021-01';
  const overrideTime = '2021-12';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(1 Year)');
});

test('should return a multiple years', () => {
  const inputTime = '2021-01';
  const overrideTime = '2022-12';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(2 Years)');
});

test('should return a single year and single month', () => {
  const inputTime = '2021-01';
  const overrideTime = '2022-01';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(1 Year, 1 Month)');
});

test('should return a multiple years and single month', () => {
  const inputTime = '2021-01';
  const overrideTime = '2023-01';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(2 Years, 1 Month)');
});

test('should return a single year and multiple months', () => {
  const inputTime = '2021-01';
  const overrideTime = '2022-02';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(1 Year, 2 Months)');
});

test('should return a multiple years and multiple months', () => {
  const inputTime = '2021-01';
  const overrideTime = '2023-02';
  const returnedTimeString = formatTime(inputTime, overrideTime);

  expect(returnedTimeString).toBe('(2 Years, 2 Months)');
});

test('should return something', () => {
  const inputTime = '2021-01';
  const returnedTimeString = formatTime(inputTime);

  expect(returnedTimeString.includes(')')).toBe(true);
});

test('should return an empty string if bad data is passed', () => {
  const inputTime = null;
  const expectedTimeString = '';
  const returnedTimeString = formatTime(inputTime);

  expect(returnedTimeString).toEqual(expectedTimeString);
});
