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
        option(v-for="(type, key) in filters", :key="key", :value="type") {{ prettifyType(type) }}

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

<script setup>
import { ref, onMounted, defineProps, defineEmits, defineExpose } from 'vue';
import { search, filter, sort, prettifyType } from '../util';

const emit = defineEmits(['updateData', 'updateCount', 'canShowButton']);
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  filters: {
    type: Array,
    required: true,
  },
  noChecks: {
    type: Boolean,
  },
});

const lazyOffset = ref(10);
const lazyToLoad = ref(10);
const filterKey = ref('');
const searchKey = ref('');
const spoilerKey = ref(true);
const onlineKey = ref(true);
const showOptions = ref(false);
const sortKey = ref('releaseDate:true');
const timeout = ref(null);

onMounted(() => {
  onHandleChange(0);
});

const emitNewData = (data, counts) => {
  emit('updateData', data);
  emit('updateCount', counts);
};

const emitShowMoreButtonView = (showButton) => {
  emit('canShowButton', showButton);
};

const onLoadMore = () => {
  lazyOffset.value = lazyOffset.value + lazyToLoad.value;

  onHandleChange();
};

const onHandleReset = () => {
  sortKey.value = 'releaseDate:true';
  lazyOffset.value = lazyToLoad;
  filterKey.value = '';
  searchKey.value = '';
  spoilerKey.value = true;
  onlineKey.value = true;

  const data = sort(sortKey, props.list);
  const dynamicData = data.slice(0, lazyOffset);
  const newListCount = dynamicData.length;

  emitNewData(dynamicData, [newListCount, data.length]);
};

const onHandleChange = (speed) => {
  // Throttle so we don't go nuts
  clearTimeout(timeout.value);

  timeout.value = window.setTimeout(() => {
    const loadMoreEl = document.querySelector('.load-more-btn');
    const data = props.list;
    // Remove spoilers data
    let filteredData = !spoilerKey.value ? data.filter((set) => !set.isPartialPreview) : data;
    // Removed online data
    filteredData = !onlineKey.value ? filteredData.filter((set) => !set.isOnlineOnly) : filteredData;
    const searched = search(searchKey.value, filteredData);
    const sorted = sort(sortKey.value, searched);
    const filtered = filter(filterKey.value, sorted);
    const dynamicData = filtered.slice(0, lazyOffset.value);
    const newListCount = dynamicData.length;
    const newListTotalCount = filtered.length;

    emitNewData(dynamicData, [newListCount, newListTotalCount]);

    if (lazyOffset >= filtered.length) {
      loadMoreEl && loadMoreEl.classList.add('hide');
      emitShowMoreButtonView(false);
    } else {
      loadMoreEl && loadMoreEl.classList.remove('hide');
      emitShowMoreButtonView(true);
    }
  }, speed || 300);
};

defineExpose({
  onLoadMore,
});
</script>

<style lang="scss" scoped>
.sorting-options {
  position: sticky;
  background-color: var(--bg-color);
  border-radius: var(--common-radius);
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
      content: '';
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
        border-radius: var(--common-radius);
        border: none;
        background-color: var(--gray-1-color);
        color: var(--dark-color);
        margin-left: 10px;
        max-width: 220px;
      }

      input {
        border-radius: var(--common-radius);

        &::placeholder {
          color: var(--dark-color);
        }
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

        input[type='checkbox'] {
          flex: none;
        }
      }
    }
  }
}
</style>
