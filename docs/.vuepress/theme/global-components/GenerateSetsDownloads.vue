<template lang="pug">
  .download-tables
    .sorting-options
      .sort-row
        strong Sort By:
        select.table-sort-select(@change="$helpers.sort($event, filtered)")
          option(value="releaseDate:true" selected) Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)
          option(value="type") Type (Ascending)
          option(value="type:true") Type (Descending)

      .sort-row
        strong Filter By:
        select.table-sort-select(@change="setFilter($event)")
          option(value="" selected) All Sets
          option(v-for="(type, key) in filteredGroups" :value="type") {{ $helpers.prettifyType(type) }}

    blockquote.download-item(v-for="(set, key) in filtered")
      .download-wrap
        .img-wrap
          div(v-if="set.keyruneCode" :class="`ss ss-${set.keyruneCode.toLowerCase()}`")
          div(v-else-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
          div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
        .txt-wrap
          h3(:id="set.name.replace(/ /g, '_')" :class="{spoiler: $helpers.isFuture(set.releaseDate)}") {{ set.name }}
          ol
            li
              small Set Code: 
                span {{ set.code }}
            li
              small Type: 
                span.type {{ set.type }}
            li
              small Release Date: 
                span {{ set.releaseDate }}
        ol.dl-wrap
          li
            small Downloads: 
              span(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key")
                a.dl-btn(:href="`/${downloadDirectory}/${set.code}.json.${format}`") {{ format }}
              span(v-else)
                a.dl-btn(:href="`/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
export default {
  name: 'GenerateSetsDownloads',
  data() {
    return {
      defaultSets: [],
      filteredSets: [],
      filteredGroups: [],
      filterKey: '',
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
    };
  },
  computed: {
    filtered() {
      return this.filteredSets;
    }
  },
  mounted() {
    this.defaultSets = this.$sets;
    this.filteredGroups = Array.from(new Set(this.defaultSets.map(cur => cur.type)));
    this.setFilter(this.filterKey);
  },
  methods: {
    setFilter({currentTarget}) {
      this.filterKey = currentTarget ? currentTarget.value : '';
      this.filteredSets = this.$helpers.filter(this.filterKey, this.defaultSets);
    }
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';
</style>
