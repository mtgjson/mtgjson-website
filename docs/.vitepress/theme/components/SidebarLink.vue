<template lang="pug">
a(class="sidebar-link" :class="{ active: selfActive }" :href="link.props.href") {{ link.children }}
</template>

<script setup lang="ts">
import { h, computed } from 'vue';
import { useRoute } from 'vitepress';
import { isActive } from '../helpers';
import type { Route } from 'vitepress';
import type { TSidebarItem } from '../types';

type Props = {
  item: TSidebarItem;
};

const props = defineProps<Props>();

const route: Route = useRoute();

const selfActive = computed<boolean>((): boolean => isActive(route, props.item.link));
const link = computed<TSidebarItem>(
  (): TSidebarItem => renderLink(h, props.item.link, props.item.text || props.item.link, selfActive.value)
);

const renderLink = (h: any, to: string, text: string, active: boolean): TSidebarItem => {
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
