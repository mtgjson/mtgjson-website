<template lang="pug">
  div.meta-data(v-if="metaData")
    router-link.version-number(
      :to="`/changelog`") {{ metaData.version }}
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      defaultMetaData: {},
    };
  },
  mounted() {
    axios
      .get('https://mtgjson.com/json/version.json')
      .then(response => {
        this.defaultMetaData = response.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  computed: {
    metaData() {
      return this.defaultMetaData;
    },
  },
};
</script>

<style lang="stylus">
.meta-data {
  display: inline-block;
  margin-left: 0.8rem;
  font-size: 12px;
  color: $textColor;
  position: relative;

  .version-number {
    font-weight: 600;
  }

  .release-date {
    font-weight: normal;
  }
}
</style>
