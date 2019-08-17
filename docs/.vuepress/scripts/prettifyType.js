export default str => {
  return (
    str
      // split each word by underscores
      .split('_')
      // uppercase each word
      .map(cur => cur.charAt(0).toUpperCase() + cur.slice(1))
      // join them back with a space
      .join(' ')
  );
}
