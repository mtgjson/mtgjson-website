<template lang="pug">
a(
  class="sidebar-link",
  :class="{ active: selfActive }",
  :href="link.props.href",
  @click="toggleSidebar"
) {{ link.children }}
</template>

<script setup lang="ts">
import { h, computed } from 'vue';
import { useRoute, type Route } from 'vitepress';
import { useStore } from '../store.js';
import { isActive } from '../helpers';
import type { TSidebarItem } from '../types';

type Props = {
  item: TSidebarItem;
};

const props = defineProps<Props>();
const store = useStore();

const route: Route = useRoute();

const selfActive = computed<boolean>((): boolean => isActive(route, props.item.link));
const link = computed<TSidebarItem>(
  (): TSidebarItem => renderLink(h, props.item.link, props.item.text)
);

const renderLink = (h: any, to: string, text: string): TSidebarItem => {
  return h(
    'a',
    {
      href: to
    },
    text
  );
};

const toggleSidebar = (): void => {
  if (store.SidebarOpen) {
    store.updateSidebar();
  }
};
</script>

<style lang="scss">
a.sidebar-link {
  font-size: 1rem;
  line-height: 2rem;
  font-weight: bold;
  color: var(--text-color);

  &.active {
    position: relative;
    font-weight: bold;
    color: var(--accent-color);
  }

  &:hover {
    color: var(--accent-color);
  }
}
</style>
