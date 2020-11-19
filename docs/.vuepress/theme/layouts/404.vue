<template lang="pug">
  .theme-container(
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd")

    Navbar(v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar")

    Sidebar(
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar")

      slot(
        name="sidebar-top"
        slot="top")
      slot(
        name="sidebar-bottom"
        slot="bottom")

    .page#error
      .content__default
        h1 This page is lost...
        p Sorry, there seems to be a problem. Go back to your previous page, check the URL or use one of these popular links below.
        ul
          li
            router-link(to="/") Home
          li
            router-link(to="/faq") F.A.Q.
          li
            router-link(to="/downloads") Downloads
          li
            router-link(to="/abstract-models/all-prices") All Prices
          li
            router-link(to="/data-models/card") Card Model
          li
            router-link(to="/data-models/set") Set Model
        .error-image-wrapper
          img.error-image(v-if="themeColor === 'dark'" src="../../public/images/assets/error-image-dark.png")
          img.error-image(v-else src="../../public/images/assets/error-image-light.png")

</template>

<script>
import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { resolveSidebarItems } from '../util'

export default {
  components: { Page, Navbar, Sidebar },

  data () {
    return {
      isSidebarOpen: false,
    }
  },

  computed: {
    themeColor () {
      return this.$store.getters.ThemeColor;
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })

    if (window && window.localStorage) {
      const savedTheme = window.localStorage.getItem("theme");
      if (savedTheme) {
        this.themeColor = savedTheme
      }
    }
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.scss" lang="scss"></style>
<style lang="scss" scoped>
.page {
  height: calc(100% - var(--navbar-height));

  .content__default {
    position: relative;

    h1, p, ul {
      z-index: 2;
      position: relative;
    }

    .error-image {
      position: absolute;
      z-index: 1;
      bottom: 0;
      right: 4rem;
      max-width: 100%;
      opacity: 0.35;

      &-wrapper {
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media (max-width: 719px) {
  .page {
    height: 100%;

    .content__default {
      .error-image {
        position: relative;
        right: 0;
        left: 0;
        margin: 0 auto;
        opacity: 1;
      }
    }
  }
}
</style>
