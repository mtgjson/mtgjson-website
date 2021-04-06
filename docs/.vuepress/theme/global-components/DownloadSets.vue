<template lang="pug">
  .download-tables
    .download-table(v-if="!sets")
      .loader
    .download-table(v-else)
      .sorting-options
        p.show-options(
          @click="showOptions = !showOptions"
          :class="{'hide-options': !showOptions}") Toggle Options
        fieldset.sort-rows(v-if="showOptions")
          .sort-row.search
            label(for="search-input") Search By:
            input.table-sort-select(
              name="search-input"
              placeholder="name, code, etc..."
              type="text"
              v-model="searchKey"
              @input="onHandleChange")

          .sort-row
            label(for="filter-input") Filter By:
            select.table-sort-select(
              id="filter-input"
              v-model="filterKey"
              @change="onHandleChange")
              option(value="" selected) All Sets
              option(v-for="(type, key) in filters" :key="key" :value="type") {{ $helpers.prettifyType(type) }}

          .sort-row
            label(for="sort-input") Sort By:
            select.table-sort-select(
              id="sort-input"
              v-model="sortKey"
              @change="$helpers.sort(sortKey, sets)")
              option(value="releaseDate:true") Release Date (Newest)
              option(value="releaseDate") Release Date (Oldest)
              option(value="code") Code (Ascending)
              option(value="code:true") Code (Descending)
              option(value="name") Name (Ascending)
              option(value="name:true") Name (Descending)
              option(value="type") Type (Ascending)
              option(value="type:true") Type (Descending)

          .sort-row.checkbox
            label(for="spoiler-input") Include Spoilers:
            input(
              id="spoiler-input"
              type="checkbox"
              :checked="spoilerKey"
              v-model="spoilerKey"
              @input="onHandleChange")

      strong(v-if="sets.length < 1") {{ message }}
      strong(v-else) {{ sets.length }} results found...
      blockquote(v-for="(set, key) in sets" :key="key")
        .download-wrap
          .img-wrap
            div(v-if="set.keyruneCode" :class="`ss ss-${set.keyruneCode.toLowerCase()}`")
            div(v-else-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
            div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
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
                  small Set Code:
                  small &nbsp;{{ set.code }}
                li
                  small Type:
                  small &nbsp;{{ set.type.replace(/_/g, ' ') }}
                li
                  small Release Date:
                  small &nbsp;{{ set.releaseDate }}
            .text-wrap--downloads
              DownloadField(:fileName="set.code")
</template>

<script>
import DownloadField from "./DownloadField";
export default {
  name: "DownloadSets",
  components: { DownloadField },
  data() {
    return {
      defaultSets: null,
      dynamicSets: null,
      filters: null,
      filterKey: "",
      searchKey: "",
      spoilerKey: true,
      showOptions: true,
      sortKey: "releaseDate:true",
      timeout: null,
      message: "Loading..."
    };
  },
  computed: {
    sets() {
      return this.dynamicSets;
    }
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["SetList"]);

    this.defaultSets = await this.$store.getters.SetList;
    this.dynamicSets = await this.$helpers.sort("releaseDate:true", this.defaultSets);
    this.filters = Array.from(new Set(this.dynamicSets.map(cur => cur.type)));
  },
  methods: {
    handleMessage(length = 0) {
      this.message = `${length} results found...`;
    },
    onHandleChange() {
      // Throttle so we don't go nuts
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const sets = this.defaultSets;
        const removed = !this.spoilerKey
          ? sets.filter(set => !set.isPartialPreview)
          : sets;
        const searched = this.$helpers.search(this.searchKey, removed);
        const sorted = this.$helpers.sort(this.sortKey, searched);
        const filtered = this.$helpers.filter(this.filterKey, sorted);

        this.handleMessage(filtered.length);
        this.dynamicSets = filtered;
      }, this.$throttleSpeed);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/download";
</style>
