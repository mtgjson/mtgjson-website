// A little different than the source but works
// https://jsbin.com/wowezadolo/edit?js,console
export default (value = '', dataToSort) => {
  if (!dataToSort) {
    throw TypeError('You must pass in a data to sort');
  }

  if (!value || value.length < 1 || typeof value !== 'string') {
    return dataToSort;
  }

  const filters = value.split(':');
  const order = filters[1] ? -1 : 1; // -1 === descending, 1 === ascending
  const prop = filters[0]; // actual prop to check on

  return dataToSort.sort((a, b) => {
    const first = a[prop];
    const second = b[prop];

    // Coalesce the order if we have no data to compare against
    if(!first || !second){
      return 1;
    }

    // + operator before a bool will create a bool's
    // integer equivilent: true => 1; false => 0
    return order * (first < second ? -1 : +(first > second));
  });
};
