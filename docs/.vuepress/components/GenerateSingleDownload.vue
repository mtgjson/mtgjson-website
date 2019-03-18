<template lang="pug">
  .download-table
    .download-item(v-if="file")
      .download-wrap
        .txt-wrap
          h3 {{ name }}
          small
            span.land-cycler {{ file.description }}
        //- All set files download
        .dl-wrap(v-if="file.example === 'AllSetFiles'")
          a.cta-btn(v-for="(format, key) in fileFormatsAllSetFiles" v-if="format !== 'zip'" :key="key" :href="`/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.zip`") {{ format }}
        //- All deck files download
        .dl-wrap(v-else-if="file.example === 'AllDeckFiles'")
          a.cta-btn(v-for="(format, key) in fileFormatsAllSetFiles" v-if="format !== 'zip'" :key="key" :href="`/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.zip`") {{ format }}
        //- Deck lists
        .dl-wrap(v-else-if="file.example === 'DeckLists'")
          a.cta-btn(v-for="(format, key) in fileFormats" v-if="format !== 'json'" :key="key" :href="`/${fileDirectory}/${file.example}.json.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.json`") {{ format }}
        //- Everything else
        .dl-wrap(v-else)
          a.cta-btn(v-for="(format, key) in fileFormats" v-if="format !== 'json'" :key="key" :href="`/${fileDirectory}/${file.example}.json.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.json`") {{ format }}
</template>

<script>
import Landcycle from '../scripts/Landcycle';

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
