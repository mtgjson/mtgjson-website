<template lang="pug">
  .download-tables
    .download-tables--loaded(v-if="decks.length > 0")
      .sorting-options
        h6.show-options(
          @click="showOptions = !showOptions"
          :class="{'hide-options': !showOptions}") Toggle Options
        .sort-rows(v-if="showOptions")
          .sort-row.search
            label Search By:
            input.table-sort-select(
              placeholder="name, code, etc..."
              type="text"
              v-model="searchKey"
              @input="onHandleChange")

          .sort-row
            label Sort By:
            select.table-sort-select(v-model="sortKey" @change="$helpers.sort(sortKey, decks)")
              option(value="releaseDate:true" selected) Newest
              option(value="releaseDate") Oldest
              option(value="code") Code (Ascending)
              option(value="code:true") Code (Descending)
              option(value="name") Name (Ascending)
              option(value="name:true") Name (Descending)

      blockquote.download-item(v-for="(deck, key) in decks" :key="key")
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

    .download-tables--unloaded(v-else)
      p.loading-msg Loading...
</template>

<script>
export default {
  name: "DownloadDecks",
  data() {
    return {
      defaultDecks: [],
      filteredDecks: [],
      searchKey: "",
      showOptions: false,
      sortKey: "releaseDate:true",
      downloadFormats: ["json", "bz2", "gz", "xz", "zip"],
      deckDirectory: undefined,
      message: "Loading..."
    };
  },
  computed: {
    decks() {
      return this.filteredDecks;
    }
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["DeckList", "UPDATE_DECKS"]);

    this.defaultDecks = this.$store.getters.DeckList;
    this.filteredDecks = await this.$helpers.sort(
      "releaseDate:true",
      this.defaultDecks
    );
    this.deckDirectory = this.$themeConfig.api + "/decks";
  },
  methods: {
    handleMessage(length = 0) {
      this.message = `${length} results found...`;
    },
    onHandleChange() {
      // Throttle so we don't go nuts
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const searched = this.$helpers.search(
          this.searchKey,
          this.defaultDecks
        );
        const sorted = this.$helpers.sort(this.sortKey, searched);

        this.handleMessage(sorted.length);
        this.filteredDecks = sorted;
      }, this.$throttleSpeed);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/download";
</style>
