<template lang="pug">
main.page
  section.page-content
    Content

  PageFooter

  BackToTop
</template>

<script setup lang="ts">
import PageFooter from './PageFooter.vue';
import BackToTop from './BackToTop.vue';
</script>

<style lang="scss" scoped>
@import '../styles/placeholders';

.page {
  position: relative;
  z-index: 1;
  padding-left: var(--sidebar-width);
  background-color: var(--bg-darker-color);

  &-content {
    @extend %wrapper;
    padding: 0 2rem;

    & > *:first-child {
      margin-top: 0;
      padding-top: 0;
    }
  }
}

@media (max-width: 800px) {
  .page {
    &-content {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}

@media (max-width: 719px) {
  .page {
    padding-top: calc(var(--navbar-height) - 1rem);
    padding-left: 0;
  }
}
</style>
