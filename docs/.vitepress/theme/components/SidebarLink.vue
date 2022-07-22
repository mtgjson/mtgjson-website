<template lang="pug">
a(class="sidebar-link" :class="{ active: selfActive }" :href="link.props.href") {{ link.children }}
</template>

<script setup>
import { h, computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import { isActive, hashRE } from '../util';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { theme } = useData();
const route = useRoute();

const { item } = props;

const configDepth = theme.value.sidebarDepth;
const maxDepth = configDepth === null ? 1 : configDepth;

const renderLink = (h, to, text, active) => {
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

const renderChildren = (h, children, path, route, maxDepth, depth = 1) => {
  if (!children || depth > maxDepth) {
    return null;
  }
  return h(
    'ul',
    { class: 'sidebar-sub-headers' },
    children.map((c) => {
      const active = isActive(route, path + '#' + c.slug);
      return h('li', { class: 'sidebar-sub-header' }, [
        renderLink(h, path + '#' + c.slug, c.title, active),
        renderChildren(h, c.children, path, route, maxDepth, depth + 1),
      ]);
    })
  );
};

const sidebarLink = () => {
  if (selfActive && item.headers && !hashRE.test(item.link)) {
    const children = item.headers;
    return [link, renderChildren(h, children, item.link, route, maxDepth)];
  } else {
    return link;
  }
}

const selfActive = computed(() => isActive(route, item.link));
const link = computed(() => renderLink(h, item.link, item.text || item.link, selfActive));
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
