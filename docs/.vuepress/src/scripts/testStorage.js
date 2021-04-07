export default (shouldTest = true) => {
  const store = !shouldTest ? undefined : window.localStorage;
  const test = 'test';

  try {
    store.setItem(test, test);
    store.removeItem(test);

    return true;
  } catch(err) {
    return false;
  }
}
