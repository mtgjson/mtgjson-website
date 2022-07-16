<template lang="pug">
main.page
  Content.page-content

  .page-nav(v-if="prev || next")
    p.inner
      span.prev(v-if="prev")
        a.prev(:href="prev.link") ← {{ prev.text }}

      span.next(v-if="next")
        a.prev(:href="next.link") {{ next.text }} →

  footer.page-edit
    .page-edit--links
      .edit-link.link-inline-image.github(v-if="editLink")
        a(:href="editLink.link", target="_blank", rel="noopener noreferrer") {{ editLink.text }}

      .last-updated(v-if="lastUpdated")
        span.prefix {{ lastUpdatedText }}:&nbsp;
        span.time {{ lastUpdated }}
</template>

<script setup>
import { computed } from "vue";
import { useData } from "vitepress";

const { theme, page } = useData();

const editLink = computed(() => {
  const editLink = theme.value.editLink;
  const pattern = editLink.pattern;
  const text = editLink.text;
  const link = pattern.replace(":path", page.value.relativePath);

  return {
    pattern,
    link,
    text,
  };
});

const lastUpdated = computed(() => {
  const date = page.value.lastUpdated;
  let formattedDate = null;

  if (date) {
    // Format for standard computer date and drop exact time
    const unformattedDate = date.split(",")[0].split("/");
    const unformattedMonth = unformattedDate[0];
    const unformattedDay = unformattedDate[1];
    const formattedYear = unformattedDate[2];
    // Add padding
    const formattedMonth =
      unformattedMonth.length < 2 ? "0" + unformattedMonth : unformattedMonth;
    const formattedDay =
      unformattedDay.length < 2 ? "0" + unformattedDay : unformattedDay;

    formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;
  }

  return formattedDate;
});

const sidebarItems = theme.value.sidebar;

const prev = computed(() => resolvePrev(page, sidebarItems));
const next = computed(() => resolveNext(page, sidebarItems));

const resolvePrev = (page, items) => {
  return find(page, items, -1);
};

const resolveNext = (page, items) => {
  return find(page, items, 1);
};

const find = (page, items, offset) => {
  const res = [];
  flattern(items, res);
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    const relativePath = "/" + page.value.relativePath.split("index.md")[0];

    if (cur.link === relativePath) {
      return res[i + offset];
    }
  }
};

const flattern = (items, res) => {
  for (let i = 0, l = items.length; i < l; i++) {
    const hasChildren = items[i].items && items[i].items.length > 0;

    if (hasChildren) {
      flattern(items[i].items || [], res);
    } else {
      res.push(items[i]);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/placeholders";

.page {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) - 1rem);
  padding-left: var(--sidebar-width);
  background-color: var(--bg-2-color);

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
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 960px;
  }

  .edit-link {
    display: inline-block;
    flex: 0 0 100%;
    margin-bottom: 1rem;
    margin-left: 0;

    a {
      color: var(--text-color);
      margin-right: 0.25rem;
      font-weight: bold;
    }
  }

  .last-updated {
    font-size: 0.9em;
    flex: 0 0 100%;

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
    padding: 4px; // show focus outline
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
    .edit-link {
      margin-bottom: 1rem;
    }

    .last-updated {
      text-align: left;
    }
  }
}
</style>
