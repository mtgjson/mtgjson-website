<template lang="pug">
  aside.sidebar
    Version.version-link
    NavLinks
    slot(name="top")
    SidebarLinks(:depth="0" :items="items")
    slot(name="bottom")
</template>

<script>
import Version from './Version';
import SidebarLinks from './SidebarLinks';
import NavLinks from './NavLinks';

export default {
  name: 'Sidebar',
  components: { Version, SidebarLinks, NavLinks },
  props: ['items'],
};
</script>

<style lang="stylus">
.sidebar {
  font-size: 16px;
  background-color: var(--bg-color);
  width: $sidebarWidth;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: $navbarHeight;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--bg-border-color);
  overflow-y: auto;

  & > .sidebar-links {
    padding: 25px 0 100px;

    // First link as a header
    & > li > a.sidebar-link {
      font-size: 1em;
      line-height: 2;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }

    .is-sub-group {
      .sidebar-heading {
        font-weight: bold;
        font-size: 14px;
      }
    }
  }

  .version-link {
    padding: 1.5rem;
    width: 100%;
    // border-bottom: 1px solid var(--bg-border-color);
  }

  ul {
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    // border-bottom: 1px solid var(--bg-border-color);
    padding: 1.5rem;
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    top: $navbarHeight + 3rem;

    .nav-links {
      padding-left: 1.5rem;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    & > .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
