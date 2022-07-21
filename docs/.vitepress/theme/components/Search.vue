<template lang="pug">
.search
  .searchbar
    input.searchbar-input(
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
    .search-suggestions(:class="{ open: results.length > 0 }")
      .search-suggestion(
        v-for="(item, i) of results"
        :key="i"
      )
        a(
          :key="item.id"
          :href="`${item.isOwnPage ? item.path : item.path + item.hash}`"
          @click="cleanSearch()"
        )
          .search-item
            p {{ item.title }}
            span(v-if="!item.isOwnPage") &hookrightarrow; {{ item.text }}
</template>

<script setup>
import { ref, computed } from 'vue';
import { useData } from 'vitepress';

const { site, theme } = useData();

const pages = theme.value.pages;

const open = ref(false);
const input = ref(null);
const searchTerm = ref('');

const results = computed(() => {
  const res = [];

  if (searchTerm.value.length > 0) {
    pages.forEach((page, index) => {
      const pageId = index;
      const pagePath = page.path;
      const pageTitle = page.title;
      const pageAnchors = page.anchors;
      const loweredTitle = pageTitle.toLowerCase();
      const loweredTerm = searchTerm.value.toLowerCase();

      if (pageAnchors) {
        pageAnchors.forEach((anchor) => {
          const loweredText = anchor.text.toLowerCase();
          const containsTerms = loweredTerm.includes(loweredText) || loweredText.includes(loweredTerm);
          const isOwnPage = loweredTitle === loweredText;
          const isChangelog = loweredTitle.includes('changelog');

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

const openSearch = () => {
  if (input.value) {
    input.value.focus();
    open.value = true;
  } else {
    if (results.value.length === 0) {
      open.value = false;
    }
  }
};

const cleanSearch = () => {
  open.value = false;
  searchTerm.value = '';
};
</script>

<style lang="scss">
.search {
  .searchbar {
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

  .search-suggestions {
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
      &:hover {
        background-color: var(--search-item-highlight-color);
      }

      a {
        padding: 0.5rem 1rem;
        display: block;
        text-decoration: none;
        color: var(--search-text-color);
      }

      .search-item {
        color: var(--search-text-color);

        p {
          margin: 0;
          line-height: 1.25rem;
        }

        span {
          margin-top: 5px;
          font-weight: normal;
        }
      }
    }
  }
}
</style>
