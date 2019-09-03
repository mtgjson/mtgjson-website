export default (when, against) => {
  const typeOfWhen = typeof when;
  const typeOfAgainst = typeof against;

  let now = undefined;
  let then = undefined;
  let future = undefined;
  let isFuture = undefined;

  if(!when){
    throw TypeError('You must pass in a type of Date or String');
  } else {
    if (typeOfWhen === 'string') {
      then = new Date(when);
    } else if (when instanceof Date) {
      then = when;
    } else {
      throw TypeError('You must pass in a type of Date or String');
    }
  }

  if (against) {
    if (typeOfAgainst === 'string') {
      future = new Date(against);
    } else if (against instanceof Date) {
      future = against;
    } else {
      throw TypeError('You must pass in a comparison of type of Date or String');
    }
  }

  now = future ? future : new Date();

  isFuture = then > now;

  return isFuture;
};
