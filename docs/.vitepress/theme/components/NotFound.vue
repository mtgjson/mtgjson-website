<template lang="pug">
.error-page
  h1 You're lost...
  p There seems to be a problem or this page can't be found.
  a.cta-link(href="/")
    button.cta-btn Go Home
  .error-page-image
    img(v-if="isLight" src="/images/assets/error-image-light.png")
    img(v-else src="/images/assets/error-image-dark.png")
  small Art illustrated by Jesper Ejsing

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { isDark } = useData();

const isLight = computed<boolean>((): boolean => {
  return !isDark.value;
});
</script>

<style lang="scss" scoped>
.error-page {
  max-width: 570px;
  width: 100%;
  margin: 2rem auto 0;
  padding: 0 2rem;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 2rem;
    text-align: center;
  }

  a {
    color: var(--vp-c-brand);
    font-weight: 600;
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
    font-size: 14px;
    color: var(--vp-c-text-2);
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
