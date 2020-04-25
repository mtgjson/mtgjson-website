<template lang="pug">
  .download-tables
    .sorting-options(v-if="decks.length !== 0")
      h6.show-options(
        @click="showOptions = !showOptions"
        :class="{'hide-options': !showOptions}") Toggle Options
      .sort-rows(v-if="showOptions")
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
        .text-wrap
          .text-wrap--details
            h3(:id="deck.name.replace(/ /g, '_')") {{ deck.name }}
            ol
              li
                small Deck Code:
                small &nbsp;{{ deck.code }}
              li
                small Release Date:
                small &nbsp;{{ deck.releaseDate }}
          .text-wrap--downloads
            ol
              li
                small Downloads:
                span(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key")
                  a.dl-btn(download :href="`${$env}/${deckDirectory}/${deck.fileName}.json.${format}`") {{ format }}
                span(v-else)
                  a.dl-btn(download :href="`${$env}/${deckDirectory}/${deck.fileName}.json`") {{ format }}

</template>

<script>
export default {
  name: 'DownloadDecks',
  data() {
    return {
      filteredDecks: [],
      searchKey: '',
      showOptions: false,
      sortKey: 'releaseDate:true',
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      deckDirectory: undefined,
      message: 'Loading...',
    };
  },
  computed: {
    decks() {
      return this.filteredDecks;
    },
  },
  async created() {
    this.deckDirectory = this.$themeConfig.api + '/decks';

    if(this.$store.getters.decks.length < 1){
      await this.$store.dispatch('UPDATE_DECKS');
    }

    this.filteredDecks = await this.$helpers.sort('releaseDate:true', this.$store.getters.decks);
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

<style lang="scss" scoped>
@import '../styles/download';
</style>
