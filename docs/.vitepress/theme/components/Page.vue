<template lang="pug">
main.page
  Content.page-content

  nav
    .page-nav(v-if="prev || next")
      span.prev(v-if="prev")
        a.prev(:href="prev.link") &larr; {{ prev.text }}

      span.next(v-if="next")
        a.prev(:href="next.link") {{ next.text }} &rarr;

  footer
    .page-footer
      .edit-link(v-if="editLink")
        a(:href="editLink.link", target="_blank", rel="noopener noreferrer") {{ editLink.text }}

      .last-updated(v-if="lastUpdated")
        span.last-updated-text {{ lastUpdated.text }}:&nbsp;
        span.last-updated-time {{ lastUpdated.date }}
</template>

<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

const { theme, page } = useData();

const sidebarItems = theme.value.sidebar;

const editLink = computed(() => {
  const editLink = theme.value.editLink;
  const link = editLink.pattern + page.value.relativePath;
  const text = editLink.text;

  return {
    link,
    text,
  };
});

const lastUpdated = computed(() => {
  const updated = page.value.lastUpdated;
  let formattedDate = null;
  let date = null;

  if (updated) {
    date = new Date(updated);
    const unformattedMonth = date.getMonth() + 1;
    const unformattedDay = date.getDate();
    const formattedYear = date.getFullYear();
    // Add padding
    const formattedMonth = unformattedMonth < 10 ? '0' + unformattedMonth : unformattedMonth;
    const formattedDay = unformattedDay < 10 ? '0' + unformattedDay : unformattedDay;

    formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;
  }

  return {
    date: formattedDate,
    text: theme.value.lastUpdatedText,
  };
});

const prev = computed(() => resolvePrev(page, sidebarItems));
const next = computed(() => resolveNext(page, sidebarItems));

const resolvePrev = (page, items) => {
  return find(page, items, -1);
};

const resolveNext = (page, items) => {
  return find(page, items, 1);
};

const find = (page, items, offset) => {
  const res = [];

  flattern(items, res);

  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    const relativePath = '/' + page.value.relativePath.split('index.md')[0];

    if (cur.link === relativePath) {
      return res[i + offset];
    }
  }
};

const flattern = (items, res) => {
  for (let i = 0, l = items.length; i < l; i++) {
    const hasChildren = items[i].items && items[i].items.length > 0;

    if (hasChildren) {
      res.push(items[i]);

      flattern(items[i].items || [], res);
    } else {
      res.push(items[i]);
    }
  }
};
</script>

<style lang="scss">
@import '../styles/placeholders';

.page {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) - 1rem);
  padding-left: var(--sidebar-width);
  background-color: var(--bg-darker-color);

  &-nav {
    @extend %wrapper;
    padding-top: 3rem;

    &::before,
    &::after {
      content: "";
      display: table;
      clear: both;
    }

    .prev {
      float: left;
    }

    .next {
      float: right;
    }

    .next,
    .prev {
      a {
        font-weight: bold;
      }
    }
  }

  &-footer {
    @extend %wrapper;
    padding-top: 3rem;
    padding-bottom: 10rem;
    overflow: auto;
    display: flex;
    justify-content: space-between;

    .edit-link {
      display: inline-block;

      a {
        color: var(--text-color);
        font-weight: bold;
      }
    }

    .last-updated {
      font-weight: bold;

      &-text {
        color: var(--text-color);
      }

      &-time {
        color: var(--true-gray-color);
      }
    }
  }
}

@media (max-width: 969px) {
  .page {
    &-footer {
      flex-wrap: wrap;

      & > * {
        flex: 0 0 100%;

        &:first-of-type {
          margin-bottom: 2rem;
        }
      }
    }
  }
}

@media (max-width: 719px) {
  .page {
    padding-left: 0;
  }
}
</style>
