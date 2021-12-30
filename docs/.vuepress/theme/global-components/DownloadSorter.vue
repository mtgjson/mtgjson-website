<template lang="pug">
.sorting-options
  p.show-options(
    @click="showOptions = !showOptions",
    :class="{ 'hide-options': !showOptions }"
  ) Toggle Options
  fieldset.sort-rows(v-if="showOptions")
    .sort-row.search
      label(for="search-input") Search By:
      input.table-sort-select(
        name="search-input",
        placeholder="name, code, type, etc...",
        type="text",
        v-model="searchKey",
        @input="onHandleChange"
      )

    .sort-row
      label(for="filter-input") Filter By:
      select#filter-input.table-sort-select(
        v-model="filterKey",
        @change="onHandleChange"
      )
        option(value="", selected) All Sets
        option(v-for="(type, key) in filters", :key="key", :value="type") {{ $helpers.prettifyType(type) }}

    .sort-row
      label(for="sort-input") Sort By:
      select#sort-input.table-sort-select(
        v-model="sortKey",
        @input="onHandleChange"
      )
        option(value="releaseDate:true") Release Date (Newest)
        option(value="releaseDate") Release Date (Oldest)
        option(value="code") Code (Ascending)
        option(value="code:true") Code (Descending)
        option(value="name") Name (Ascending)
        option(value="name:true") Name (Descending)
        option(value="type") Type (Ascending)
        option(value="type:true") Type (Descending)

    .sort-row.checkbox(v-if="!noChecks")
      label(for="spoiler-input") Include Spoilers:
      input#spoiler-input(
        type="checkbox",
        :checked="spoilerKey",
        v-model="spoilerKey",
        @input="onHandleChange"
      )

    .sort-row.checkbox(v-if="!noChecks")
      label(for="online-input") Include Online Only:
      input#online-input(
        type="checkbox",
        :checked="onlineKey",
        v-model="onlineKey",
        @input="onHandleChange"
      )

    .sort-row.reset
      small
        a(@click="onHandleReset") Reset Toggles
</template>

<script>
export default {
  name: "DownloadSorter",
  props: {
    list: {
      required: true,
      type: Array,
    },
    filters: {
      required: true,
      type: Array,
    },
    noChecks: {
      type: Boolean,
    },
  },
  data() {
    return {
      lazyOffset: this.$lazyOffset,
      lazyToLoad: this.$lazyOffset,
      filterKey: "",
      searchKey: "",
      spoilerKey: true,
      onlineKey: true,
      showOptions: false,
      sortKey: "releaseDate:true",
      timeout: null,
    };
  },
  methods: {
    emitNewData(data, count) {
      this.$emit("updatedata", data);
      this.$emit("updatecount", count);
    },
    onLoadMore() {
      this.lazyOffset = this.lazyOffset + this.lazyToLoad;

      this.onHandleChange();
    },
    onHandleReset() {
      this.sortKey = "releaseDate:true";
      this.lazyOffset = this.lazyToLoad;
      this.filterKey = "";
      this.searchKey = "";
      this.spoilerKey = true;
      this.onlineKey = true;

      const data = this.$helpers.sort(this.sortKey, this._props.list);
      const dynamicData = data.slice(0, this.lazyOffset);
      const newListCount = dynamicData.length;

      this.emitNewData(dynamicData, newListCount);
    },
    onHandleChange() {
      // Throttle so we don't go nuts
      clearTimeout(this.timeout);

      this.timeout = window.setTimeout(() => {
        const data = this._props.list;
        // Remove spoilers data
        let filteredData = !this.spoilerKey
          ? data.filter((set) => !set.isPartialPreview)
          : data;
        // Removed online data
        filteredData = !this.onlineKey
          ? filteredData.filter((set) => !set.isOnlineOnly)
          : filteredData;
        const searched = this.$helpers.search(this.searchKey, filteredData);
        const sorted = this.$helpers.sort(this.sortKey, searched);
        const filtered = this.$helpers.filter(this.filterKey, sorted);
        const dynamicData = filtered.slice(0, this.lazyOffset);
        const newListCount = dynamicData.length;

        this.emitNewData(dynamicData, newListCount);

        if (this.lazyOffset >= filtered.length) {
          document.querySelector(".load-more-btn").classList.add("hide");
        } else {
          document.querySelector(".load-more-btn").classList.remove("hide");
        }
      }, this.$throttleSpeed);
    },
  },
};
</script>

<style lang="scss" scoped>
.sorting-options {
  position: sticky;
  background-color: var(--bg-color);
  border-radius: 5px;
  top: 0;
  z-index: 9;
  padding: 1rem;
  border: 1px solid var(--accent-color);
  margin-bottom: 1rem;

  .show-options {
    display: block;
    padding: 0 0 1.5rem 1.25rem;
    margin-bottom: 0;
    position: relative;
    color: var(--accent-color);
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;

    &::before {
      left: 0;
      top: 10px;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border: solid transparent;
      border-top-color: var(--accent-color);
      border-width: 5px;
    }

    &.hide-options {
      padding-bottom: 0;

      &::before {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid var(--accent-color);
        left: 2px;
        top: 7px;
      }
    }
  }

  .sort-rows {
    .sort-row {
      margin-bottom: 10px;
      display: flex;
      align-items: center;

      label {
        font-weight: bold;
        font-size: 14px;
        flex: none;
      }

      select,
      input {
        flex: 1;
        display: inline;
        font-size: 14px;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background-color: var(--gray-1-color);
        margin-left: 10px;
        max-width: 220px;
      }

      input {
        border-radius: 5px;
      }

      &.search {
        input {
          padding-left: 0.75rem;
        }
      }

      &.checkbox {
        label {
          cursor: pointer;
        }

        input {
          flex: none;
        }
      }

      &.reset {
        cursor: pointer;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 571px) {
  .sorting-options {
    .sort-rows {
      .sort-row,
      .sort-row.search,
      .sort-row.checkbox {
        margin-right: 0;
        display: flex;
        align-items: center;

        label {
          flex: none;
          margin-right: 1rem;
        }

        select,
        input {
          margin: 5px 0 0 0;
          display: block;
          flex: 1;
          max-width: 100%;
        }

        .search {
          input {
            width: 100%;
          }
        }

        input[type="checkbox"] {
          flex: none;
        }
      }
    }
  }
}
</style>
