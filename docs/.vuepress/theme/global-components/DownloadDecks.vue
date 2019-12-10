<template lang="pug">
  .download-tables
    .sorting-options
      .sort-row
        strong Sort By:
        select.table-sort-select(v-model="sortKey" @change="$helpers.sort(sortKey, decks)")
          option(value="releaseDate:true" selected) Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)

      .sort-row.search
        strong Search By:
        input.table-sort-select(
          placeholder="name, code, etc..."
          type="text"
          v-model="searchKey"
          @input="onHandleChange")

    p.no-result(v-if="decks.length === 0")
      em {{ message }}
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
  name: 'DownloadDecks',
  data() {
    return {
      filteredDecks: [],
      searchKey: '',
      sortKey: 'releaseDate:true',
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: 'json/decks',
      message: 'Loading...',
    };
  },
  computed: {
    decks() {
      return this.filteredDecks;
    },
  },
  async created() {
    if(this.$store.getters.decks.length < 1){
      await this.$store.dispatch('UPDATE_DECKS');
    }

    this.filteredDecks = this.$helpers.sort('releaseDate:true', this.$store.getters.decks);
  },
  methods: {
    handleMessage(length = 0) {
      this.message = `${length} results found...`;
    },
    onHandleChange() {
      // Throttle so we don't go nuts
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const searched = this.$helpers.search(this.searchKey, this.$store.getters.decks);
        const sorted = this.$helpers.sort(this.sortKey, searched);

        this.handleMessage(sorted.length);
        this.filteredDecks = sorted;
      }, this.$store.getters.throttleSpeed);
    }
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';
</style>
