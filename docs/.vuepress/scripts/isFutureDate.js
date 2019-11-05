/**
 * isFutureDate
 * @param {string|Date} when - when to compare against now
 * @param {string|Date} against - when to compare against the first argument
 * @return Boolean
 * @throws TypeError
 * @example
 * isFutureDate('2019-10-10', '2020-01-01')
 * isFutureDate(new Date('2019-10-10'), '2020-01-01')
 */

export default (when, against) => {
  let now = undefined;
  let then = undefined;

  if (!when) {
    throw TypeError('You must pass in a primary comparison type of Date or String');
  }

  if (!against) {
    then = new Date();
  } else {
    then = against;
  }

  const isValidNow = typeof when === 'string' || when instanceof Date;
  const isValidThen = typeof then === 'string' || then instanceof Date;

  if (isValidNow && isValidThen) {
    now = new Date(when);
    then = new Date(then);
  } else {
    throw TypeError('You must pass in an primary comparison type of Date or String');
  }

  // Check if valid Date
  if (isNaN(now.getTime()) || isNaN(then.getTime())) {
    throw SyntaxError('You must pass in a valid date time with a type of Date');
  }

  return then < now;
};
