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
import DropdownLink from './DropdownLink.vue';
import { resolveNavLinkItem } from '../util';
import NavLink from './NavLink.vue';

export default {
  components: { NavLink, DropdownLink },
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
      }
    },
    repoLabel() {
      if (!this.repoLink) return;
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
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;

  h6 {
    flex: 0 0 100%;
    margin-bottom: 1rem;
  }

  .nav-item {
    position: relative;
    margin-left: 10px;
    flex: none;

    &:first-of-type {
      margin-left: 0;
    }

    a {
      text-align: center;
      display: block;
      margin: 0 auto;
      height: 25px;
      width: 25px;

      &::before {
        content: '';
        height: 25px;
        width: 25px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        background-position: center;
        background-size: cover
      }
    }

    &:nth-of-type(3) { // Github
      a {
        &::before {
          border: 2px solid var(--light-only-dark);
          border-radius: 4px;
          background-color: var(--light-only-dark);
          background-image: url('/images/logo-github.svg');
          width: 22px;
          height: 22px;
          top: -1px;
        }
      }
    }

    &:nth-of-type(1) { // Discord
      a {
        &,
        &::before {
          width: 30px;
          height: 30px;
        }
        &::before {
          top: -2px;
          background-image: url('/images/discord-logo.svg');
        }
      }
    }

    &:nth-of-type(2) { // Patreon
      a {

        &::before {
          background-image: url('/images/patreon-logo.svg');
        }
      }
    }
  }
}
</style>
