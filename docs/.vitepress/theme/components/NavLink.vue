<template lang="pug">
a.nav-link.external(
  :href="link",
  :title="item.text",
  :alt="item.text",
  :target="isMailto(link) || isTel(link) ? null : '_blank'",
  :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
) {{ item.text }}
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isMailto, isTel, ensureExt } from '../util';

interface Props {
  item: {
    text: string;
    link: string;
  };
}

const props = defineProps<Props>();

const link = computed((): string => {
  return ensureExt(props.item.link);
});
</script>
