<template lang="pug">
.sorting-options
  DataToggler(:callback="onToggleChange" :label="'Show Options'")
  fieldset.sort-rows(v-if="toggleValue")
    .sort-row.search
      label(for="search-input") Search:
      input.table-sort-select(
        name="search-input",
        placeholder="name, code, type, etc...",
        type="text",
        v-model="searchValue",
        @input="onHandleChange"
      )

    .sort-row
      label(for="filter-input") Filter:
      select#filter-input.table-sort-select(
        v-model="filterValue",
        @change="onHandleChange"
      )
        option(value="", selected) All Sets
        option(v-for="(type, key) in filters", :key="key", :value="type") {{ prettifyType(type) }}

    .sort-row
      label(for="sort-input") Sort:
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

    .sort-row.checkbox(v-if="disableChecks !== 'true'")
      input(id="preview-toggle" type="checkbox" @change="onHandleChange" v-model="spoilerValue")
      label(for="preview-toggle") Include Previews

    .sort-row.checkbox(v-if="disableChecks !== 'true'")
      input(id="online-toggle" type="checkbox" @change="onHandleChange" v-model="onlineValue")
      label(for="online-toggle") Include Online Only

    .sort-row.reset
      small
        a(@click="onHandleReset") Reset Toggles
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DataToggler from './DataToggler.vue';
import { search, filter, sort, prettifyType } from '../helpers';
import type { TList } from '../types';

type Props = {
  list: TList[];
  filters: TList[];
  file?: string;
  type?: string;
  disableChecks?: string;
};

const emit = defineEmits(['updateData', 'updateCount', 'canShowButton']);
const props = defineProps<Props>();

const lazyOffset = ref<number>(10);
const lazyToLoad = ref<number>(10);
const filterValue = ref<string>('');
const searchValue = ref<string>('');
const toggleValue = ref<boolean>(false);
const spoilerValue = ref<boolean>(true);
const onlineValue = ref<boolean>(true);
const sortKey = ref<string>('releaseDate:true');
const timeout = ref<any>(null);

onMounted((): void => {
  onHandleChange();
});

const emitNewData = (data: TList[], counts: number[]): void => {
  emit('updateData', data);
  emit('updateCount', counts);
};

const emitShowMoreButtonView = (showButton: boolean): void => {
  emit('canShowButton', showButton);
};

const onLoadMore = (): void => {
  lazyOffset.value = lazyOffset.value + lazyToLoad.value;

  onHandleChange();
};

const onHandleReset = (): void => {
  sortKey.value = 'releaseDate:true';
  lazyOffset.value = lazyToLoad.value;
  filterValue.value = '';
  searchValue.value = '';
  spoilerValue.value = true;
  onlineValue.value = true;

  const data: TList[] = sort(sortKey.value, props.list);
  const dynamicData: TList[] = data.slice(0, lazyOffset.value);
  const newListCount: number = dynamicData.length;

  emitNewData(dynamicData, [newListCount, data.length]);
};

const onToggleChange = (value: boolean): void => {
  toggleValue.value = value;
}

const onHandleChange = (value?: boolean): void => {
  // Throttle so we don't go nuts
  clearTimeout(timeout.value);

  timeout.value = window.setTimeout(() => {
    const loadMoreEl: HTMLElement = document.querySelector('.load-more-btn');
    const data: TList[] = props.list;
    // Remove spoilers data
    let filteredData: TList[] = !spoilerValue.value ? data.filter((set) => !set.isPartialPreview) : data;
    // Removed online data
    filteredData = !onlineValue.value ? filteredData.filter((set) => !set.isOnlineOnly) : filteredData;
    const searched: TList[] = search(searchValue.value, filteredData);
    const sorted: TList[] = sort(sortKey.value, searched);
    const filtered: TList[] = filter(filterValue.value, sorted);
    const dynamicData: TList[] = filtered.slice(0, lazyOffset.value);
    const newListCount: number = dynamicData.length;
    const newListTotalCount: number = filtered.length;

    emitNewData(dynamicData, [newListCount, newListTotalCount]);

    if (lazyOffset.value >= filtered.length) {
      loadMoreEl && loadMoreEl.classList.add('hide');
      emitShowMoreButtonView(false);
    } else {
      loadMoreEl && loadMoreEl.classList.remove('hide');
      emitShowMoreButtonView(true);
    }
  }, 300);
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
  margin-bottom: 2rem;

  .sort-toggle {
    display: block;
    margin-bottom: 0;
    position: relative;
    color: var(--text-color);
    display: flex;

    p {
      font-weight: bold;
      margin-left: 0.5rem;
    }
  }

  .sort-rows {
    margin-top: 1rem;

    .sort-row {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      label {
        font-weight: bold;
        font-size: 1rem;
        flex: none;
      }

      select,
      input {
        flex: 1;
        display: inline;
        padding: 0.5rem;
        border-radius: var(--common-radius);
        border: none;
        background-color: var(--gray-1-color);
        margin-left: 10px;
        max-width: 220px;
      }

      input {
        border-radius: var(--common-radius);

        &::placeholder {
          color: var(--dark-color);
        }

        &[type="checkbox"] {
          margin: 0 0.5rem 0 0;

          & + label {
            margin-bottom: 0;
            font-weight: bold;
            font-size: 0.75rem;
          }
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
      }
    }
  }
}
</style>
