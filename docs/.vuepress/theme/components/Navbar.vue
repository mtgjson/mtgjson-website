<template lang="pug">
  header.navbar
    SidebarButton(@toggle-sidebar="$emit('toggle-sidebar')")

    router-link.home-link(:to="$localePath")
      img.logo(
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :title="$siteTitle"
      )

    .links
      AlgoliaSearchBox(
        v-if="isAlgoliaSearch"
        :options="algolia")
      SearchBox(v-else-if="$site.themeConfig.search !== false")
      ThemeSwitcher
</template>

<script>
import ThemeSwitcher from '../global-components/ThemeSwitcher';
import SidebarButton from './SidebarButton';
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from '@SearchBox';

export default {
  components: {
    SidebarButton,
    SearchBox,
    AlgoliaSearchBox,
    ThemeSwitcher,
  },
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

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.9rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: $navbarHeight;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--bg-border-color);
  padding: $navbar-vertical-padding $navbar-horizontal-padding;

  .home-link {
    display: inline-block;
    height: 100%;
  }

  .logo {
    height: 100%;
    width: auto;
    vertical-align: top;
  }

  .links {
    padding-left: 25px;
    white-space: nowrap;
    position: absolute;
    top: $navbar-vertical-padding;
    right: 25px;
    display: flex;
    justify-content: flex-end;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }

  .search-box {
    margin-right: 0 !important;

    input {
      left: 0;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom-width: 0;

    .sidebar-button, .home-link {
      position: relative;
    }

    .sidebar-button {
      display: inline-table;
      top: 0;
      left: -0.5rem;
    }

    .home-link {
      text-align: center;
    }

    .links {
      position: static;
      right: 0;
      top: 0;

      .search-box {
        background-color: var(--bg-color);
        border-bottom: 1px solid var(--bg-border-color);
        position: absolute;
        top: $navbarHeight;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 999;

        .algolia-autocomplete {
          margin: 0 1.5rem 1rem;

          input {
            width: 60%;
            margin: 0 auto;
          }
        }
      }
    }

    .logo {
      height: $navbarHeight - 1.8rem;
      margin: 0 auto;
      vertical-align: middle;
    }

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
    }
  }
}
</style>
