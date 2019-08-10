<template lang="pug">
  aside.sidebar
    .sidebar-wrap-fixed
      ThemeSwitcher
      AlgoliaSearchBox(
        v-if="isAlgoliaSearch"
        :options="algolia")
      SearchBox(
        v-else-if="$site.themeConfig.search !== false")

    .sidebar-wrap
      router-link.home-meta(:to="$localePath")
        Logo.home-meta--logo
        .home-meta--link
          h3 {{ $siteTitle }}
          Version.version-link

      NavLinks

      slot(name="top")

      SidebarLinks(:depth="0" :items="items")

      slot(name="bottom")


</template>

<script>
import ThemeSwitcher from '../global-components/ThemeSwitcher';
import Version from './Version';
import SidebarLinks from './SidebarLinks';
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from '@SearchBox';
import NavLinks from './NavLinks';
import Logo from './Logo';

export default {
  name: 'Sidebar',
  components: {
    Version,
    SidebarLinks,
    Logo,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
    ThemeSwitcher,
  },
  props: ['items'],

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },
    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },
};
</script>

<style lang="stylus">
.sidebar {
  position: fixed;
  width: $sidebarWidth;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: visible;
  background-color: var(--bg-color);

  ol, ul {
    margin-bottom: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  &-wrap {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    grid-gap: 2rem;
    overflow-y: auto;
    padding: 0 2rem;

    &-fixed {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 1rem 2rem;
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
      grid-gap: 1.5rem;

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

      .is-sub-group {
        .sidebar-heading {
          font-weight: bold;
          font-size: 14px;
          margin-top: 0;
        }
      }
    }
  }

  .home-meta {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    &--link {
      margin-left: 20px;
    }

    &--link {
      h3 {
        color: var(--text-color);
        margin-bottom: 5px;
        padding: 0;
      }
    }
  }

  .search-box {
    position: static;
    background-color: var(--bg-color);
    width: 100%;
    margin-right: 0;
    text-align: center;
    z-index: 999 !important;

    .algolia-autocomplete {
      display: grid !important;
      grid-grid-template-columns: 1fr;

      input {
        left: 0 !important;
        width: 100%;
      }

      .ds-dropdown-menu {
        top: 30px !important;
        position: relative;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    top: $navbarHeight;

    .nav-links {
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }
  }
}
</style>
