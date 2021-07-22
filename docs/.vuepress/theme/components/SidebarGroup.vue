<template lang="pug">
  section.sidebar-group(
    :class="[{collapsable, 'is-sub-group': depth !== 0 },`depth-${depth}`]")

    router-link.sidebar-heading.clickable(
      v-if="item.path"
      :class="{open, 'active': isActive($route, item.path)}"
      :to="item.path"
      @click.native="$emit('toggle')")

      span {{ item.title }}
      span.arrow(
        v-if="collapsable"
        :class="open ? 'down' : 'right'")

    p.sidebar-heading(
      v-else
      :class="{ open }"
      @click="$emit('toggle')")
      span {{ item.title }}
      span.arrow(
        v-if="collapsable"
        :class="open ? 'down' : 'right'")

    DropdownTransition
      SidebarLinks.sidebar-group-items(
        :items="item.children"
        v-if="open || !collapsable"
        :sidebarDepth="item.sidebarDepth"
        :depth="depth + 1")
</template>

<script>
import { isActive } from '../util';
import DropdownTransition from './DropdownTransition.vue';

export default {
  name: 'SidebarGroup',
  components: { DropdownTransition },
  props: ['item', 'open', 'collapsable', 'depth'],
  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks = require('./SidebarLinks.vue').default;
  },
  methods: { isActive },
};
</script>

<style lang="scss">
.sidebar-heading {
  color: var(--text-color);
  font-weight: bold;
  line-height: 2;
  cursor: pointer;
  margin: 0;

  &.router-link-exact-active {
    color: var(--accent-color);
  }

  .arrow {
    position: relative;
    top: -0.12em;
    left: 0.5em;
  }

  &:hover {
    color: var(--accent-color);
  }
}

.sidebar-group-items {
  transition: height 0.1s ease-out;
  overflow: hidden;
}
</style>
