<template lang="pug">
main.home
  Content.home-content
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
@import '../styles/placeholders';

.home {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) - 1rem);
  background-color: var(--bg-darker-color);

  &-content {
    max-width: 960px;
    padding: 0 2rem;
    height: 100%;
  }
}
</style>
