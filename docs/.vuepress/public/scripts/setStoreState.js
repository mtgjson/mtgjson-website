// Async function to set the Vuex store state once on render.
export default async function setStoreState( value ) {
  // Vue will call this on every initial render but once the store is
  // populated it will not repopulate, keeping our async data persisted
  if ( Object.keys( this.$store.getters[ value ] ).length < 1) {
    await this.$store.dispatch( "FETCH_DATA", value );
  }
}
