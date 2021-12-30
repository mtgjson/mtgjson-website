<template lang="pug">
  aside.sidebar
    .sidebar-logo
      NavMeta(:width="`70px`")
    .sidebar-wrap-fixed
      SearchBox(
        v-if="$site.themeConfig.search !== false")

    .sidebar-wrap
      NavLinks

      slot(name="top")

      SidebarLinks(:depth="0" :items="items")

      slot(name="bottom")


</template>

<script>
import NavLinks from './NavLinks';
import SidebarLinks from './SidebarLinks';
import SearchBox from '@SearchBox';
import NavMeta from '../global-components/NavMeta';

export default {
  name: 'Sidebar',
  components: {
    NavLinks,
    SidebarLinks,
    SearchBox,
    NavMeta
  },
  props: {
    items: {
      required: true,
      type: Array
    }
  },
};
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
    padding: 0 4rem;
    height: var(--navbar-height);
    margin-bottom: 1rem;
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
      display: block !important;
    }
  }

  &-wrap {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    grid-gap: 2rem;
    overflow-y: auto;
    padding: 2rem 4rem 0;

    &-fixed {
      padding: 0 4rem 1rem;
      border-bottom: 1px solid var(--bg-border-color);
    }

    & > *:last-child {
      padding-bottom: 10rem;
    }

    & > .sidebar-links {
      padding-left: 0 !important;
      margin-bottom: 0 !important;
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
    // top: var(--navbar-height);

    &-logo {
      margin-bottom: 0;
      padding: 0 2rem;
    }

    &-wrap {
      padding: 2rem 2rem 0;

      &-fixed {
        padding: 1rem 2rem;
      }
    }

  }
}
</style>
