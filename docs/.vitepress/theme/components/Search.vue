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
      @change="openSearch()"
      :class="{ open: results.length > 0 }"
    )
    .search-suggestions(:class="{ open: results.length > 0 }")
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
          p.search-item {{ item.title }} &rarr;&nbsp;
            span {{ item.text }}
        a(
          v-else
          :key="item.id"
          :href="item.link"
          @click="cleanSearch()"
        )
          p.search-item {{ item.title }}
</template>

<script setup>
import { ref, computed } from 'vue';
import data from '../../../../lunr_index.js';
import lunr from '../scripts/lunr.js';

const open = ref(false);
const input = ref(null);
const searchTerm = ref();

const LUNR_DATA = data.LUNR_DATA;
const LUNR_LOOKUP = data.LUNR_LOOKUP;

const results = computed(() => {
  const res = [];

  if (searchTerm.value) {
    const idx = lunr.Index.load(LUNR_DATA);
    const searchResults = idx.search(searchTerm.value);

    for (let i = 0; i < searchResults.length; i++) {
      const id = searchResults[i]['ref'];
      const item = LUNR_LOOKUP[id];
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
              if (searchTerm.value.includes(anchor.text)) {
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
      }

      .search-item {
        color: var(--search-text-color);
        margin: 0;

        span {
          font-weight: normal;
        }
      }
    }
  }
}
</style>
