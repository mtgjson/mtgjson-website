<template lang="pug">
aside.sidebar
  .sidebar-logo
    NavMeta(:width="`70px`")

  .sidebar-wrap-navlinks
    NavLinks

  .sidebar-wrap-search
    Search

  .sidebar-wrap
    SidebarLinks(:depth="0" :items="items")
</template>

<script setup lang='ts'>
import NavLinks from './NavLinks.vue';
import SidebarLinks from './SidebarLinks.vue';
import NavMeta from './NavMeta.vue';
import Search from './Search.vue';

interface Props {
  items: any[];
}

defineProps<Props>();
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  width: var(--sidebar-width);
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: visible;
  background-color: var(--bg-color);
  padding-bottom: 2rem;

  ol, ul {
    margin-left: 0;
    margin-bottom: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  ul, ol {
    padding-left: 25px;
  }

  &-logo {
    padding: 0 2rem;
    height: var(--navbar-height);
    border-bottom: 1px solid var(--bg-border-color);
    display: flex !important;
    text-decoration: none;

    .logo-meta {
      &--logo {
        display: none;
      }

      &--link {
        margin-left: 0;
      }
    }

    .mobile-hide {
      display: block;
    }
  }

  &-wrap {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    grid-gap: 2rem;
    overflow-y: auto;
    padding: 2rem 2rem 10rem;

    &-navlinks,
    &-search {
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--bg-border-color);
    }

    & > *:last-child {
      padding-bottom: 10rem;
    }

    & > .sidebar-links {
      padding-left: 0;
      margin-bottom: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 0.75rem;

      & .sidebar-group-items {
        margin-bottom: 0;
        overflow: initial;
      }

      // First link as a header
      & > li > a.sidebar-link {
        font-size: 1em;
        line-height: 2;
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 719px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
}
</style>
