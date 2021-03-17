<template lang="pug">
  main.page
    slot(name="top")

    Content

    .page-nav(v-if="prev || next")
      p.inner
        span.prev(v-if="prev")
          router-link.prev(
            v-if="prev"
            :to="prev.path") ← {{ prev.title || prev.path }}

        span.next(v-if="next")
          router-link.prev(
            v-if="next"
            :to="next.path") {{ next.title || next.path }} →

    footer.page-edit
      .page-edit--links
        .edit-link.link-inline-image.github(v-if="editLink")
          a(:href="editLink"
          target="_blank"
          rel="noopener noreferrer") {{ editLinkText }}
          OutboundLink

        .last-updated(v-if="lastUpdated")
          span.prefix {{ lastUpdatedText }}:&nbsp;
          span.time {{ lastUpdated }}

    slot(name="bottom")
</template>

<script>
import isNil from 'lodash/isNil'
import { resolvePage, normalize, outboundRE, endingSlashRE } from "../util";

export default {
  props: ["sidebarItems"],
  computed: {
    lastUpdated() {
      const date = this.$page.lastUpdated;
      let formattedDate = "";

      if (date) {
        // Format for standard computer date and drop exact time
        const unformattedDate = date.split(",")[0].split("/");
        const unformattedMonth = unformattedDate[0];
        const unformattedDay = unformattedDate[1];
        const formattedYear = unformattedDate[2];
        // Add padding
        const formattedMonth =
          unformattedMonth.length < 2
            ? "0" + unformattedMonth
            : unformattedMonth;
        const formattedDay =
          unformattedDay.length < 2 ? "0" + unformattedDay : unformattedDay;

        formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;
      }

      return formattedDate;
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === "string") {
        return this.$site.themeConfig.lastUpdated;
      }
      return "Last Updated";
    },
    prev() {
      const prev = this.$page.frontmatter.prev;
      if (prev === false) {
        return undefined;
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path);
      } else {
        return resolvePrev(this.$page, this.sidebarItems);
      }
    },
    next() {
      const next = this.$page.frontmatter.next;
      if (next === false) {
        return undefined;
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path);
      } else {
        return resolveNext(this.$page, this.sidebarItems);
      }
    },
    editLink() {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink;
      const {
        repo,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$site.themeConfig;
      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        );
      }
      return null;
    },
    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      );
    }
  },
  async created() {
    await this.$helpers.setStoreState.apply(this, ["Meta"]);
  },
  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/src` +
          `/${docsBranch}` +
          (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      return (
        base.replace(endingSlashRE, "") +
        `/edit/${docsBranch}` +
        (docsDir ? "/" + docsDir.replace(endingSlashRE, "/") : "") +
        path
      );
    }
  }
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

function find(page, items, offset) {
  const res = [];
  flattern(items, res);
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset];
    }
  }
}

function flattern(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === "group") {
      flattern(items[i].children || [], res);
    } else {
      res.push(items[i]);
    }
  }
}
</script>

<style lang="scss">
@import '../styles/placeholders';

.page {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) - 1rem);
  padding-left: var(--sidebar-width);
  background-color: var(--bg-dark-color);

  .page-theme-switcher {
    position: absolute;
    left: calc(var(--sidebar-width) + 48rem);
    top: 1.25rem;
  }

  .options {
    @extend %wrapper;

    margin-bottom: 1rem;
    width: 100%;

    &-wrap {
      left: var(--sidebar-width);
      max-width: var(--content-width);
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.page-edit {
  @extend %wrapper;

  padding-top: 3rem;
  padding-bottom: 2rem;
  overflow: auto;

  .page-edit--links {
    display: flex;
    justify-content: space-between;
    max-width: 960px;
  }

  .edit-link {
    display: inline-block;

    a {
      color: var(--text-color);
      margin-right: 0.25rem;
      font-weight: bold;
    }
  }

  .last-updated {
    font-size: 0.9em;

    .prefix {
      font-weight: 500;
      color: var(--text-color);
    }

    .time {
      font-weight: 400;
      color: #aaa;
    }
  }
}

.page-nav {
  @extend %wrapper;

  padding-top: 3rem;

  .inner {
    max-width: var(--content-width);
    margin-bottom: 0;
    overflow: auto; // clear float
  }

  .next {
    float: right;
  }

  .next,
  .prev {
    a {
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 719px) {
  .page {
    padding-top: 3rem;
    padding-left: 0;
  }

  .page-theme-switcher {
    display: none !important;
  }

  .page-edit--links {
    flex-wrap: wrap;

    .edit-link {
      flex: 0 0 100%;
      margin-bottom: 1rem;
    }

    .last-updated {
      flex: 0 0 100%;
      text-align: left;
    }
  }
}
</style>
