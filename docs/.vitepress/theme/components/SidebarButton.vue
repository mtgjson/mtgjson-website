<template lang="pug">
div.sidebar-button(@click="toggleSidebar" @keydown.enter="toggleSidebar" tabindex="0")
  svg.icon(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512")
    path(d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z")
</template>

<script setup lang='ts'>
const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = (): void => {
  emit('toggle-sidebar');
};
</script>

<style lang="scss">
.sidebar-button {
  cursor: pointer;
  width: 24px;
  height: 24px;
  left: 1rem;

  .icon {
    display: block;
    width: 24px;
    height: 24px;
    fill: var(--text-color);
  }
}
</style>
