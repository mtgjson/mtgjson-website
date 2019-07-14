<template lang="pug">
  header.navbar
    SidebarButton(@toggle-sidebar="$emit('toggle-sidebar')")

    router-link.home-link(:to="$localePath")
      img.logo(
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :title="$siteTitle"
      )
    
    Metadata.meta-link

    .links
      AlgoliaSearchBox(
        v-if="isAlgoliaSearch"
        :options="algolia")
      SearchBox(v-else-if="$site.themeConfig.search !== false")
      NavLinks.can-hide
</template>

<script>
import Metadata from './Metadata.vue';
import SidebarButton from './SidebarButton.vue';
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from '@SearchBox';
import NavLinks from './NavLinks.vue';

export default {
  components: {
    Metadata,
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
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
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: $navbarHeight;
  background-color: $lightColor;
  padding: $navbar-vertical-padding $navbar-horizontal-padding;

  .logo {
    height: $navbarHeight - 1.4rem;
    width: auto;
    vertical-align: top;
  }

  .meta-link {
    display: inline-flex;
    align-items: center;
    height: 100%;

    a {
      color: $grayColor;
    }
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
  
  .nav-links {
    .nav-item, .repo-link {
      margin-left: 10px !important;
    }
  }

  .search-box {
    margin-right: 0 !important;

    input {
      // Prevent zoom on mobile
      font-size: 16px !important;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .logo {
      height: $navbarHeight - 1.8rem;
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
