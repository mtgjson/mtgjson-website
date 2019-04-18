<template lang="pug">
  .download-tables(v-if="sets")
    .sorting-options
      .sort-row
        div
          strong Sort By:
          select.table-sort-select(@change="sorter($event, sets)")
            option(value="releaseDate:true" selected) Release Date (Newest)
            option(value="releaseDate") Release Date (Oldest)
            option(value="name") Name (Ascending)
            option(value="name:true") Name (Descending)
            option(value="code") Code (Ascending)
            option(value="code:true") Code (Descending)

    .download-table(v-for="(set, key) in sets")
      .download-item
        .download-wrap
          .img-wrap
            div(v-if="set.keyruneCode" :class="`ss ss-${set.keyruneCode.toLowerCase()}`")
            div(v-else-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
            div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
          .txt-wrap
            h3(:id="set.code") {{ set.name }}
            small Set Code: 
              span {{ set.code }}
            small Set Type: 
              span.type {{ set.type }}
            small Release Date: 
              span {{ set.releaseDate }}
          .dl-wrap
            a.cta-btn(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key" :href="`/${downloadDirectory}/${set.code}.json.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
import axios from 'axios';
import sorter from '../../scripts/Sorter';

export default {
  name: 'GenerateSingleSetDownloads',
  data() {
    return {
      defaultSets: null,
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
      sorter: sorter,
    };
  },
  async beforeMount() {
    await axios.get('https://mtgjson.com/json/SetList.json').then( async res => {
      this.defaultSets = await sorter('releaseDate:true', res.data);
    })
  },
  computed: {
    sets() {
      return this.defaultSets;
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';
</style>
