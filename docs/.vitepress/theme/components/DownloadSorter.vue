<template lang="pug">
.sorting-options
  details
    summary Toggle Filters
    fieldset.sort-rows
      .sort-rows-grid
        .sort-row.grid-item.search
          label(for="search-input") Search
          input.table-sort-select(
            name="search-input",
            placeholder="name, type, code or date",
            type="text",
            v-model="searchValue",
            @input="onHandleChange"
          )

        .sort-row.grid-item
          label(for="filter-input") Filter
          select#filter-input.table-sort-select(
            v-model="filterValue",
            @change="onHandleChange"
          )
            option(value="", selected) All Sets
            option(
              v-for="(filter, key) of filters",
              :key="key",
              :value="filter"
            ) {{ formatType(filter) }}

        .sort-row.grid-item
          label(for="sort-input") Sort
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

      .sort-rows-grid
        .sort-row.grid-item
          .sort-row.checkbox(v-if="disableChecks !== 'true'")
            input(
              id="partial-toggle",
              type="checkbox",
              @change="onHandleChange",
              v-model="partialValue"
            )
            label(for="partial-toggle") Include Partial Data

          .sort-row.checkbox(v-if="disableChecks !== 'true'")
            input(
              id="online-toggle",
              type="checkbox",
              @change="onHandleChange",
              v-model="onlineValue"
            )
            label(for="online-toggle") Include Digital Only

          .sort-row.checkbox(v-if="disableChecks !== 'true'")
            input(
              id="paper-toggle",
              type="checkbox",
              @change="onHandleChange",
              v-model="paperValue"
            )
            label(for="paper-toggle") Include Paper Only

        .sort-row.grid-item
          .sort-row.checkbox(v-if="disableChecks !== 'true'")
            input(
              id="foil-toggle",
              type="checkbox",
              @change="onHandleChange",
              v-model="foilValue"
            )
            label(for="foil-toggle") Include Foiled Only

          .sort-row.checkbox(v-if="disableChecks !== 'true'")
            input(
              id="non-foil-toggle",
              type="checkbox",
              @change="onHandleChange",
              v-model="nonFoilValue"
            )
            label(for="non-foil-toggle") Include Non-Foiled Only

          .sort-row.checkbox(v-if="disableChecks !== 'true'")
            input(
              id="foreign-toggle",
              type="checkbox",
              @change="onHandleChange",
              v-model="foreignValue"
            )
            label(for="foreign-toggle") Include Foreign Only

      .sort-row.reset
        small
          a(@click="onHandleReset") Reset Toggles
  </template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dataSearch, dataFilter, dataSort, formatType } from '../helpers';
import type { TList } from '../types';

type Props = {
  list: TList[];
  filters: string[];
  file?: string;
  type?: string;
  disableChecks?: string;
};

const props: Props = defineProps<Props>();
const emit = defineEmits(['updateData', 'updateCount', 'canShowButton', 'canShowAllButton']);

const lazyOffset = ref<number>(25);
const lazyToLoad = ref<number>(25);
const filterValue = ref<string>('');
const searchValue = ref<string>('');
const partialValue = ref<boolean>(true);
const onlineValue = ref<boolean>(true);
const paperValue = ref<boolean>(true);
const foilValue = ref<boolean>(true);
const nonFoilValue = ref<boolean>(true);
const foreignValue = ref<boolean>(true);
const sortKey = ref<string>('releaseDate:true');
const timeout = ref<any>(null);

onMounted((): void => {
  onHandleChange(null);
});

const emitNewData = (data: TList[], counts: number[]): void => {
  emit('updateData', data);
  emit('updateCount', counts);
};

const emitShowButtonsView = (showButton: boolean): void => {
  emit('canShowButton', showButton);
  emit('canShowAllButton', showButton);
};

const onLoadMore = (loadAll?: boolean): void => {
  lazyOffset.value = lazyOffset.value + lazyToLoad.value;

  onHandleChange(null, loadAll);
};

const onHandleReset = (): void => {
  sortKey.value = 'releaseDate:true';
  lazyOffset.value = lazyToLoad.value;
  filterValue.value = '';
  searchValue.value = '';
  partialValue.value = true;
  onlineValue.value = true;
  paperValue.value = true;
  foilValue.value = true;
  nonFoilValue.value = true;
  foreignValue.value = true;

  const data: TList[] = dataSort(sortKey.value, props.list);
  const dynamicData: TList[] = data.slice(0, lazyOffset.value);
  const newListCount: number = dynamicData.length;

  emitNewData(dynamicData, [newListCount, data.length]);
  emitShowButtonsView(true);
};

const onHandleChange = (_: any, loadAll?: boolean): void => {
  // Throttle so we don't go nuts
  clearTimeout(timeout.value);

  timeout.value = window.setTimeout(() => {
    const loadMoreEl: HTMLElement = document.querySelector('.load-more-btn');
    const data: TList[] = props.list;
    // Remove preview data
    let filteredData: TList[] = !partialValue.value ? data.filter((set) => !set.isPartialPreview) : data;
    // Remove online data
    filteredData = !onlineValue.value ? filteredData.filter((set) => !set.isOnlineOnly) : filteredData;
    // Remove paper data
    filteredData = !paperValue.value ? filteredData.filter((set) => !set.isPaperOnly) : filteredData;
    // Remove foil data
    filteredData = !foilValue.value ? filteredData.filter((set) => !set.isFoilOnly) : filteredData;
    // Remove non-foil data
    filteredData = !nonFoilValue.value ? filteredData.filter((set) => !set.isNonFoilOnly) : filteredData;
    // Remove foreign data
    filteredData = !foreignValue.value ? filteredData.filter((set) => !set.isForeignOnly) : filteredData;

    const searched: TList[] = dataSearch(searchValue.value, filteredData);
    const sorted: TList[] = dataSort(sortKey.value, searched);
    const filtered: TList[] = dataFilter(filterValue.value, sorted);
    const dynamicData: TList[] = loadAll ? filtered : filtered.slice(0, lazyOffset.value);
    const newListCount: number = dynamicData.length;
    const newListTotalCount: number = filtered.length;

    emitNewData(dynamicData, [newListCount, newListTotalCount]);

    if (loadAll || lazyOffset.value >= filtered.length) {
      loadMoreEl && loadMoreEl.classList.add('hide');
      emitShowButtonsView(false);
    } else {
      loadMoreEl && loadMoreEl.classList.remove('hide');
      emitShowButtonsView(true);
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
  background-color: var(--vp-c-bg-alt);
  border-radius: var(--common-radius);
  top: calc(1rem + var(--vp-nav-height));
  z-index: 9;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 0 1rem 0.5rem var(--sort-box-shadow-color);
  margin-bottom: 1rem;

  details {
    summary {
      margin: 0;
      font-size: 14px;
      font-weight: 700;
      color: var(--vp-c-text-1);
      cursor: pointer;
    }
  }

  .sort-rows {
    margin-top: 1rem;
    border: 0;

    .sort-row {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      label {
        font-weight: 600;
        font-size: 14px;
        flex: none;
      }

      select,
      input {
        flex: 1;
        display: inline;
        padding: 0.25rem 0.5rem;
        height: 40px;
        border-radius: var(--common-radius);
        border: 1px solid var(--select-border-color);
        background-color: var(--select-bg-color);
        margin-left: 10px;
        color: var(--vp-c-text-1);
      }

      select {
        appearance: button;
        cursor: pointer;
      }

      input {
        border-radius: var(--common-radius);
        border-color: var(--input-border-color);

        &::placeholder {
          color: var(--vp-c-text-1);
        }

        &[type='checkbox'] {
          margin: 0 0.5rem 0 0;
          height: initial;

          &+label {
            padding: 0.25rem 0;
            margin-bottom: 0;
            font-weight: 600;
            font-size: 12px;
          }
        }
      }

      &.search {
        input {
          padding-left: 0.75rem;
        }
      }

      &.checkbox {
        margin-bottom: 0;

        label {
          cursor: pointer;
        }

        input {
          flex: none;
        }
      }

      &.reset {
        margin-top: 0.5rem;
        cursor: pointer;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &-grid {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 0.75rem;

      .sort-row {
        &.grid-item {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 0;

          label {
            margin-bottom: 0.25rem;
          }

          label,
          select,
          input {
            flex: 0 0 100%;
            margin-left: 0;
          }
        }

        &.checkbox {
          flex: 0 0 100%;

          label,
          input,
          select {
            flex: none;
          }
        }
      }
    }
  }
}

@media (max-width: 569px) {
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
          display: block;
          flex: 1;
        }
      }

      .sort-row.search {
        label {
          flex: 0 0 100%;
        }
      }

      .sort-row.checkbox {
        input {
          flex: 0;
          margin-top: 0;
          margin-right: 0.5rem;
        }
      }

      &-grid {
        grid-template-columns: 1fr;
        grid-gap: 0;

        .sort-row {
          &.grid-item {

            input,
            select {
              max-width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
