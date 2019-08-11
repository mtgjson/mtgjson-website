<template lang="pug">
  aside.sidebar
    .sidebar-wrap-fixed
      //- Logo.sidebar-logo.desktop-hide
      AlgoliaSearchBox(
        v-if="isAlgoliaSearch"
        :options="algolia")
      SearchBox(
        v-else-if="$site.themeConfig.search !== false")

    .sidebar-wrap

      NavLinks.desktop-hide

      slot(name="top")

      SidebarLinks(:depth="0" :items="items")

      slot(name="bottom")


</template>

<script>
import Logo from './Logo';
import Version from './Version';
import NavLinks from './NavLinks';
import SidebarLinks from './SidebarLinks';
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from '@SearchBox';
// import Logo from './Logo';

export default {
  name: 'Sidebar',
  components: {
    Version,
    NavLinks,
    SidebarLinks,
    SearchBox,
    Logo,
    AlgoliaSearchBox,
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
  top: $navbarHeight;
  left: 0;
  bottom: 0;
  overflow: visible;
  background-color: var(--bg-color);
  border-right: 1px solid var(--bg-border-color);

  ol, ul {
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

  &-wrap {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    grid-gap: 2rem;
    overflow-y: auto;
    padding: 2rem 2rem 0;

    &-fixed {
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--bg-border-color);

      .sidebar-logo {
        margin-bottom: 1rem;

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
}

@media (max-width: $MQMobile) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    top: $navbarHeight;
  }
}
</style>
