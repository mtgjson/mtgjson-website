// PogChamp
// A little different than the source but works
// https://jsbin.com/wowezadolo/edit?js,console
export default ( event = '', toSort = [] ) => {
  let values = event.currentTarget
    ? event.currentTarget.value.split(':')
    : event.split(':');
  let config = {
    prop: values[0],
    desc: values[1] ? -1 : 1,
    parser: function(x) {
      return x;
    },
  };

  let getItem = function(x) {
    let isObject = x != null && typeof x === 'object';
    let isProp = isObject && this.prop in x;
    return this.parser(isProp ? x[this.prop] : x);
  };
  
  return toSort.sort((a, b) => {
    a = getItem.call(config, a);
    b = getItem.call(config, b);
    // + operator before a bool will create a bool's
    // integer equivilent: true => 1; false => 0
    return config.desc * (a < b ? -1 : +(a > b));
  });
}