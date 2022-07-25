<template lang="pug">
a(class="sidebar-link" :class="{ active: selfActive }" :href="link.props.href") {{ link.children }}
</template>

<script setup lang="ts">
import { h, computed } from 'vue';
import { useRoute } from 'vitepress';
import { isActive } from '../helpers';
import type { Route } from 'vitepress';
import type { ISidebarItem } from '../types';

interface Props {
  item: ISidebarItem;
}

const props = defineProps<Props>();
const route: Route = useRoute();

const selfActive = computed<boolean>((): boolean => isActive(route, props.item.link));
const link = computed<ISidebarItem>(
  (): ISidebarItem => renderLink(h, props.item.link, props.item.text || props.item.link, selfActive.value)
);

const renderLink = (h: any, to: string, text: string, active: boolean): ISidebarItem => {
  return h(
    'a',
    {
      href: to,
      activeClass: '',
      exactActiveClass: '',
      class: {
        active,
        'sidebar-link': true,
      },
    },
    text
  );
};
</script>

<style lang="scss">
a.sidebar-link {
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  color: var(--text-color);
  line-height: 2;
  width: 100%;
  box-sizing: border-box;

  &.active {
    position: relative;
    color: var(--accent-color);
    font-weight: bold;
  }

  &:hover {
    color: var(--accent-color);
  }
}
</style>
