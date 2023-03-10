<template lang="pug">
.search
  .search-bar
    input.search-bar-input(
      ref="input",
      v-model="searchTerm",
      autocomplete="off",
      autocorrect="off",
      autocapitalize="off",
      spellcheck="false",
      placeholder="Search documentation...",
      type="search",
      @input="openSearch",
      :class="{ open: results?.length > 0 }"
    )
    .search-clear-button(
      v-if="searchTerm.length > 0"
      @click="clearSearch"
    )
    .search-suggestions(:class="{ open: results?.length > 0 }")
      .search-suggestion(
        v-if="results",
        v-for="(item, i) of results",
        :key="i",
        tabindex="0",
        @keydown="handleA11yKeydown"
      )
        a(
          :key="item.id",
          :href="`${item.isOwnPage ? item.path : item.path + item.hash}`",
          @click="clearSearch"
        )
          .search-item
            p.search-item--page {{ item.title }}
            span.search-item--text(v-if="!item.isOwnPage") {{ item.text }}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import type { IPagesData, IPagesDataHeader } from '../types';

const { theme } = useData();

const pages: IPagesData[] = theme.value.pages;

const open = ref<boolean>(false);
const input = ref<HTMLElement | null>(null);
const searchTerm = ref<string>('');

const results = computed<IPagesData[] | []>((): IPagesData[] | [] => {
  const res: IPagesData[] = [];

  if (searchTerm.value.length > 0) {
    pages.forEach((page: any, index: number): void => {
      const pagePath: string = page.path;
      const pageTitle: string = page.title;
      const pageHeaders: IPagesDataHeader[] = page.headers;
      const loweredTitle: string = pageTitle?.toLowerCase();
      const loweredTerm: string = searchTerm.value.toLowerCase();

      if (Array.isArray(pageHeaders)) {
        pageHeaders.forEach((anchor: IPagesDataHeader): void => {
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

  if (res.length > 0) {
    return res;
  }

  return [];
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

const handleA11yKeydown = (event: KeyboardEvent): void => {
  const target: HTMLAnchorElement = event.currentTarget as HTMLAnchorElement;
  const targetAnchor: HTMLAnchorElement = target.children[0] as HTMLAnchorElement;

  if (event.key === 'Enter') {
    targetAnchor.click();
  }
};
</script>

<style lang="scss">
.search {
  &-bar {
    position: relative;
    padding-bottom: 2rem;
    margin-top: 1rem;
    border-bottom: 1px solid var(--vp-c-divider);

    input {
      background-color: var(--search-bg-color);
      color: var(--search-text-color);
      padding: 0.25rem 1.25rem 0.25rem 0.5rem;
      border-radius: var(--common-radius);
      font-weight: 600;
      font-size: 14px;
      width: 100%;
      height: var(--search-height);
      border: 1px solid var(--search-border-color);
      transition: border-color 0.25s;

      &.open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        &:hover {
          border-color: var(--search-border-color);
        }
      }

      &:focus {
        outline: 0;
      }

      &:hover {
        border-color: var(--vp-input-hover-border-color);
      }

      &::placeholder {
        color: var(--search-text-color);
      }
    }
  }

  &-clear-button {
    position: absolute;
    top: 0.6rem;
    right: 0.5rem;
    width: 12px;
    height: 12px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      width: 2px;
      height: 12px;
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
    top: calc(100% - 2rem - 1px); // Height of input - padding below - border width
    width: 100%;

    &.open {
      background-color: var(--search-bg-color);
      overflow: auto;
      max-height: var(--search-results-max-height);
      border-radius: var(--common-radius);
      border: 1px solid var(--search-border-color);
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .search-suggestion {
      &:hover,
      &:focus {
        outline: 0;
        background-color: var(--search-bg-hover-color);

        a {
          text-decoration: none !important;
        }

        .search-item {
          &--page {
            text-decoration: none;
          }
        }
      }

      a {
        padding: 0.5rem;
        display: block;
        text-decoration: none;
        color: var(--search-text-color);
      }

      .search-item {
        color: var(--search-text-color);

        &--page {
          text-align: left;
          margin: 0;
          line-height: 1rem;
          color: var(--accent-color);
          font-size: 14px;
          font-weight: 600;
        }

        &--text {
          text-align: left;
          display: block;
          font-weight: normal;
          font-size: 14px;
          padding-left: 0.5rem;
        }
      }
    }
  }
}

@media (max-width: 959px) {
  .search {
    &-bar {
      margin-bottom: 0.65rem;
      margin-top: 0;
    }
  }
}
</style>
