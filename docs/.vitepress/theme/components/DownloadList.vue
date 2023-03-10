<template lang="pug">
.download-list
  DownloadSorter(
    ref="sorter",
    :list="defaultList",
    :filters="listFilters",
    :disableChecks="disableChecks",
    @updateData="updateData",
    @updateCount="updateCounts",
    @canShowButton="toggleShowMore",
    @canShowAllButton="toggleShowAll"
  )
  div(v-if="resultsTotalLength === 0")
    p.results-message Loading...
  div(v-else)
    p.results-message Showing {{ resultsLength }} of {{ resultsTotalLength }} Results
    blockquote(v-for="(item, key) in list", :key="key")
      .download-wrap
        .text-wrap
          .text-wrap--details
            .text-wrap--details-img
              div(
                v-if="item.keyruneCode",
                :class="`ss ss-${item.keyruneCode.toLowerCase()}`"
              )
              div(
                v-else-if="item.code",
                :class="`ss ss-${item.code.toLowerCase()}`"
              )
            h3 {{ item.name }}
            ol.tags
              Badge(
                v-if="item.isPartialPreview",
                type="warning",
                text="preview"
              )
              Badge(
                v-if="item.isOnlineOnly",
                type="warning",
                text="online only"
              )
              Badge(
                v-if="item.isPaperOnly",
                type="warning",
                text="paper only"
              )
            ol.details
              li
                small Type:
                small &nbsp;{{ item.type.replace(/_/g, ' ') }}
              li
                small Code:
                small &nbsp;{{ item.code }}
              li
                small Release Date:
                small &nbsp;{{ item.releaseDate }}
          .text-wrap--downloads
            DownloadNativeSelect(
              :fileName="item.fileName ? item.fileName : item.code",
              :fileType="type"
            )
    .load-more-container
      button.load-more-btn.cta-btn(v-if="canLoadMore" @click="onLoadMore") Show More
      button.load-more-btn.cta-btn(v-if="canLoadAll" @click="onLoadAll") Show All
  </template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useStore } from '../store';
import DownloadNativeSelect from './DownloadNativeSelect.vue';
import DownloadSorter from './DownloadSorter.vue';
import { dataSort } from '../helpers';
import type { TList } from '../types';

  type Props = {
    file: string;
    type?: string;
    disableChecks?: string;
  };

const store = useStore();
const props: Props = defineProps<Props>();

const lazyOffset: number = 25;

const canLoadMore = ref<boolean>(true);
const canLoadAll = ref<boolean>(true);
const resultsLength = ref<number>(0);
const resultsTotalLength = ref<number>(0);
const sorter = ref<any>(null);
const sortKey = ref<string>('releaseDate:true');
const sortedList = ref<TList[]>([]);

const defaultList = computed<TList[]>((): TList[] => store[props.file]);
const listFilters = computed<string[]>((): string[] =>
  Array.from(new Set(defaultList.value.map((cur: TList) => cur.type)))
);
const list = computed<TList[]>((): TList[] => {
  if (sortedList.value.length > 0) {
    return sortedList.value;
  }

  return dataSort(sortKey.value, defaultList.value).slice(0, lazyOffset);
});

const updateData = (data: TList[]): void => {
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

  sorter.value.onLoadMore(true);
};

const removeButtons = (): void => {
  canLoadMore.value = false;
  canLoadAll.value = false;
};

const toggleShowMore = (canShow: boolean): void => {
  canLoadMore.value = canShow;
};

const toggleShowAll = (canShow: boolean): void => {
  canLoadAll.value = canShow;
}

onMounted((): void => {
  resultsTotalLength.value = defaultList.value.length;
  resultsLength.value = lazyOffset;
});
</script>

  <style lang="scss" scoped>
  @import '../styles/placeholders';
  .download-list {
    position: relative;

    .load-more-container {
      display: flex;

      .load-more-btn {
        margin-top: 1rem;
        display: block;
        flex: 1;
      }
    }

    .results-message {
      line-height: 1rem;
      font-size: 14px;
      font-weight: 600;
      display: inline-block;

      &.error {
        color: var(--red-color);
      }
    }

    .download-wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .img-wrap {
        flex: none;

        div {
          margin-right: 2rem;
          margin-bottom: 1rem;
          position: relative;
          height: 3rem;
          width: 3rem;
          color: var(--vp-c-text);

          &::before {
            position: absolute;
            text-align: center;
            line-height: 1em;
            font-size: 50px;
            width: 100%;
            height: 100%;
          }
        }
      }

      .text-wrap {
        flex: 1;
        padding-bottom: 0.75rem;

        &--details {
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          &-img {
            .ss {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }

        h3 {
          margin-top: 0;
          line-height: 1.25rem;
          flex: none;
        }

        p {
          display: block;
          margin: 0;
        }

        ol {
          padding: 0;
          margin: 0;

          &.tags,
          &.details {
            margin-top: 0.5rem;

            li {
              small {
                color: var(--vp-c-text-2);

                &:first-of-type {
                  color: var(--vp-c-text-1);
                }
              }
            }
          }

          &.tags {
            margin-top: 0;
            flex: none;

            & > * {
              margin-left: 0.5rem;
            }
          }

          &.details {
            flex: 0 0 100%;
          }

          li {
            margin: 0;
            list-style: none;
            display: inline-block;
            margin-right: 1rem;
          }

          &:not(:only-of-type):first-of-type {
            li {
              margin-right: 0;
            }
          }
        }

        small {
          display: inline-block;
          text-transform: capitalize;

          &:first-of-type {
            font-weight: 600;
          }
        }

        &--download--btn-wrap {
          display: block !important;
        }

        &--details {
          position: relative;

          &-img {
            float: left;
            margin-right: 0.5rem;
            color: var(--vp-c-text-1);

            .ss {
              font-size: 1.5rem;
              line-height: 1.5rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 799px) {
    .download-list {
      .download-wrap {
        .text-wrap {
          ol {
            &.tags {
              flex: 0 0 100%;

              & > * {
                margin-top: 0.75rem;
                margin-left: 0;
                margin-right: 0.5rem;
              }
            }
          }
        }
      }
    }

  }

  @media (max-width: 569px) {
    .download-list {
      .download-wrap {
        & > * {
          flex: 0 0 100% !important;
        }

        .text-wrap {
          ol {
            li {
              display: inline-block !important;
            }
          }
        }
      }
    }
  }
  </style>
