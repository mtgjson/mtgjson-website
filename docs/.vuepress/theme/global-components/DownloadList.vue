<template lang="pug">
  .download-tables
    .download-table
      DownloadSorter(ref="sorter" :list="defaultList" :filters="listFilters" @updatedata="updateData" @updatecount="updateCount")
      p.results-message {{ resultsLength }}
      blockquote(v-for="(item, key) in list" :key="key")
        .download-wrap
          .img-wrap
            div(v-if="item.keyruneCode" :class="`ss ss-${item.keyruneCode.toLowerCase()}`")
            div(v-else-if="item.code" :class="`ss ss-${item.code.toLowerCase()}`")
          .text-wrap
            .text-wrap--details
              h3(:id="item.name.replace(/ /g, '_')") {{ item.name }}
              ol
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
              ol
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
  props: [ 'file', 'type' ],
  data() {
    return {
      defaultList: [],
      dynamicList: [],
      listFilters: [],
      lazyOffset: 25,
      sortKey: "releaseDate:true",
      resultsLength: 'Loading...'
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
    this.resultsLength = `${this.defaultList.length} Results`;
  },
  methods: {
    updateData(data){
      this.dynamicList = data;
    },
    updateCount(count){
      this.resultsLength = `${count} Results`;
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
