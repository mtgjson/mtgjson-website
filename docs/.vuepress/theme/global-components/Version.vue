<template lang="pug">
  div.version
    router-link.version-number(v-if="version" :to="`/changelog`") Build: {{ version }}
</template>

<script>
export default {
  name: "Version",
  computed: {
    version() {
      return this.$store.getters.Meta.version;
    }
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["Meta", "UPDATE_METADATA"]);
  }
};
</script>

<style lang="scss" scoped>
.version {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--text-color);
  position: relative;

  &-number {
    font-size: 12px;
    font-weight: bold;
    color: var(--gray-color);
  }
}

@media (max-width: 719px) {
  .version {
    &-number {
      font-size: 16px;
    }
  }
}
</style>
