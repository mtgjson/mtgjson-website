<template lang="pug">
  div.version(v-if="version")
    router-link.version-number(
      :to="`/changelog`") {{ version.version }}
</template>

<script>
import axios from 'axios';

export default {
  name: "Version",
  data() {
    return {
      defaultVersion: {
        version: '...'
      },
    };
  },
  computed: {
    version() {
      return this.defaultVersion;
    },
  },
  mounted() {
    axios
      .get('https://mtgjson.com/json/version.json')
      .then(response => {
        this.defaultVersion = response.data;
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
</style>
