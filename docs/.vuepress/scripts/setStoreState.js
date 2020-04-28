export default async function setStoreState( value, dispatcher ) {
  if ( Object.keys( this.$store.getters[ value ] ).length < 1) {
    await this.$store.dispatch( dispatcher );
  }
}
