<template lang="pug">
  .download-tables(v-if="sets")
    .sorting-options
      .sort-row
        strong Sort By:
        select.table-sort-select(@change="$sorter($event, sets)")
          option(value="releaseDate:true" selected) Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)
          option(value="type") Type (Ascending)
          option(value="type:true") Type (Descending)

    .download-table(v-for="(set, key) in sets")
      .download-item
        .download-wrap
          .img-wrap
            div(v-if="set.keyruneCode" :class="`ss ss-${set.keyruneCode.toLowerCase()}`")
            div(v-else-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
            div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
          .txt-wrap
            h3(:id="set.name.replace(/ /g, '_')") {{ set.name }}
              a(:href="`#${set.name.replace(/ /g, '_')}`" aria-hidden="true" class="header-anchor") #
            small Code: 
              span {{ set.code }}
            small Type: 
              span.type {{ set.type }}
            small Release Date: 
              span {{ set.releaseDate }}
          .dl-wrap
            a.cta-btn(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key" :href="`/${downloadDirectory}/${set.code}.json.${format}`") {{ format }}
            a.cta-btn(v-else :href="`/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
export default {
  name: 'GenerateSetsDownloads',
  data() {
    return {
      defaultSets: null,
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
    };
  },
  mounted() {
    this.defaultSets = this.$sets;
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
