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
              small Set Code: 
                span {{ deck.code }}
            //- This if/else logic is needed until `type` is added 
            li(v-if="deck.type")
              small Type: 
                span {{ deck.type }}
            li
              small Release Date: 
                span {{ deck.releaseDate }}
          ol.dl-wrap
            li
              small Files: 
                span(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key") , 
                  a(:href="`/${deckDirectory}/${deck.fileName}_${deck.code}.json.${format}`") {{ format }}
                span(v-else)
                  a(:href="`/${deckDirectory}/${deck.fileName}_${deck.code}.json`") {{ format }}
                    
</template>

<script>
export default {
  name: 'GenerateDecksDownloads',
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
