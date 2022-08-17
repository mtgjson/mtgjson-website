<template lang="pug">
main.page
  section.page-content
    Content

  BackToTop

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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import BackToTop from './BackToTop.vue';
import type { TSidebarItem, TEditLink } from '../types';

const { theme, page } = useData();
const sidebarItems: TSidebarItem[] = theme.value.sidebar;

const editLink = computed<TEditLink>((): TEditLink => {
  const link: string = theme.value.editLink.pattern + page.value.relativePath;
  const text: string = theme.value.editLink.text;

  return {
    link,
    text,
  };
});

const prev = computed<TSidebarItem>((): TSidebarItem => resolvePrev(page, sidebarItems));
const next = computed<TSidebarItem>((): TSidebarItem => resolveNext(page, sidebarItems));

const resolvePrev = (page: any, items: TSidebarItem[]) => {
  return find(page, items, -1);
};

const resolveNext = (page: any, items: TSidebarItem[]) => {
  return find(page, items, 1);
};

const find = (page: any, items: TSidebarItem[], offset: number) => {
  const res: TSidebarItem[] = [];

  flattern(items, res);

  for (let i = 0; i < res.length; i++) {
    const cur: TSidebarItem = res[i];
    const relativePath: string = '/' + page.value.relativePath.split('index.md')[0];

    if (cur.link === relativePath) {
      return res[i + offset];
    }
  }
};

const flattern = (items: TSidebarItem[], res: TSidebarItem[]) => {
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

<style lang="scss" scoped>
@import '../styles/placeholders';

.page {
  position: relative;
  z-index: 1;
  padding-left: var(--sidebar-width);
  background-color: var(--bg-darker-color);

  &-content {
    @extend %wrapper;
    padding: 0 2rem;

    & > *:first-child {
      margin-top: 0;
      padding-top: 0;
    }
  }

  &-nav {
    @extend %wrapper;
    padding-top: 3rem;

    &::before,
    &::after {
      content: '';
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
    padding-bottom: 3rem;
    overflow: auto;
    display: flex;
    justify-content: space-between;

    .edit-link {
      width: 100%;
      padding: 2rem;
      background-color: var(--bg-color);
      display: block;
      text-align: center;
      border-radius: var(--common-radius);

      a {
        color: var(--text-color);
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 800px) {
  .page {
    &-content,
    &-nav,
    &-edit {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}

@media (max-width: 719px) {
  .page {
    padding-top: calc(var(--navbar-height) - 1rem);
    padding-left: 0;
  }
}
</style>
