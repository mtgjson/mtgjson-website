import formatTime from '../docs/.vuepress/src/scripts/formatTime';

describe('formatTime', () => {
  it('should return a single month', () => {
    const inputTime = '2020-12';
    const overrideTime = '2020-12';
    const expectedTimeString = 'Month)';
    const returnedTimeString = formatTime(inputTime, overrideTime);

    expect(returnedTimeString.includes(expectedTimeString)).toEqual(true);
  });

  it('should return a multiple months', () => {
    const inputTime = '2020-12';
    const expectedTimeString = 'Months)';
    const returnedTimeString = formatTime(inputTime);

    expect(returnedTimeString.includes(expectedTimeString)).toEqual(true);
  });

  it('should return an empty string if bad data is passed', () => {
    const inputTime = null;
    const expectedTimeString = ''
    const returnedTimeString = formatTime(inputTime);

    expect(returnedTimeString).toEqual(expectedTimeString);
  });
});
