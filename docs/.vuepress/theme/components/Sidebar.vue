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
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
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

    & > li > a.sidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
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
