<template lang="pug">
.download-tables
  .download-table
    DownloadSorter(
      ref="sorter",
      :list="defaultList",
      :filters="listFilters",
      :noChecks="disableChecks",
      @updateData="updateData",
      @updateCount="updateCounts",
      @canShowButton="toggleShowMore"
    )
    div(v-if="resultsTotalLength === 0")
      p.results-message Loading...
    div(v-else)
      p.results-message Showing {{ resultsLength }} of {{ resultsTotalLength }} Results
      blockquote(v-for="(item, key) in list", :key="key")
        .download-wrap
          .img-wrap
            div(
              v-if="item.keyruneCode",
              :class="`ss ss-${item.keyruneCode.toLowerCase()}`"
            )
            div(
              v-else-if="item.code",
              :class="`ss ss-${item.code.toLowerCase()}`"
            )
          .text-wrap
            .text-wrap--details
              h3(:id="item.name.replace(/ /g, '_')") {{ item.name }}
              ol.attributes
                li(v-if="item.isPartialPreview")
                  .spoiler spoiler
                li(v-if="item.isOnlineOnly")
                  .spoiler online only
                li(v-if="item.isPaperOnly")
                  .spoiler paper only
                li(v-if="item.isPaper")
                  .spoiler paper
                li(v-if="item.isOnline")
                  .spoiler online
              ol.details
                li
                  small Code:
                  small &nbsp;{{ item.code }}
                li
                  small Type:
                  small &nbsp;{{ item.type.replace(/_/g, ' ') }}
                li
                  small Release Date:
                  small &nbsp;{{ item.releaseDate }}
            .text-wrap--downloads
              DownloadNativeSelect(
                :fileName="item.fileName ? item.fileName : item.code",
                :fileType="type"
              )
      .load-more-container
        button.load-more-btn.cta-btn(
          v-if="canLoadMore",
          v-show="canLoadMore",
          @click="onLoadMore"
        ) Show More
        button.load-more-btn.cta-btn(v-show="canLoadAll", @click="onLoadAll") Show All
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useStore } from '../store.js';
import DownloadNativeSelect from './DownloadNativeSelect.vue';
import DownloadSorter from './DownloadSorter.vue';
import { sort } from '../util';
import type { IList } from '../@types';

interface Props {
  file: string;
  type?: string;
  disableChecks?: boolean;
}

const store = useStore();
const props = defineProps<Props>();

const lazyOffset: number = 10;
const canLoadMore = ref<boolean>(true);
const canLoadAll = ref<boolean>(true);
const resultsLength = ref<number>(0);
const resultsTotalLength = ref<number>(0);
const sorter = ref<any>(null);
const sortKey = ref<string>('releaseDate:true');
const sortedList = ref<IList[] | any[]>([]);

const defaultList = computed<IList[] | any[]>((): IList[] | any[] => store[props.file]);
const listFilters = computed<IList[] | any[]>((): IList[] | any[] =>
  defaultList.value.map((cur: IList) => cur.type)
);
const list = computed<IList[]>((): IList[] => {
  if (sortedList.value.length > 0) {
    return sortedList.value;
  }

  return sort(sortKey.value, defaultList.value).slice(0, lazyOffset);
});

const updateData = (data: IList[]): void => {
  sortedList.value = data;
};

const updateCounts = (counts: number[]): void => {
  const [currentCount, totalCount] = counts;

  if (currentCount === totalCount) {
    removeButtons();
  }

  resultsLength.value = currentCount;
  resultsTotalLength.value = totalCount;
};

const onLoadMore = (): void => {
  sorter.value.onLoadMore();
};

const onLoadAll = (): void => {
  sortedList.value = defaultList.value;
  resultsLength.value = resultsTotalLength.value;

  removeButtons();
};

const removeButtons = (): void => {
  canLoadMore.value = false;
  canLoadAll.value = false;
};

const toggleShowMore = (canShow: boolean): void => {
  canLoadMore.value = canShow;
};

onMounted(async (): Promise<void> => {
  if (defaultList.value.length === 0) {
    await store.fetchFromApi(props.file);
  }

  resultsTotalLength.value = defaultList.value.length;
  resultsLength.value = lazyOffset;
});
</script>

<style lang="scss" scoped>
@import '../styles/download';
</style>
