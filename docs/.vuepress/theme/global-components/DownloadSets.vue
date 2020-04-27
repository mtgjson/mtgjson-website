<template lang="pug">
  .download-tables
    .sorting-options(v-if="sets.length !== 0")
      h6.show-options(
        @click="showOptions = !showOptions"
        :class="{'hide-options': !showOptions}") Toggle Options
      .sort-rows(v-if="showOptions")
        .sort-row
          label Filter By:
          select.table-sort-select(
            v-model="filterKey"
            @change="onHandleChange")
            option(value="" selected) All Sets
            option(v-for="(type, key) in filters" :value="type") {{ $helpers.prettifyType(type) }}

        .sort-row
          label Sort By:
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
          label Search By:
          input.table-sort-select(
            placeholder="name, code, etc..."
            type="text"
            v-model="searchKey"
            @input="onHandleChange")

        .sort-row.checkbox
          label(for="spoilers") Include Spoilers:
          input(
            name="spoilers"
            :checked="spoilerKey"
            type="checkbox"
            v-model="spoilerKey"
            @input="onHandleChange")

    p.no-result(v-if="sets.length === 0")
      em {{ message }}
    blockquote.download-item(v-else v-for="(set, key) in sets")
      .download-wrap
        .img-wrap
          div(v-if="set.keyruneCode" :class="`ss ss-${set.keyruneCode.toLowerCase()}`")
          div(v-else-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
          div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
        .text-wrap
          .text-wrap--details
            h3(:id="set.name.replace(/ /g, '_')" :class="{spoiler: $helpers.isFutureDate(set.releaseDate)}") {{ set.name }}
            ol
              li
                small Set Code:
                small &nbsp;{{ set.code }}
              li
                small Type:
                small &nbsp;{{ set.type.replace('_', ' ') }}
              li
                small Release Date:
                small &nbsp;{{ set.releaseDate }}
          .text-wrap--downloads
            ol
              li
                small Downloads:
                span(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key")
                  a.dl-btn(download :href="`${$env}/${downloadDirectory}/${set.code}.json.${format}`") {{ format }}
                span(v-else)
                  a.dl-btn(download :href="`${$env}/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
export default {
  name: 'DownloadSets',
  data() {
    return {
      dynamicSets: [],
      filters: [],
      filterKey: '',
      searchKey: '',
      spoilerKey: true,
      showOptions: false,
      sortKey: 'releaseDate:true',
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: undefined,
      timeout: null,
      message: 'Loading...',
    };
  },
  computed: {
    sets() {
      return this.dynamicSets;
    },
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["sets", "UPDATE_SETS"]);

    this.dynamicSets = this.$helpers.sort('releaseDate:true', this.$store.getters.sets);
    this.filters = Array.from(new Set(this.dynamicSets.map(cur => cur.type)));
    this.downloadDirectory = this.$themeConfig.api;
  },
  methods: {
    handleMessage(length = 0) {
      this.message = `${length} results found...`;
    },
    onHandleChange() {
      // Throttle so we don't go nuts
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const sets = this.$store.getters.sets;
        const removed = !this.spoilerKey ? sets.filter(set => !this.$helpers.isFutureDate(set.releaseDate) ) : sets;
        const searched = this.$helpers.search(this.searchKey, removed);
        const sorted = this.$helpers.sort(this.sortKey, searched);
        const filtered = this.$helpers.filter(this.filterKey, sorted);

        this.handleMessage(filtered.length);
        this.dynamicSets = filtered;
      }, this.$store.getters.throttleSpeed);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/download';
</style>
