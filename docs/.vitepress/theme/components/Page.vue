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
      blockquote
        .edit-link(v-if="editLink")
          a(:href="editLink.link", target="_blank", rel="noopener noreferrer") {{ editLink.text }}
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useData } from 'vitepress';
import type { ISidebarItem } from '../@types';

const { theme, page } = useData();

const sidebarItems: ISidebarItem[] = theme.value.sidebar;

const editLink = computed<any>((): any => {
  const link: string = theme.value.editLink.pattern + page.value.relativePath;
  const text: string = theme.value.editLink.text;

  return {
    link,
    text,
  };
});

const prev = computed<ISidebarItem>((): ISidebarItem => resolvePrev(page, sidebarItems));
const next = computed<ISidebarItem>((): ISidebarItem => resolveNext(page, sidebarItems));

const resolvePrev = (page: any, items: ISidebarItem[]) => {
  return find(page, items, -1);
};

const resolveNext = (page: any, items: ISidebarItem[]) => {
  return find(page, items, 1);
};

const find = (page: any, items: ISidebarItem[], offset: number) => {
  const res: ISidebarItem[] = [];

  flattern(items, res);

  for (let i = 0; i < res.length; i++) {
    const cur: ISidebarItem = res[i];
    const relativePath: string = '/' + page.value.relativePath.split('index.md')[0];

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

    blockquote {
      width: 100%;
      text-align: center;

      .edit-link {
        display: inline-block;

        a {
          color: var(--text-color);
          font-weight: bold;
        }
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
