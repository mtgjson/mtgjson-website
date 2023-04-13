<template lang="pug">
.nav-header
  .nav-header-wrapper
    a.home-link(
      href="/"
      aria-label="Go to homepage"
    )
      img(
        src="/images/assets/logo-mtgjson.svg"
        alt="MTGJSON logo"
        width="50"
        height="40"
      )
    .nav-header-content
      .title MTGJSON
      a.version(
        v-if="version"
        aria-label="Go to MTGJSON changelog"
        href="/changelogs/mtgjson-v5/"
      ) v{{ version }}
      .version(v-else) &nbsp;
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store';

const store = useStore();

const version = computed<string>((): string => store.Meta.version);
</script>

<style lang="scss">
.nav-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &-wrapper {
    display: flex;
    flex-wrap: wrap;

    .home-link {
      display: flex;
    }

    img {
      margin-right: 1rem;
    }

    .title,
    .version {
      line-height: 1rem;
    }

    .title {
      font-weight: 600;
    }

    .version {
      margin-top: 0.25rem;
      font-size: 12px;
      color: var(--version-color);
    }
  }
}
</style>
