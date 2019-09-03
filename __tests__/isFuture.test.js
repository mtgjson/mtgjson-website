import isFuture from '../docs/.vuepress/scripts/isFuture';

describe('isFuture', () => {
  it('should return false if today is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(false);
  });

  it('should return false if today is in the future when compared against new Date', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time, new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return false when a Date instance is passed in', async () => {
    const isInFuture = await isFuture(new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return false that yesterday is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate() - 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(false);
  });

  it('should return true that next month is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 2;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear() + 1;
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time);

    expect(isInFuture).toBe(true);
  });

  it('should return false that last year but next month is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear() - 1;
    const month = now.getUTCMonth() + 2;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time, new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return true that this year but this month and tomorrow is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate() + 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time, new Date());

    expect(isInFuture).toBe(true);
  });

  it('should return true that this year but last month and a future date is in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate() + 1;
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time, new Date());

    expect(isInFuture).toBe(true);
  });

  it('should return true that next year via Date is passed in', async () => {
    const now = new Date();
    now.setUTCFullYear(now.getUTCFullYear() + 1);
    now.setUTCMonth(now.getUTCMonth() + 1);
    const isInFuture = await isFuture(now);

    expect(isInFuture).toBe(true);
  });

  it('should return false when the comparison is a string in the future', async () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = await isFuture(time, '9999-01-01');

    expect(isInFuture).toBe(false);
  });

  it('should raise error when now argument is empty', async () => {
    expect(() => {
      isFuture();
    }).toThrow(TypeError);
  });

  it('should raise error when now argument is not a valid type', async () => {
    expect(() => {
      isFuture({});
    }).toThrow(TypeError);
  });

  it('should raise error when compare argument is not a valid type', async () => {
    expect(() => {
      isFuture(new Date(), {});
    }).toThrow(TypeError);
  });
});
