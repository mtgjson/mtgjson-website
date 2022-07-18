<template lang="pug">
a.nav-link.external(
  :href="link",
  :title="item.text",
  :alt="item.text",
  :target="isMailto(link) || isTel(link) ? null : '_blank'",
  :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
) {{ item.text }}
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useData } from "vitepress";
import { isMailto, isTel, ensureExt } from "../util";

const { site } = useData();
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const link = computed(() => {
  return ensureExt(props.item.link);
});
</script>
