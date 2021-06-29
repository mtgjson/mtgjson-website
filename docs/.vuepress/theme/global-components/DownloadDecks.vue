<template lang="pug">
  .download-tables
    .download-table(v-if="!decks")
      .loader
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
              placeholder="name, code, etc"
              type="text"
              v-model="searchKey"
              @input="onHandleChange")

          .sort-row
            label(for="sort-input") Sort By:
            select.table-sort-select(
              id="sort-input"
              v-model="sortKey"
              @change="$helpers.sort(sortKey, decks)")
              option(value="releaseDate:true") Release Date (Newest)
              option(value="releaseDate") Release Date (Oldest)
              option(value="code") Code (Ascending)
              option(value="code:true") Code (Descending)
              option(value="name") Name (Ascending)
              option(value="name:true") Name (Descending)
              option(value="type") Type (Ascending)
              option(value="type:true") Type (Descending)

      strong.results-message(v-bind:class="{error: hasError}" v-html="message")
      blockquote(v-for="(deck, key) in decks" :key="key")
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
                  small Type:
                  small &nbsp;{{ deck.type}}
                li
                  small Release Date:
                  small &nbsp;{{ deck.releaseDate }}
            .text-wrap--downloads
              DownloadField(:fileName="`decks/${deck.fileName}`")
</template>
<script>
import DownloadField from "./DownloadField";
export default {
  name: "DownloadDecks",
  components: { DownloadField },
  data() {
    return {
      defaultDecks: [],
      filteredDecks: [],
      hasError: false,
      searchKey: "",
      showOptions: true,
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

    if(this.defaultDecks.length === 0){
      this.hasError = true;
      this.message = `There was a problem loading this data from our API. Please let a MTGJSON developer know by contacting us through our Discord <a href="https://mtgjson.com/discord">here</a>.`
    } else {
      this.filteredDecks = await this.$helpers.sort("releaseDate:true", this.defaultDecks);
      this.handleMessage(this.defaultDecks.length);
    }
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
