<template lang="pug">
  .download-table
    .download-item
      .download-wrap
        .txt-wrap
          p(:id="download") {{ download }}
            a(:href="'#' + download" aria-hidden="true" class="header-anchor") #
          small
            span.land-cycler {{ descriptions[download].description }}
        .dl-wrap(v-if="download !== 'AllSetFiles'")
          a.cta-btn(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key" :href="`/${downloadDirectory}/${download}.json.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${downloadDirectory}/${download}.json`") {{ format }}
        .dl-wrap(v-else)
          a.cta-btn(v-for="(format, key) in downloadFormatsAllSetFiles" v-if="format !== 'zip'" :key="key" :href="`/${downloadDirectory}/${download}.tar.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${downloadDirectory}/${download}.zip`") {{ format }}
</template>

<script>
import Landcycle from '../modules/Landcycle';

export default {
  name: 'GenerateSingleDownload',
  props: ['download', 'descriptions'],
  data() {
    return {
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadFormatsAllSetFiles: ['zip', 'bz2', 'gz', 'xz'],
      downloadDirectory: 'json',
    };
  },
  mounted() {
    this.hydrate();
  },
  updated() {
    this.hydrate();
  },
  methods: {
    hydrate() {
      const land = 'output-data';
      const hand = Array.from(this.$el.querySelectorAll('.land-cycler'));
      const build = new Landcycle(hand, land);
    },
  },
};
</script>

<style lang="stylus">
.download-table {
  border-top-width: 0 !important;

  .code-link {
    text-transform: capitalize !important;
  }

  &:first-of-type {
    border-top-width: 1px !important;
  }
}
</style>
