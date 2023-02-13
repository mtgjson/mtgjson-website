<template lang="pug">
.nav-meta
  .nav-meta--logo(title="MTGJSON")
    a(
      href="/"
      :style="{width: width, height: height ? height : 'auto'}"
    ) MTGJSON.com
      img(alt="MTGJSON Logo", :style="{width: width, height: height ? height : 'auto'}", src="/images/assets/logo-mtgjson.svg")
  .nav-meta--link(v-if="!hideText")
    a(href="/")
      h3 MTGJSON
    .version(v-if="version")
      a.version-number(
        href="/changelogs/mtgjson-v5/"
      ) v{{ version }}
    .version(v-else)
      a.version-number &nbsp;
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from '../store.js';

type Props = {
  width: string;
  height?: string;
  hideText?: boolean;
};

const props = defineProps<Props>();

const store = useStore();

const version = computed(() => store.Meta.version);

onMounted(async (): Promise<void> => {
  if (Object.keys(store.Meta).length === 0 && !props.hideText) {
    await store.fetchFromApi('Meta');
  }
});
</script>

<style lang="scss" scoped>
.nav {
  &-meta {
    display: flex;
    align-items: center;
    justify-content: center;

    &--logo {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        font-size: 0;
      }

      img {
        height: auto;
      }
    }

    &--link {
      margin-left: 0.5rem;

      a {
        text-decoration: none;
      }

      h3 {
        color: var(--text-color);
        margin-bottom: 5px;
        padding: 0;
      }
    }
  }
}

.version {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--text-color);
  position: relative;

  &-number {
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--version-color);
  }
}
</style>
