<template lang="pug">
  .download-tables(v-if="filtered")
    .sorting-options
      .sort-row.search
        strong Search By:
        input.table-sort-select(
          placeholder="name, code, etc..."
          type="text"
          v-model="searchKey"
          @input="handleSearch")

      .sort-row
        strong Sort By:
        select.table-sort-select(v-model="sortKey" @change="$helpers.sort(sortKey, filtered)")
          option(value="releaseDate:true" selected) Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)

    blockquote.download-item(v-for="(deck, key) in filtered")
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
      defaultDecks: [],
      filteredDecks: [],
      searchKey: '',
      sortKey: 'releaseDate:true',
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: 'json/decks',
    };
  },
  computed: {
    filtered() {
      return this.filteredDecks;
    },
  },
  mounted() {
    this.defaultDecks = this.$decks;
    this.filteredDecks = this.$decks;
  },
  methods: {
    handleSearch() {
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const searched = this.$helpers.searchFilter(this.searchKey, this.defaultDecks);
        const sorted = this.$helpers.sort(this.sortKey, searched);

        this.filteredDecks = sorted;
      }, 300);
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';
</style>
