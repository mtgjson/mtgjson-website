<template lang="pug">
.error-page
  .error-page-content
    h1 You're lost...
    p There seems to be a problem or this page can't be found.
    strong
      p(v-if="suggestedPath") Are you looking for the {{ ' ' }}
        a(:href="suggestedPath.path") {{ suggestedPath.title }}
        span {{' '}} documentation?
    a.cta-link(href="/")
      button.cta-btn Go Home
    .error-page-image
      img(v-if="isLight" src="/images/assets/error-image-light.png")
      img(v-else src="/images/assets/error-image-dark.png")
    small Art illustrated by Jesper Ejsing
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useData } from 'vitepress';
import type { Route } from 'vitepress';
import type { IPagesData } from '../types';

const route: Route = useRoute();
const { theme, isDark } = useData();

const isLight = computed<boolean>((): boolean => {
  return !isDark.value;
});

const pages: IPagesData[] = theme.value.pages;
const currentPath: string = route.path;
const hasHTMLExtension: boolean = currentPath.includes('.html');
const hasTrailingSlash: boolean = currentPath.endsWith('/');

let possiblePath: string | null = null;

if (hasHTMLExtension) {
  possiblePath = currentPath.split('.html')[0] + '/';
}

if (!hasHTMLExtension && !hasTrailingSlash) {
  possiblePath = currentPath + '/';
}

const suggestedPathData: IPagesData = pages.filter((page: IPagesData): boolean => page.path === possiblePath)[0];
const suggestedPath = ref<IPagesData | null>(suggestedPathData);
</script>

<style lang="scss" scoped>
.error-page {
  max-width: 570px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  &-content {
    margin-top: 2rem;
    text-align: center;

    h1 {
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      margin-bottom: 2rem;
      text-align: center;
    }

    a {
      color: var(--vp-c-brand);
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

      &.cta-link {
        display: block;
        margin: 0 auto 3rem 0;
        .cta-btn {
          margin: 0;
        }
      }
    }

    small {
      display: block;
      text-align: center;
      font-size: 12px;
      color: var(--vp-c-text-2);
    }
  }

  &-image {
    position: relative;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--vp-c-divider);

    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      margin: 0 auto;
      border-radius: 11px;
    }
  }
}
</style>
