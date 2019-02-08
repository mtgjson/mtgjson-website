<template lang="pug">
  header
    nav
      router-link( :to="'/'") MTGJSON 
      router-link( :to="'/docs/'") Documentation
      router-link( :to="'/downloads'") Downloads
      router-link( :to="'/changelog'") Changelog
      router-link( :to="'/about'") About Us
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  border-bottom: 1px solid lightblue;
  
  nav {
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;

    a {
      flex: auto;
      display: block;
      padding: 20px 30px;
      text-align: center;
      box-sizing: border-box;
      text-decoration: none;

      &:first-of-type {
        flex: 0 0 220px;
        padding: 30px 0;
      }
    }

  }

}
</style>
