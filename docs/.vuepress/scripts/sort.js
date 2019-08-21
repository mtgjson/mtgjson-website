// A little different than the source but works
// https://jsbin.com/wowezadolo/edit?js,console
export default (event = '', dataToSort) => {
  if (!dataToSort) {
    throw TypeError('You must pass in a data to sort');
  }

  if (event.length === 0) {
    return dataToSort;
  }

  const values = event.currentTarget ? event.currentTarget.value.split(':') : event.split(':');
  const config = {
    prop: values[0],
    desc: values[1] ? -1 : 1,
  };

  const getProp = function(props) {
    let isObject = props !== null && typeof props === 'object';
    let isProp = isObject && this.prop in props;
    return isProp ? props[this.prop] : props;
  };

  return dataToSort.sort((a, b) => {
    a = getProp.call(config, a);
    b = getProp.call(config, b);
    // + operator before a bool will create a bool's
    // integer equivilent: true => 1; false => 0
    return config.desc * (a < b ? -1 : +(a > b));
  });
};
