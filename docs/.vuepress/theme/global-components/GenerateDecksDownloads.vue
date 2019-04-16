<template lang="pug">
  .download-tables(v-if="decksReady")
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
import axios from 'axios';
import sorter from '../../scripts/Sorter';

export default {
  name: 'GenerateAllDownloads',
  data() {
    return {
      defaultDecks: [],
      deckFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: 'json/decks',
      decksReady: false,
      sorter: sorter
    };
  },
  async beforeCreate(){
    const fetched = await axios.get('https://mtgjson.com/json/DeckLists.json');
    const data = await this.sorter('name', fetched.data.decks);
    this.defaultDecks = data;
    this.decksReady = true;
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
