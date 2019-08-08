<template lang="pug">
  nav.nav-links(v-if="userLinks.length || repoLink")
    h6 Connect With Us
    .nav-item(
      v-for="item in userLinks"
      :key="item.link")
      DropdownLink(
        v-if="item.type === 'links'"
        :item="item")
      NavLink(
        v-else
        :item="item")

    a.repo-link(
      v-if="repoLink"
      :href="repoLink"
      target="_blank"
      rel="noopener noreferrer") {{ repoLabel }}
      OutboundLink
</template>

<script>
import ThemeSwitcher from '../global-components/ThemeSwitcher';
import DropdownLink from './DropdownLink.vue';
import { resolveNavLinkItem } from '../util';
import NavLink from './NavLink.vue';

export default {
  components: { NavLink, DropdownLink, ThemeSwitcher },
  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          }),
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },
    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem),
        });
      });
    },
    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      } else {
        return '';
      }
    },
    repoLabel() {
      if (!this.repoLink) {
        return;
      }
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel;
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0];
      const platforms = ['GitHub', 'GitLab', 'Bitbucket'];

      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform;
        }
      }

      return 'Source';
    },
  },
};
</script>

<style lang="stylus">
.nav-links {
  position: relative;

  h6 {
    margin-bottom: 10px;
  }

  .nav-item {
    position: relative;
    display: block;
    margin-left: 1.5rem;

    a {
      font-size: 14px;
      line-height: 1.75rem;
      display: block;
      font-weight: bold;
      color: var(--text-color);

      // margin: 0 auto;
      // height: 25px;
      // width: 25px;
      svg {
        // display: none;
        margin-left: 3px;
      }
    }

    &:nth-of-type(1) {
      a {
        color: var(--discord-color) !important;
      }
    }

    &:nth-of-type(2) {
      a {
        color: var(--patreon-color);
      }
    }
  }
}
</style>
