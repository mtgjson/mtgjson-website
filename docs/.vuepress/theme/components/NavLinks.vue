<template lang="pug">
  nav.nav-links
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

    //- ThemeSwitcher.nav-item-switcher.mobile-hide
</template>

<script>
import ThemeSwitcher from "../global-components/ThemeSwitcher";
import DropdownLink from "./DropdownLink.vue";
import { resolveNavLinkItem } from "../util";
import NavLink from "./NavLink.vue";

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
          text: this.$themeLocaleConfig.selectText || "Languages",
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
          })
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },
    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        });
      });
    },
    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      } else {
        return "";
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
      const platforms = ["GitHub", "GitLab", "Bitbucket"];

      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        if (new RegExp(platform, "i").test(repoHost)) {
          return platform;
        }
      }

      return "Source";
    }
  }
};
</script>

<style lang="scss">
.nav-links {
  position: relative;
  display: flex;
  align-items: center;

  .nav-item {
    position: relative;
    line-height: 1.7rem;
    margin-right: 1rem;
    display: inline-flex;
    align-items: center;

    &-switcher {
      margin-left: 25px;
    }

    &::before {
      content: "";
      position: absolute;
      display: block;
      height: 25px;
      width: 25px;
      left: 0;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      pointer-events: none;
    }

    a {
      font-size: 0;
      display: block;
      color: transparent;
      margin: 0 auto;
      height: 25px;
      width: 25px;

      svg {
        display: none;
        margin-left: 3px;
      }
    }

    &:nth-of-type(1) {
      &::before {
        background-image: url('/images/icon-discord.svg');
      }
    }

    &:nth-of-type(2) {
      &::before {
        background-image: url('/images/icon-twt.svg');
      }
    }

    &:nth-of-type(3) {
      &::before {
        background-image: url('/images/icon-patreon.svg');
      }
    }

    &:nth-of-type(4) {
      &::before {
        background-image: url('/images/icon-github.svg');
      }
    }
  }
}
</style>
