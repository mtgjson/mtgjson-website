<template lang="pug">
.back-to-top(v-if="show")
  svg(
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49.484 28.284"
    @click="scrollToTop"
  )
    g(transform="translate(-229 -126.358)")
      rect(
        fill="currentColor"
        width="35"
        height="5"
        rx="2"
        transform="translate(229 151.107) rotate(-45)"
      )
      rect(
        fill="currentColor"
        width="35"
        height="5"
        rx="2"
        transform="translate(274.949 154.642) rotate(-135)"
      )
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

const scrollTop = ref<number>(0);
const show = computed<boolean>(() => scrollTop.value > 300);

const getScrollTop = (): number =>
  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  scrollTop.value = 0;
};

onMounted((): void => {
  scrollTop.value = getScrollTop();

  window.addEventListener('scroll', () => {
    scrollTop.value = getScrollTop();
  });
});
</script>

<style lang="scss" scoped>
.back-to-top {
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  width: 2rem;
  z-index: 1;
  padding: 0.25rem 0.5rem 0.5rem;
  background-color: var(--bg-color);
  border-radius: var(--common-radius);

  svg {
    color: var(--accent-color);
  }
}
</style>
