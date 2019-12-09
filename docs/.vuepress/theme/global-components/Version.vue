<template lang="pug">
  div.version
    router-link.version-number(
      :to="`/changelog`") Build: {{ version }}
</template>

<script>
export default {
  name: 'Version',
  computed: {
    version() {
      return this.$store.getters.metadata.version;
    },
  },
  async created() {
    if(Object.keys(this.$store.getters.metadata).length < 1){
      await this.$store.dispatch('UPDATE_METADATA');
    }
  },
};
</script>

<style lang="stylus" scoped>
.version {
  display: inline-block;
  color: var(--text-color);
  position: relative;

  &-number {
    font-size: 12px;
    font-weight: bold;
    color: var(--gray-color);
  }
}

@media (max-width: $MQMobile) {
  .version {
    &-number {
      font-size: 16px;
    }
  }
}
</style>
