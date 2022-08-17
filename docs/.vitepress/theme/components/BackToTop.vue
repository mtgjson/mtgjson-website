<template lang="pug">
.back-to-top(v-if="show" title="Back to top" @click="scrollToTop")
  img(alt="Back to top arrow" src="/images/icon-back-to-top.svg")
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
  border: 1px solid var(--accent-color);

  svg {
    color: var(--accent-color);
  }
}
</style>
