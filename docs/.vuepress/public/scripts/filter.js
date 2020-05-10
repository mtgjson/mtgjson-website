export default (filter, dataToFilter) => {
  return filter.length === 0
    ? // No filter, return all data
    dataToFilter
    : dataToFilter.filter(cur => cur.type === filter);
}
