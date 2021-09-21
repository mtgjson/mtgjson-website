<template lang="pug">
  .download-tables
    .download-table
      DownloadSorter(ref="sorter" :list="defaultList" :filters="listFilters" :noChecks="disableChecks" @updatedata="updateData" @updatecount="updateCount")
      p.results-message Showing {{resultsLength}} of {{ resultsTotalLength }} Results
      blockquote(v-for="(item, key) in list" :key="key")
        .download-wrap
          .img-wrap
            div(v-if="item.keyruneCode" :class="`ss ss-${item.keyruneCode.toLowerCase()}`")
            div(v-else-if="item.code" :class="`ss ss-${item.code.toLowerCase()}`")
          .text-wrap
            .text-wrap--details
              h3(:id="item.name.replace(/ /g, '_')") {{ item.name }}
              ol.attributes
                li(v-if="item.isPartialPreview")
                  div.spoiler spoiler
                li(v-if="item.isOnlineOnly")
                  div.spoiler online only
                li(v-if="item.isPaperOnly")
                  div.spoiler paper only
                li(v-if="item.isPaper")
                  div.spoiler paper
                li(v-if="item.isOnline")
                  div.spoiler online
              ol.details
                li
                  small Code:
                  small &nbsp;{{ item.code }}
                li
                  small Type:
                  small &nbsp;{{ item.type.replace(/_/g, ' ') }}
                li
                  small Release Date:
                  small &nbsp;{{ item.releaseDate }}
            .text-wrap--downloads
              DownloadField(:fileName="item.fileName ? item.fileName : item.code" :fileType="type")
      button.load-more-btn.cta-btn(@click="onLoadMore") Load More
</template>

<script>
import DownloadField from "./DownloadField";
import DownloadSorter from "./DownloadSorter";
export default {
  name: "DownloadList",
  components: { DownloadField, DownloadSorter },
  props: [ 'file', 'type', 'disableChecks' ],
  data() {
    return {
      defaultList: [],
      dynamicList: [],
      listFilters: [],
      lazyOffset: this.$lazyOffset,
      resultsLength: 0,
      resultsTotalLength: 0,
      sortKey: "releaseDate:true"
    };
  },
  computed: {
    list() {
      return this.dynamicList;
    }
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, [this._props.file]);
    this.defaultList = await this.$store.getters[this._props.file];
    this.dynamicList = await this.$helpers.sort(this.sortKey, this.defaultList).slice(0, this.lazyOffset);
    this.listFilters = Array.from(new Set(this.defaultList.map(cur => cur.type)));
    this.resultsTotalLength = this.defaultList.length;
    this.resultsLength = this.list.length;
  },
  methods: {
    updateData(data){
      this.dynamicList = data;
    },
    updateCount(count){
      this.resultsLength = count;
    },
    onLoadMore(){
      this.$refs.sorter.onLoadMore();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/download";
</style>
