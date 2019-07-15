<template lang="pug">
  aside.sidebar
    NavLinks
    slot(name="top")
    SidebarLinks(:depth="0" :items="items")
    slot(name="bottom")
</template>

<script>
import SidebarLinks from './SidebarLinks.vue';
import NavLinks from './NavLinks.vue';

export default {
  name: 'Sidebar',
  components: { SidebarLinks, NavLinks },
  props: ['items'],
};
</script>

<style lang="stylus">
.sidebar {
  font-size: 16px;
  background-color: $bgColor;
  width: $sidebarWidth;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: $navbarHeight;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid $bgColorDark;
  overflow-y: auto;

  & > .sidebar-links {
    padding-bottom: 100px !important;

    .is-sub-group {
      .sidebar-heading {
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  
  ul {
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $bgColorDark;
    padding: 1.5rem 1.5rem 1rem 1.5rem;

    .nav-item, .repo-link {
      display: flex;
      margin-bottom: 10px;
      
      a {
        min-height: 34px;
        font-weight: 600;
        line-height: 1.1rem;
        font-size: 14px;
        flex: auto;
      }
    }
  }

  & > .sidebar-links {
    padding: 1.5rem 0;

    // First link as a header
    & > li > a.sidebar-link {
      font-size: 1em;
      line-height: 2;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s ease;

    .nav-links {
      display: block;

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
