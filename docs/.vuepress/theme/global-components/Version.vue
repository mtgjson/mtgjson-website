<template lang="pug">
  div.version(v-if="version")
    router-link.version-number(
      :to="`/changelog`") Build: v{{ version.version }}
</template>

<script>
export default {
  name: 'Version',
  data() {
    return {
      defaultVersion: {
        version: '...',
      },
    };
  },
  computed: {
    version() {
      return this.defaultVersion;
    },
  },
  mounted() {
    fetch('https://mtgjson.com/json/version.json')
      .then(response => response.json())
      .then(response => {
        response.version = 'v' + response.version;
        this.defaultVersion = response;
      })
      .catch(err => {
        console.error(err);
      });
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
