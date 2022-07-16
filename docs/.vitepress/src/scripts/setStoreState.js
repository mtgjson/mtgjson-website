// Async function to set the Vuex store state once on render.
export const setStoreState = async (store, value) => {
  // Vue will call this on every initial render but once the store is
  // populated it will not repopulate, keeping our async data persisted
  if (Object.keys(store.state[value]).length < 1) {
    await store.dispatch('FETCH_DATA', value);
  }
}
