<template lang="pug">
.sorting-options
  p.show-options(
    @click="showOptions = !showOptions",
    :class="{ 'hide-options': !showOptions }"
  ) Toggle Options
  fieldset.sort-rows(v-if="showOptions")
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

    .sort-row.checkbox(v-if="!disableChecks")
      .vue-toggler-plugin.list-toggle
        Toggle(@change="onHandleChange" v-model="spoilerValue")
        p Include Previews

    .sort-row.checkbox(v-if="!disableChecks")
      .vue-toggler-plugin.list-toggle
        Toggle(@change="onHandleChange" v-model="onlineValue")
        p Include Online Only

    .sort-row.reset
      small
        a(@click="onHandleReset") Reset Toggles
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Toggle from '@vueform/toggle';
import { search, filter, sort, prettifyType } from '../helpers';
import type { TList } from '../types';

type Props = {
  list: TList[];
  filters: TList[];
  file?: string;
  type?: string;
  disableChecks?: boolean;
};

const emit = defineEmits(['updateData', 'updateCount', 'canShowButton']);
const props = defineProps<Props>();

const lazyOffset = ref<number>(10);
const lazyToLoad = ref<number>(10);
const filterValue = ref<string>('');
const searchValue = ref<string>('');
const spoilerValue = ref<boolean>(true);
const onlineValue = ref<boolean>(true);
const showOptions = ref<boolean>(false);
const sortKey = ref<string>('releaseDate:true');
const timeout = ref<any>(null);

onMounted((): void => {
  onHandleChange(0);
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

  onHandleChange(0);
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

const onHandleChange = (speed?: number): void => {
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
  margin-bottom: 2rem;

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
