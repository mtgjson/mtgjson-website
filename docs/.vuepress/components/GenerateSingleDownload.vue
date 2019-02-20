<template lang="pug">
  .download-table
    .download-item(v-if="file")
      .download-wrap
        .txt-wrap
          h3(:id="file.example") {{ file.example }}
            //- a(:href="'#' + file" aria-hidden="true" class="header-anchor") #
          small
            span.land-cycler {{ file.description }}
        .dl-wrap(v-if="file.example !== 'AllSetFiles'")
          a.cta-btn(v-for="(format, key) in fileFormats" v-if="format !== 'json'" :key="key" :href="`/${fileDirectory}/${file.example}.json.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.json`") {{ format }}
        .dl-wrap(v-else)
          a.cta-btn(v-for="(format, key) in fileFormatsAllSetFiles" v-if="format !== 'zip'" :key="key" :href="`/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.zip`") {{ format }}
</template>

<script>
import Landcycle from '../modules/Landcycle';

export default {
  name: 'GenerateSingleDownload',
  props: ['name', 'file'],
  data() {
    return {
      fileFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      fileFormatsAllSetFiles: ['zip', 'bz2', 'gz', 'xz'],
      fileDirectory: 'json',
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
