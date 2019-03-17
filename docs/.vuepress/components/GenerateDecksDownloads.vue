<template lang="pug">
  .download-tables
    .sorting-options
      .sort-row
        div
          strong Sort By:
          select.table-sort-select(@change="sorter($event, decks)")
            option(value="name" selected) Name (Ascending)
            option(value="name:true") Name (Descending)
            option(value="code") Code (Ascending)
            option(value="code:true") Code (Descending)
            
    .download-table(v-if="decks" v-for="(deck, key) in decks")
      .download-item(v-if="deck")
        .download-wrap
          .img-wrap
            div(:class="`ss ss-${deck.code.toLowerCase()}`")
          .txt-wrap
            h3(:id="deck.name") {{ deck.name }}
            small Deck Code: 
              span {{ deck.code }}
              //- @ TODO: Remove condition once added in Py app
            small(v-if="deck.releaseDate") Release Date: 
              span {{ deck.releaseDate }}
          .dl-wrap
            a.cta-btn(v-for="(format, key) in deckFormats" v-if="format !== 'json'" :key="key" :href="`/${deckDirectory}/${deck.fileName}.json.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${deckDirectory}/${deck.fileName}.json`") {{ format }}
</template>

<script>
import Sorter from '../modules/Sorter';

export default {
  name: 'GenerateAllDownloads',
  data() {
    return {
      defaultDecks: require(`../public/json/DeckLists.json`).decks,
      deckFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: 'json/decks',
      sorter: Sorter
    };
  },
  mounted() {
    this.defaultDecks = this.sorter('name', this.decks);
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
