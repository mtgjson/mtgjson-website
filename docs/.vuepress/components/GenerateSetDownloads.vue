<template lang="pug">
  .download-tables
    .sorting-options
      .sort-row
        div
          strong Sort By:
          select.table-sort-select(@change="sorter($event, list)")
            option(value="releaseDate:true" selected) Release Date (Newest)
            option(value="releaseDate") Release Date (Oldest)
            option(value="name") Name (Ascending)
            option(value="name:true") Name (Descending)
            option(value="code") Code (Ascending)
            option(value="code:true") Code (Descending)

    .download-table(v-for="(set, key) in list")
      .download-item
        .download-wrap
          .img-wrap
            div(v-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
            div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
          .txt-wrap
            h3(:id="set.code") {{ set.name }}
              //- a(:href="'#' + set.code" aria-hidden="true" class="header-anchor") #
            small Set Code: 
              span {{ set.code }}
            small Release Date: 
              span {{ set.releaseDate }}
          .dl-wrap
            a.cta-btn(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key" :href="`/${downloadDirectory}/${set.code}.json.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
import Sorter from '../modules/Sorter';

export default {
  name: 'GenerateSingleSetDownloads',
  data() {
    return {
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
      defaultList: require(`../public/json/SetList.json`),
      sorter: Sorter
    };
  },
  mounted() {
    this.defaultList = this.sorter('releaseDate:true', this.list);
  },
  computed: {
    list() {
      return this.defaultList;
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';

</style>
