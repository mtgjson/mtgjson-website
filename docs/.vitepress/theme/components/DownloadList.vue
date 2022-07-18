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
    p.results-message Showing {{ resultsLength }} of {{ resultsTotalLength }} Results
    blockquote(v-if="list.length > 0", v-for="(item, key) in list", :key="key")
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

<script setup>
import { computed, ref, onMounted, defineProps } from "vue";
import { useStore } from "vuex";

import DownloadNativeSelect from "./DownloadNativeSelect.vue";
import DownloadSorter from "./DownloadSorter.vue";

import sort from "../scripts/sort";

const store = useStore();

const props = defineProps({
  file: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "",
  },
  disableChecks: {
    type: Boolean,
  },
});

const lazyOffset = 10;
const canLoadMore = ref(true);
const canLoadAll = ref(true);
const resultsLength = ref(0);
const resultsTotalLength = ref(0);
const sorter = ref(null);
const sortKey = ref("releaseDate:true");
const sortedList = ref([]);

const defaultList = computed(() => store.state[props.file]);
const dynamicList = computed(() => {
  if (sortedList.value.length > 0) {
    return sortedList.value;
  }

  return sort(sortKey.value, defaultList.value).slice(0, lazyOffset);
});
const listFilters = computed(() =>
  Array.from(new Set(defaultList.value.map((cur) => cur.type)))
);
const list = computed(() => dynamicList.value);

onMounted(() => {
  store.dispatch("FETCH_DATA", props.file);
  resultsTotalLength.value = defaultList.value.length;
  resultsLength.value = lazyOffset;
});

const updateData = (data) => {
  sortedList.value = data;
};

const updateCounts = (counts) => {
  const [currentCount, totalCount] = counts;

  if (currentCount === totalCount) {
    removeButtons();
  }

  resultsLength.value = currentCount;
  resultsTotalLength.value = totalCount;
};

const onLoadMore = () => {
  sorter.value.onLoadMore();
};

const onLoadAll = () => {
  sortedList.value = defaultList.value;
  removeButtons();
};

const removeButtons = () => {
  canLoadMore.value = false;
  canLoadAll.value = false;
};

const toggleShowMore = (canShow) => {
  canLoadMore.value = canShow;
};
</script>

<style lang="scss" scoped>
@import "../styles/download";
</style>
