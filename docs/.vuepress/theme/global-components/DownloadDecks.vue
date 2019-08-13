<template lang="pug">
  .download-tables(v-if="decks")
    .sorting-options
      .sort-row
        strong Sort By:
        select.table-sort-select(@change="$helpers.sort($event, decks)")
          option(value="releaseDate:true" selected) Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)

    blockquote.download-item(v-for="(deck, key) in decks")
      .download-wrap
        .img-wrap
          div(:class="`ss ss-${deck.code.toLowerCase()}`")
        .txt-wrap
          h3(:id="deck.name.replace(/ /g, '_')") {{ deck.name }}
          ol
            li
              small Deck Code:&nbsp;{{ deck.code }}
            li
              small Release Date:&nbsp;{{ deck.releaseDate }}
        ol.dl-wrap
          li
            small Downloads:
            span(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key")
              a.dl-btn(:href="`${$env}/${deckDirectory}/${deck.fileName}_${deck.code}.json.${format}`") {{ format }}
            span(v-else)
              a.dl-btn(:href="`${$env}/${deckDirectory}/${deck.fileName}_${deck.code}.json`") {{ format }}

</template>

<script>
export default {
  name: 'DecksDownloads',
  data() {
    return {
      defaultDecks: null,
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: 'json/decks',
    };
  },
  computed: {
    decks() {
      return this.defaultDecks;
    },
  },
  mounted() {
    this.defaultDecks = this.$decks;
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';
</style>
