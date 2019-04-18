<template lang="pug">
  div.meta-data(v-if="metaData")
    router-link.version-number(
      :to="changelogLink") {{ metaData.version }}
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      defaultMetaData: {},
      defaultChangelogLink: '',
    };
  },
  async beforeMount() {
    await axios.get('https://mtgjson.com/json/version.json').then(res => {
      this.defaultMetaData = res.data;
      const version = res.data.version.replace(/\./g, '-');
      const date = res.data.date;

      this.defaultChangelogLink = `/changelog/#_${version}-${date}`;
    })
    
  },
  computed: {
    metaData() {
      return this.defaultMetaData;
    },
    changelogLink() {
      return this.defaultChangelogLink;
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
