<template lang="pug">
  .download-table
    .download-item(v-if="deck")
      .download-wrap
        .txt-wrap
          h3(:id="deck.name") {{ deck.name }}
          small Set Code: 
            span {{ deck.code }}
        .dl-wrap
          a.cta-btn(v-for="(format, key) in deckFormats" v-if="format !== 'json'" :key="key" :href="`/${deckDirectory}/${deck.fileName}.json.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${deckDirectory}/${deck.fileName}.json`") {{ format }}
</template>

<script>
export default {
  name: 'GenerateSingleDownload',
  props: ['deck'],
  data() {
    return {
      deckFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: 'json/decks',
    };
  }
};
</script>

<style lang="stylus">
.download-table {
  border-top-width: 0 !important;

  &:first-of-type {
    border-top-width: 1px !important;
  }
}
</style>
