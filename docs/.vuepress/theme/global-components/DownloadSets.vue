<template lang="pug">
  .download-tables
    .sorting-options
      .sort-row.search
        strong Search By:
        input.table-sort-select(
          placeholder="name, code, etc..."
          type="text"
          v-model="searchKey"
          @input="handleSearch")

      .sort-row
        strong Filter By:
        select.table-sort-select(@change="handleFilter($event)")
          option(value="" selected) All Sets
          option(v-for="(type, key) in filteredGroups" :value="type") {{ $helpers.prettifyType(type) }}

      .sort-row
        strong Sort By:
        select.table-sort-select(v-model="sortKey" @change="$helpers.sort(sortKey, filtered)")
          option(value="releaseDate:true") Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)
          option(value="type") Type (Ascending)
          option(value="type:true") Type (Descending)

    blockquote.download-item(v-for="(set, key) in filtered")
      .download-wrap
        .img-wrap
          div(v-if="set.keyruneCode" :class="`ss ss-${set.keyruneCode.toLowerCase()}`")
          div(v-else-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
          div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
        .txt-wrap
          h3(:id="set.name.replace(/ /g, '_')" :class="{spoiler: $helpers.isFutureDate(set.releaseDate)}") {{ set.name }}
          ol
            li
              small Set Code:&nbsp;{{ set.code }}
            li
              small Type:&nbsp;{{ set.type }}
            li
              small Release Date:&nbsp;{{ set.releaseDate }}
        ol.dl-wrap
          li
            small Downloads:
            span(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key")
              a.dl-btn(:href="`${$env}/${downloadDirectory}/${set.code}.json.${format}`") {{ format }}
            span(v-else)
              a.dl-btn(:href="`${$env}/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
export default {
  name: 'SetsDownloads',
  data() {
    return {
      defaultSets: [],
      filteredSets: [],
      filteredGroups: [],
      filterKey: '',
      searchKey: '',
      sortKey: 'releaseDate:true',
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
      timeout: null,
    };
  },
  computed: {
    filtered() {
      return this.filteredSets;
    },
  },
  mounted() {
    this.defaultSets = this.$sets;
    this.filteredGroups = Array.from(new Set(this.defaultSets.map(cur => cur.type)));
    this.handleFilter(this.filterKey);
  },
  methods: {
    handleFilter({ currentTarget }) {
      this.filterKey = currentTarget ? currentTarget.value : '';
      const filtered = this.$helpers.filter(this.filterKey, this.defaultSets);
      const sorted = this.$helpers.sort(this.sortKey, filtered);

      this.filteredSets = sorted;
    },
    handleSearch() {
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const searched = this.$helpers.searchFilter(this.searchKey, this.defaultSets);
        const filtered = this.$helpers.filter(this.filterKey, searched);
        const sorted = this.$helpers.sort(this.sortKey, filtered);

        this.filteredSets = sorted;
      }, 300);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';
</style>
