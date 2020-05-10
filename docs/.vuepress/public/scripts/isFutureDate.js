/**
 * isFutureDate
 * @param {String|Date} when - when to compare against now
 * @param {String|Date} against - when to compare against the first argument
 * @return Boolean
 * @throws TypeError
 * @throws SyntaxError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 * isFutureDate(new Date('2019-10-10'), '2020-01-01')
 */

export default function isFutureDate(when, against = new Date()) {
  // Check on our types, we only want String and Date for comparison.
  const typesAreValid =
    (typeof when === 'string' || when instanceof Date) &&
    (typeof against === 'string' || against instanceof Date);
  if (!typesAreValid) {
    throw TypeError('You must pass in at leasy one primary argument of type Date or String');
  }

  // Its important to remember that when we pass in just a String date
  // that we wont get a time. So we set this up to do checks later.
  let now = new Date(when);
  let then = new Date(against);

  /**
   * Check if valid Date. String with improper formats return `Invalid Date`
   * which is literal non-sense. Its not an Error of any kind, Number, String, Date or
   * truthy undefined. Just a typeof Object which no public keys.
   * In fact, the prototype returns undefined but when chcking for it,
   * we get not comparison validation at all
   */
  if (!isFinite(now) || !isFinite(then)) {
    throw SyntaxError('You must pass in a valid date time with a type of Date');
  }

  // Check if simply today is not the future.
  const isToday = now.toDateString() === then.toDateString();
  if (isToday) {
    return false;
  }

  // Store UTC miliseconds.
  if (typeof when === 'string') {
    now = Date.parse(when);
  } else {
    now = when.getTime();
  }

  // Store UTC miliseconds.
  if (typeof against === 'string') {
    then = Date.parse(against);
  } else {
    then = against.getTime();
  }

  // Compare the miliseconds. It's the only way to be sure.
  return then < now;
}
