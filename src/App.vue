<template lang="pug">
  #app
    Header
    router-view
</template>


<script>
import manifest from "@/_manifest";
import Header from '@/components/Header';

export default {
  name: 'app',
  components: {
    Header
  },
  beforeMount(){
    this.$store.dispatch('store manifest', manifest);
  },
  head(){
    return {
      title: "MTGJSON - MTGJSON4"
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/global';
</style>
