export default {
  prettifyType: str => {
    return (
      str
        // split each word by underscores
        .split('_')
        // uppercase each word
        .map(cur => cur.charAt(0).toUpperCase() + cur.slice(1))
        // join them back with a space
        .join(' ')
    );
  },
  isFuture: time => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const thisMonth = now.getMonth() + 1; // Buffer the date as January is 0
    const thisDate = now.getDate();
    const [year, month, date] = time.split('-').map(c => Number(c));

    // This/next year and next month or
    // This/next year and this/next month but not today
    return year >= thisYear && (month > thisMonth || (month == thisMonth && date > thisDate));
  },
  filter: (filter, dataToFilter) => {
    return filter.length === 0
      ? // No filter, return all data
        dataToFilter
      : dataToFilter.filter(cur => cur.type === filter);
  },
  // A little different than the source but works
  // https://jsbin.com/wowezadolo/edit?js,console
  sort: (event = '', dataToSort) => {
    const values = event.currentTarget
      ? event.currentTarget.value.split(':')
      : event.split(':');
    const config = {
      prop: values[0],
      desc: values[1] ? -1 : 1,
    };

    const getProp = function(props) {
      let isObject = props != null && typeof props === 'object';
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
  },
};
