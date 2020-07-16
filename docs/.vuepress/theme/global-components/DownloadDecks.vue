<template lang="pug">
  .download-tables
    .download-table(v-if="!decks")
      p.loading-msg {{ message }}
    .download-table(v-else)
      .sorting-options
        p.show-options(
          @click="showOptions = !showOptions"
          :class="{'hide-options': !showOptions}") Toggle Options
        fieldset.sort-rows(v-if="showOptions")
          .sort-row.search
            label(for="search-input") Search By:
            input.table-sort-select(
              id="search-input"
              placeholder="name, code, etc..."
              type="text"
              v-model="searchKey"
              @input="onHandleChange")

          .sort-row
            label(for="sort-input") Sort By:
            select.table-sort-select(
              id="sort-input"
              v-model="sortKey"
              @change="$helpers.sort(sortKey, decks)")
              option(value="releaseDate:true" selected) Newest
              option(value="releaseDate") Oldest
              option(value="code") Code (Ascending)
              option(value="code:true") Code (Descending)
              option(value="name") Name (Ascending)
              option(value="name:true") Name (Descending)

      p(v-if="decks.length < 1") {{ message }}
      blockquote.download-item(v-for="(deck, key) in decks" :key="key" v-else)
        .download-wrap
          .img-wrap
            div(:class="`ss ss-${deck.code.toLowerCase()}`")
          .text-wrap
            .text-wrap--details
              h4(:id="deck.name.replace(/ /g, '_')") {{ deck.name }}
              ol
                li
                  small Deck Code:
                  small &nbsp;{{ deck.code }}
                li
                  small Release Date:
                  small &nbsp;{{ deck.releaseDate }}
            .text-wrap--downloads
              DownloadField(:fileName="`decks/${deck.fileName}`")
</template>
<script>
import DownloadField from './DownloadField';
export default {
  name: "DownloadDecks",
  components: { DownloadField },
  data() {
    return {
      defaultDecks: null,
      filteredDecks: null,
      searchKey: "",
      showOptions: false,
      sortKey: "releaseDate:true",
      timeout: null,
      message: "Loading..."
    };
  },
  computed: {
    decks() {
      return this.filteredDecks;
    }
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["DeckList"]);

    this.defaultDecks = await this.$store.getters.DeckList;
    this.filteredDecks = await this.$helpers.sort(
      "releaseDate:true",
      this.defaultDecks
    );
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
