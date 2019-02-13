<template lang="pug">
  .contributors
    .tip.custom-block(v-if="contributors")
      .custom-block-wrap(v-for="(contributor, key) in contributors")
        p.custom-block-title {{ contributor }}
</template>

<script>
export default {
  name: 'GenerateContributors',
  computed: {
    contributors(){
      return [
        'Staghouse - Documentation Developer'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tip.custom-block {
    padding-bottom: 30px !important;
  }
</style>
