<template lang="pug">
  .download-tables(v-if="decks")
    .sorting-options
      .sort-row
        strong Sort By:
        select.table-sort-select(@change="$sorter($event, decks)")
          option(value="releaseDate:true" selected) Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)
            
    .download-table(v-for="(deck, key) in decks")
      .download-item
        .download-wrap
          .img-wrap
            div(:class="`ss ss-${deck.code.toLowerCase()}`")
          .txt-wrap
            h3(:id="deck.name.replace(/ /g, '_')") {{ deck.name }}
              a(:href="`#${deck.name.replace(/ /g, '_')}`" aria-hidden="true" class="header-anchor") #
            small Code: 
              span {{ deck.code }}
            //- This if/else logic is needed until `type` is added 
            small(v-if="deck.type") Type: 
              span {{ deck.type }}
            small Release Date: 
              span {{ deck.releaseDate }}
          .dl-wrap
            a.cta-btn(v-for="(format, key) in deckFormats" v-if="format !== 'json'" :key="key" :href="`/${deckDirectory}/${deck.fileName}.json.${format}`") {{ format }}
            a.cta-btn(v-else :href="`/${deckDirectory}/${deck.fileName}.json`") {{ format }}
</template>

<script>
export default {
  name: 'GenerateDecksDownloads',
  data() {
    return {
      defaultDecks: null,
      deckFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: 'json/decks',
    };
  },
  mounted() {
    this.defaultDecks = this.$decks;
  },
  computed: {
    decks() {
      return this.defaultDecks;
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/download';
</style>
