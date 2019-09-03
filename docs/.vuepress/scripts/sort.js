// A little different than the source but works
// https://jsbin.com/wowezadolo/edit?js,console
export default (event = '', dataToSort) => {
  const target = event.currentTarget ? event.currentTarget : event;
  const value = target.value ? target.value : target;

  if (!dataToSort) {
    throw TypeError('You must pass in a data to sort');
  }

  if (!event || event.length === 0 || typeof value !== 'string') {
    return dataToSort;
  }

  const filters = value.split(':');
  const order = filters[1] ? -1 : 1; // -1 === descending, 1 === ascending
  const prop = filters[0]; // actual prop to check on

  return dataToSort.sort((a, b) => {
    const first = a[prop];
    const second = b[prop];

    // + operator before a bool will create a bool's
    // integer equivilent: true => 1; false => 0
    return order * (first < second ? -1 : +(first > second));
  });
};
