<template lang="pug">
  .download-tables
    .download-table
      SortingOptions(ref="sorter" :list="defaultSets" :filters="setFilters" @updatedata="updateData")
      p.results-message {{ resultsLength }}
      blockquote(v-for="(set, key) in sets" :key="key")
        .download-wrap
          .img-wrap
            div(v-if="set.keyruneCode" :class="`ss ss-${set.keyruneCode.toLowerCase()}`")
          .text-wrap
            .text-wrap--details
              h3(:id="set.name.replace(/ /g, '_')") {{ set.name }}
              ol
                li(v-if="set.isPartialPreview")
                  div.spoiler spoiler
                li(v-if="set.isOnlineOnly")
                  div.spoiler online only
                li(v-if="set.isPaperOnly")
                  div.spoiler paper only
                li(v-if="set.isPaper")
                  div.spoiler paper
                li(v-if="set.isOnline")
                  div.spoiler online
              ol
                li
                  small Code:
                  small &nbsp;{{ set.code }}
                li
                  small Type:
                  small &nbsp;{{ set.type.replace(/_/g, ' ') }}
                li
                  small Release Date:
                  small &nbsp;{{ set.releaseDate }}
            .text-wrap--downloads
              DownloadField(:fileName="set.code")
      button.load-more-btn.cta-btn(@click="onLoadMore") Load More
</template>

<script>
import DownloadField from "./DownloadField";
import SortingOptions from "./SortingOptions";
export default {
  name: "DownloadSets",
  components: { DownloadField, SortingOptions },
  data() {
    return {
      defaultSets: [],
      dynamicSets: [],
      setFilters: [],
      lazyOffset: 25,
      sortKey: "releaseDate:true",
      resultsLength: 'Loading...'
    };
  },
  computed: {
    sets() {
      return this.dynamicSets;
    },
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["SetList"]);
    this.defaultSets = await this.$store.getters.SetList;
    this.dynamicSets = await this.$helpers.sort(this.sortKey, this.defaultSets).slice(0, this.lazyOffset);
    this.setFilters = Array.from(new Set(this.defaultSets.map(cur => cur.type)));
    this.resultsLength = `${this.defaultSets.length} Results`;
  },
  methods: {
    updateData(data){
      this.dynamicSets = data;
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
