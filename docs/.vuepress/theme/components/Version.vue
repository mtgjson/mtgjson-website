<template lang="pug">
  div.version(v-if="version")
    router-link.version-number(
      :to="`/changelog`") Build: {{ version.version }}
</template>

<script>
import axios from 'axios';

export default {
  name: "Version",
  data() {
    return {
      defaultVersion: {},
    };
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
  computed: {
    version() {
      return this.defaultVersion;
    },
  },
};
</script>

<style lang="stylus" scoped>
.version {
  display: inline-block;
  color: $textColor;
  position: relative;

  &-number {
    font-size: 12px;
    font-weight: bold;
    color: $grayColor;
  }
}
</style>
