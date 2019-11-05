import isFutureDate from '../docs/.vuepress/scripts/isFutureDate';

describe('isFutureDate', () => {
  it('should return false that a today String is in the future', () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return true that a tomorrow String is in the future', () => {
    const year = 9999;
    const month = 12;
    const date = 10;
    // Today
    const today = `${year}-${month}-${date}`;
    // Tomorrow
    const tomorrow = `${year}-${month}-${date + 1}`;
    const isInFuture = isFutureDate(tomorrow, today);

    expect(isInFuture).toBe(true);
  });

  it('should return false that a yesterday String is in the future', () => {
    const year = 9999;
    const month = 12;
    const date = 10;
    // Today
    const today = `${year}-${month}-${date}`;
    // Tomorrow
    const tomorrow = `${year}-${month}-${date - 1}`;
    const isInFuture = isFutureDate(tomorrow, today);

    expect(isInFuture).toBe(false);
  });

  it('should return false today Date instance compared against a today Date instance is not in the future', () => {
    const now = new Date();
    const isInFuture = isFutureDate(now, now);

    expect(isInFuture).toBe(false);
  });

  it('should return false that a today Date instance is in the future', () => {
    const isInFuture = isFutureDate(new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return true that a next month String against a today String is in the future', () => {
    const year = 9999;
    const month = 11;
    const date = 10;
    // Today
    const today = `${year}-${month}-${date}`;
    // Next Month
    const tomorrow = `${year}-${month + 1}-${date}`;
    const isInFuture = isFutureDate(tomorrow, today);

    expect(isInFuture).toBe(true);
  });

  it('should return true that a next month Date instance against a today Date instance is in the future', () => {
    const year = 9999;
    const month = 11;
    const date = 10;
    // Today
    const today = `${year}-${month}-${date}`;
    // Next Month
    const tomorrow = `${year}-${month + 1}-${date}`;
    const isInFuture = isFutureDate(new Date(tomorrow), new Date(today));

    expect(isInFuture).toBe(true);
  });

  it('should return true that a next year String is in the future', () => {
    const now = new Date();
    const year = now.getUTCFullYear() + 1;
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = isFutureDate(time);

    expect(isInFuture).toBe(true);
  });

  it('should return true that a next year Date instance is in the future', () => {
    const now = new Date();
    const year = now.getUTCFullYear() + 1;
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = isFutureDate(new Date(time));

    expect(isInFuture).toBe(true);
  });

  it('should return false that a last year and next month String is in the future', () => {
    const now = new Date();
    const year = now.getUTCFullYear() - 1;
    const month = 12;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = isFutureDate(time);

    expect(isInFuture).toBe(false);
  });

  it('should return false that a last year and next month Date instance is in the future', () => {
    const now = new Date();
    const year = now.getUTCFullYear() - 1;
    const month = 12;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = isFutureDate(new Date(time));

    expect(isInFuture).toBe(false);
  });

  it('should return false that this year but last month String against a today Date is in the future', () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth();
    const date = 10;
    const time = `${year}-${month}-${date}`;
    const isInFuture = isFutureDate(time, new Date());

    expect(isInFuture).toBe(false);
  });

  it('should return true when next year via Date is passed in as a Date Object', () => {
    const now = new Date();
    now.setUTCFullYear(now.getUTCFullYear() + 1);
    now.setUTCMonth(12);
    const isInFuture = isFutureDate(now);

    expect(isInFuture).toBe(true);
  });

  it('should return false when a today String is compared against a future String', () => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = now.getUTCMonth() + 1;
    const date = now.getUTCDate();
    const time = `${year}-${month}-${date}`;
    const isInFuture = isFutureDate(time, '9999-01-01');

    expect(isInFuture).toBe(false);
  });

  it('should throw a TypeError when no time is passed', () => {
    expect(() => {
      isFutureDate();
    }).toThrow(TypeError);
  });

  it('should throw a TypeError when now argument is not a valid type', () => {
    expect(() => {
      isFutureDate({});
    }).toThrow(TypeError);
  });

  it('should throw a TypeError when any argument is not a valid type', () => {
    expect(() => {
      isFutureDate(new Date(), {});
    }).toThrow(TypeError);
  });

  it('should throw a SyntaxError when a Date object with an invalid date is passed in', () => {
    expect(() => {
      isFutureDate(new Date('9999-13-32'));
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError when a String with an invalid date is passed in', () => {
    expect(() => {
      isFutureDate('9999-13-32');
    }).toThrow(SyntaxError);
  });

  it('should throw a SyntaxError when an improbably formatted timestamp is passed in. Accepts YYYY-MM-DD, MM-DD-YYYY', () => {
    expect(() => {
      isFutureDate('2019-31-10');
    }).toThrow(SyntaxError);
  });
});
