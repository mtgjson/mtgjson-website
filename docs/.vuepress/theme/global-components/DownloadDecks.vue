<template lang="pug">
  .download-tables
    .download-table
      SortingOptions(ref="sorter" :list="defaultDecks" :filters="deckFilters" @updatedata="updateData")
      p.results-message {{ resultsLength }}
      blockquote(v-for="(deck, key) in decks" :key="key")
        .download-wrap
          .img-wrap
            div(:class="`ss ss-${deck.code.toLowerCase()}`")
          .text-wrap
            .text-wrap--details
              h3(:id="deck.name.replace(/ /g, '_')") {{ deck.name }}
              ol
                li
                  small Code:
                  small &nbsp;{{ deck.code }}
                li
                  small Type:
                  small &nbsp;{{ deck.type}}
                li
                  small Release Date:
                  small &nbsp;{{ deck.releaseDate }}
            .text-wrap--downloads
              DownloadField(:fileName="`AllDecks`" :downloadPath="`decks/${deck.fileName}`")
      button.load-more-btn.cta-btn(@click="onLoadMore") Load More
</template>
<script>
import DownloadField from "./DownloadField";
import SortingOptions from "./SortingOptions";
export default {
  name: "DownloadDecks",
  components: { DownloadField, SortingOptions },
  data() {
    return {
      defaultDecks: [],
      dynamicDecks: [],
      deckFilters: [],
      lazyOffset: 25,
      sortKey: "releaseDate:true",
      resultsLength: 'Loading...'
    };
  },
  computed: {
    decks() {
      return this.dynamicDecks;
    }
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["DeckList"]);
    this.defaultDecks = await this.$store.getters.DeckList;
    this.dynamicDecks = await this.$helpers.sort(this.sortKey, this.defaultDecks).slice(0, this.lazyOffset);
    this.deckFilters = Array.from(new Set(this.defaultDecks.map(cur => cur.type)));
    this.resultsLength = `${this.defaultDecks.length} Results`;
  },
  methods: {
    updateData(data){
      this.dynamicDecks = data;
    },
    onLoadMore(){
      this.$refs.sorter.onLoadMore();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/download";
</style>
