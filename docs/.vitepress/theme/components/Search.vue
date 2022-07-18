<template lang="pug">
.search
  .searchbar
    input.searchbar-input(
      ref="input"
      v-model="searchTerm"
      aria-autocomplete="both"
      aria-labelledby="docsearch-label"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      enterkeyhint="search"
      spellcheck="false"
      autofocus="true"
      placeholder="Search..."
      type="search"
      @change="openSearch()"
    )
    .search-suggestions
      .search-suggestion(
        v-for="(item, i) of results"
        :key="i"
      )
        a(
          v-if="item.hash"
          :key="item.id"
          :href="item.link + item.hash"
          @click="cleanSearch()"
        )
          p.search-item {{ item.title }} > {{ item.text }}
        a(
          v-else
          :key="item.id"
          :href="item.link"
          @click="cleanSearch()"
        )
          p.search-item {{ item.title }}
</template>

<script setup>
import { useData } from 'vitepress';
import { ref, computed } from 'vue';
import data from '../../../../lunr_index.js';
import lunr from '../scripts/lunr.js';

const { theme, site, localePath, page } = useData();

const open = ref(false);
const searchTerm = ref();
const input = ref(null);

let LUNR_DATA = data.LUNR_DATA;
let PREVIEW_LOOKUP = data.PREVIEW_LOOKUP;

const results = computed(() => {
  const res = [];

  if (searchTerm.value) {
    const idx = lunr.Index.load(LUNR_DATA);
    const searchResults = idx.search(searchTerm.value);

    for (let i = 0; i < searchResults.length; i++) {
      const id = searchResults[i]['ref'];
      const item = PREVIEW_LOOKUP[id];

      const title = item['t'].split('|')[0].trim();
      const link = '/' + item['l'].split('index.html')[0];
      const anchors = item['a'];
      let text = null;
      let hash = null;

      if (anchors) {
        for (let index in anchors) {
          const anchor = anchors[index];

          if (typeof anchor === 'object') {
            const anchorTitle = anchor.title && anchor.title.split('|')[0].trim();

            if (anchorTitle === title) {
              if (searchTerm.value === anchor.text) {
                text = anchor.text;
                hash = anchor.hash;
              }
            }
          }
        }
      }

      res.push({
        id,
        link,
        title,
        text,
        hash,
      });
    }
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
      border: 1px solid var(--search-border-color);
      color: var(--search-text-color);
      padding: 0.5rem;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1rem;
      width: 100%;

      &::placeholder {
        color: var(--search-text-color);
      }
    }
  }

  .search-suggestions {
    border-radius: 5px;
    top: calc(100% + 10px);
    position: absolute;
    width: 100%;
    z-index: 100;
    background-color: var(--light-color);
    overflow: hidden;

    .search-suggestion {
      &:hover {
        background-color: var(--search-border-highlight-color);
      }

      a {
        padding: 0.5rem 1rem;
        display: block;
        text-decoration: none;
      }

      .search-item {
        color: var(--dark-color);
        margin: 0;
      }
    }
  }
}
</style>
