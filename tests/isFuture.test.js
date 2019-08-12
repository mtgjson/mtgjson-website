import helpers from '../docs/.vuepress/scripts/helpers';
const { isFuture } = helpers;

describe('isFuture', () => {
  it('isFuture should return false today is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const date = now.getDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(false);
  });

  it('isFuture should return false that yesterday is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const date = now.getDate() - 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(false);
  });

  it('isFuture should return true that next month is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 2; // Buffer the date as January is 0
    const date = now.getDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(true);
  });

  it('isFuture should return true that next year is in the future', async () => {
    const now = new Date();
    const year = now.getFullYear() + 1;
    const month = now.getMonth() + 1; // Buffer the date as January is 0
    const date = now.getDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(true);
  });
});
