<template lang="pug">
  .download-tables
    .sorting-options
      .sort-row
        strong Filter By:
        select.table-sort-select(
          v-model="filterKey"
          @change="onHandleChange")
          option(value="" selected) All Sets
          option(v-for="(type, key) in filters" :value="type") {{ $helpers.prettifyType(type) }}

      .sort-row
        strong Sort By:
        select.table-sort-select(v-model="sortKey" @change="$helpers.sort(sortKey, sets)")
          option(value="releaseDate:true") Release Date (Newest)
          option(value="releaseDate") Release Date (Oldest)
          option(value="code") Code (Ascending)
          option(value="code:true") Code (Descending)
          option(value="name") Name (Ascending)
          option(value="name:true") Name (Descending)
          option(value="type") Type (Ascending)
          option(value="type:true") Type (Descending)

      .sort-row.search
        strong Search By:
        input.table-sort-select(
          placeholder="name, code, etc..."
          type="text"
          v-model="searchKey"
          @input="onHandleChange")

    p.no-result(v-if="sets.length === 0")
      em {{ message }}
    blockquote.download-item(v-else v-for="(set, key) in sets")
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
      filters: [],
      filterKey: '',
      searchKey: '',
      sortKey: 'releaseDate:true',
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
      timeout: null,
      message: 'Loading...',
    };
  },
  async created() {
    if(this.$store.getters.sets.length < 1){
      await this.$store.dispatch('UPDATE_SETS');
    }

    this.defaultSets = this.$store.getters.sets;
    this.filteredSets = this.$helpers.sort('releaseDate:true', this.defaultSets);
    this.filters = Array.from(new Set(this.filteredSets.map(cur => cur.type)));
  },
  computed: {
    sets() {
      return this.filteredSets;
    },
  },
  methods: {
    handleMessage(length = 0) {
      this.message = `${length} results found...`;
    },
    onHandleChange() {
      // Throttle so we don't go nuts
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const searched = this.$helpers.search(this.searchKey, this.defaultSets);
        const sorted = this.$helpers.sort(this.sortKey, searched);
        const filtered = this.$helpers.filter(this.filterKey, sorted);

        this.handleMessage(filtered.length);
        this.filteredSets = filtered;
      }, 300);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';
</style>
