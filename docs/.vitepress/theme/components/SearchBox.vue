<template lang="pug">
.search-box
  input(
    ref="input"
    aria-label="Search"
    :value="query"
    :class="{ focused: focused }"
    placeholder="Search..."
    autocomplete="off"
    spellcheck="false"
    @change="query = $event.target.value"
    @focus="focused = true"
    @blur="focused = false"
    @keyup.enter="go(focusIndex)"
    @keyup.up="onUp"
    @keyup.down="onDown"
  )
  ul(v-if="showSuggestions" class="suggestions" @mouseleave="unfocus")
    li(
      v-for="(s, i) in suggestions"
      :key="i"
      class="suggestion"
      :class="{ focused: i === focusIndex }"
      @mousedown="go(i)"
      @mouseenter="focus(i)"
    )
      a(:href="s.path" @click.prevent)
        span(class="page-title") {{ s.title || s.path }})
        span(v-if="s.header" class="header") &gt; {{ s.header.title }})
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useData, useRouter } from 'vitepress';
import get from 'lodash/get';

const { site, page, theme, localePath } = useData();
const router = useRouter();

const searchMaxSuggestions = theme.value.searchMaxSuggestions;
const searchHotkeys = ['s'];

const query = ref('');
const focused = ref(false);
const focusIndex = ref(0);
const input = ref(null);

const showSuggestions = computed(() => focused && suggestions && suggestions.length);
const suggestions = computed(() => {
  const q = query.value.trim().toLowerCase();

  if (!q) {
    return;
  }

  const pages = theme.value.sidebar;

  console.log( site.value );

  const max = searchMaxSuggestions;
  const res = [];

  for (let i = 0; i < pages.length; i++) {
    if (res.length >= max) {
      break;
    }
    const p = pages[i];

    // filter out results that do not match current locale
    if (p.link !== localePath.value) {
      continue;
    }

    if (matchQuery(q, p)) {
      res.push(p);
    } else if (p.headers) {
      for (let j = 0; j < p.headers.length; j++) {
        if (res.length >= max) {
          break;
        }
        const h = p.headers[j];
        if (h.title && matchQuery(q, p, h.title)) {
          res.push(
            Object.assign({}, p, {
              path: p.path + '#' + h.slug,
              header: h,
            })
          );
        }
      }
    }
  }

  return res;
});

const onHotkey = (event) => {
  if (event.srcElement === document.body && searchHotkeys.includes(event.key)) {
    input.value.focus();
    event.preventDefault();
  }
};

const onUp = () => {
  if (showSuggestions) {
    if (focusIndex.value > 0) {
      focusIndex.value = focusIndex.value--;
    } else {
      focusIndex.value = suggestions.length - 1;
    }
  }
};

const onDown = () => {
  if (showSuggestions) {
    if (focusIndex.value < suggestions.length - 1) {
      focusIndex.value = focusIndex.value++;
    } else {
      focusIndex.value = 0;
    }
  }
};

const go = (i) => {
  if (!showSuggestions) {
    return;
  }

  if (suggestions) {
    router.go(suggestions.value[i].link);
    query.value = '';
    focusIndex.value = 0;
  }
};

const focus = (i) => {
  focusIndex.value = i;
};

const unfocus = () => {
  focusIndex.value = -1;
};



const matchQuery = (q, page, additionalStr = null) => {
  let domain = get(page, 'title', '')

  if (get(page, 'frontmatter.tags')) {
    domain += ` ${page.frontmatter.tags.join(' ')}`
  }

  if (additionalStr) {
    domain += ` ${additionalStr}`
  }

  return matchTest(q, domain)
}

const matchTest = (q, domain) => {
  const escapeRegExp = str => str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')

  // eslint-disable-next-line no-control-regex
  const nonASCIIRegExp = new RegExp('[^\x00-\x7F]')

  const words = q
    .split(/\s+/g)
    .map(str => str.trim())
    .filter(str => !!str)

  if (!nonASCIIRegExp.test(q)) {
    // if the query only has ASCII chars, treat as English
    const hasTrailingSpace = q.endsWith(' ')
    const searchRegex = new RegExp(
      words
        .map((word, index) => {
          if (words.length === index + 1 && !hasTrailingSpace) {
          // The last word - ok with the word being "startswith"-like
            return `(?=.*\\b${escapeRegExp(word)})`
          } else {
          // Not the last word - expect the whole word exactly
            return `(?=.*\\b${escapeRegExp(word)}\\b)`
          }
        })
        .join('') + '.+',
      'gi'
    )
    return searchRegex.test(domain)
  } else {
    // if the query has non-ASCII chars, treat as other languages
    return words.some(word => domain.toLowerCase().indexOf(word) > -1)
  }
}

onMounted(() => {
  document.addEventListener('keydown', onHotkey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onHotkey);
});
</script>

<style lang="scss">
.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;

  input {
    cursor: text;
    width: 10rem;
    height: 2rem;
    color: var(--text-color);
    display: inline-block;
    border: 1px solid var(--bg-border-color);
    border-radius: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    padding: 0 0.5rem 0 2rem;
    outline: none;
    transition: all 0.2s ease;
    // background: #fff url('search.svg') 0.6rem 0.5rem no-repeat;
    background-size: 1rem;

    &:focus {
      cursor: auto;
      border-color: var(--accent-color);
    }
  }

  .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 2 rem;
    border: 1px solid var(--bg-border-color);
    border-radius: 6px;
    padding: 0.4rem;
    list-style-type: none;
  }

  .suggestion {
    line-height: 1.4;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;

    a {
      white-space: normal;
      color: var(--text-color);

      .page-title {
        font-weight: 600;
      }

      .header {
        font-size: 0.9em;
        margin-left: 0.25em;
      }
    }

    &.focused {
      background-color: #f3f4f5;

      a {
        color: var(--accent-color);
      }
    }
  }
}

// @media (max-width: $MQNarrow) {
//   .search-box {
//     input {
//       cursor: pointer;
//       width: 0;
//       border-color: transparent;
//       position: relative;

//       &:focus {
//         cursor: text;
//         left: 0;
//         width: 10rem;
//       }
//     }
//   }
// }

// // Match IE11
// @media all and (-ms-high-contrast: none) {
//   .search-box input {
//     height: 2rem;
//   }
// }

// @media (max-width: $MQNarrow) and (min-width: $MQMobile) {
//   .search-box {
//     .suggestions {
//       left: 0;
//     }
//   }
// }

// @media (max-width: $MQMobile) {
//   .search-box {
//     margin-right: 0;

//     input {
//       left: 1rem;
//     }

//     .suggestions {
//       right: 0;
//     }
//   }
// }

// @media (max-width: $MQMobileNarrow) {
//   .search-box {
//     .suggestions {
//       width: calc(100vw - 4rem);
//     }

//     input:focus {
//       width: 8rem;
//     }
//   }
// }
</style>
