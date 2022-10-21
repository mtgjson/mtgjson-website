<template lang="pug">
.search
  .search-bar
    input.search-bar-input(
      ref="input"
      v-model="searchTerm"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      placeholder="Search..."
      type="search"
      @input="openSearch()"
      :class="{ open: results.length > 0 }"
    )
    .search-clear-button(
      v-if="searchTerm.length > 0"
      @click="clearSearch()"
    )
    .search-suggestions(:class="{ open: results.length > 0 }")
      .search-suggestion(
        v-for="(item, i) of results"
        :key="i"
        tabindex="0"
      )
        a(
          :key="item.id"
          :href="`${item.isOwnPage ? item.path : item.path + item.hash}`"
          @click="clearSearch()"
        )
          .search-item
            p.search-item--page {{ item.title }}
            span.search-item--text(v-if="!item.isOwnPage") &hookrightarrow; {{ item.text }}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import type { ISearchResult, ISearchResultHeader } from '../types';

const { theme } = useData();

const pages: ISearchResult[] = theme.value.pages;

const open = ref<boolean>(false);
const input = ref<HTMLElement | null>(null);
const searchTerm = ref<string>('');

const results = computed<ISearchResult[]>((): ISearchResult[] => {
  const res: ISearchResult[] = [];

  if (searchTerm.value.length > 0) {
    pages.forEach((page: any, index: number): void => {
      const pagePath: string = page.path;
      const pageTitle: string = page.title;
      const pageHeaders: ISearchResultHeader[] = page.headers;
      const loweredTitle: string = pageTitle?.toLowerCase();
      const loweredTerm: string = searchTerm.value.toLowerCase();

      if (Array.isArray(pageHeaders)) {
        pageHeaders.forEach((anchor: ISearchResultHeader): void => {
          const loweredText: string = anchor.text.toLowerCase();
          const containsTerms: boolean = loweredTerm.includes(loweredText) || loweredText.includes(loweredTerm);
          const isOwnPage: boolean = loweredTitle === loweredText;
          const isChangelog: boolean = loweredTitle.includes('changelog');

          // We keeps records of the changelog pages but do not want them to populate search
          if (isChangelog) {
            return;
          }

          if (containsTerms) {
            res.push({
              id: index,
              path: pagePath,
              title: pageTitle,
              isOwnPage,
              ...anchor,
            });
          }
        });
      } else {
        res.push({
          id: index,
          path: pagePath,
          title: pageTitle,
        });
      }
    });
  }

  return res;
});

const openSearch = (): void => {
  if (input.value) {
    input.value.focus();
    open.value = true;
  } else {
    if (results.value.length === 0) {
      open.value = false;
    }
  }
};

const clearSearch = (): void => {
  open.value = false;
  searchTerm.value = '';
};
</script>

<style lang="scss">
.search {
  &-bar {
    position: relative;

    input {
      background-color: var(--search-bg-color);
      color: var(--search-text-color);
      padding: 0.5rem 1rem;
      border-radius: var(--common-radius);
      font-weight: bold;
      font-size: 1rem;
      width: 100%;
      border: 1px solid var(--search-bg-color);

      &.open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:focus {
        border: 1px solid var(--accent-color);
        outline: 0;
      }

      &::placeholder {
        color: var(--search-text-color);
      }
    }
  }

  &-clear-button {
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    width: 15px;
    height: 15px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      width: 2px;
      height: 14px;
      background-color: var(--accent-color);
      position: absolute;
      left: 6px;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &-suggestions {
    position: absolute;
    z-index: 100;
    top: calc(100% - 1px);
    width: 100%;
    background-color: var(--search-bg-color);
    overflow: scroll;
    max-height: var(--search-results-max-height);
    border-radius: var(--common-radius);

    &.open {
      border: 1px solid var(--accent-color);
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .search-suggestion {
      &:hover,
      &:focus {
        outline: 0;

        .search-item {
          &--page {
            text-decoration: none;
          }
        }
      }

      a {
        padding: 0.5rem 1rem;
        display: block;
        text-decoration: none;
        color: var(--search-text-color);
      }

      .search-item {
        color: var(--search-text-color);

        &--page {
          text-align: left;
          margin: 0;
          line-height: 1.25rem;
          text-decoration: underline;
          color: var(--accent-color);
        }

        &--text {
          text-align: left;
          display: block;
          margin-top: 5px;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
