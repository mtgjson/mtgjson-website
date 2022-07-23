<template lang="pug">
a(class="sidebar-link" :class="{ active: selfActive }" :href="link.props.href") {{ link.children }}
</template>

<script setup lang="ts">
import { h, computed } from 'vue';
import { useRoute } from 'vitepress';
import { isActive } from '../util';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { item }: { item: any } = props;
const route: any = useRoute();

const selfActive = computed<boolean>((): boolean => isActive(route, item.link));
const link = computed<any>((): any => renderLink(h, item.link, item.text || item.link, selfActive.value));

const renderLink = (h: any, to: string, text: string, active: boolean): any => {
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
