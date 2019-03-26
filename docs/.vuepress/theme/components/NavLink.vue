<template lang="pug">
  router-link.nav-link(
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact") {{ item.text }}
  a.nav-link.external(
    v-else
    :href="link"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'") {{ item.text }}
    
    OutboundLink
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util';

export default {
  props: {
    item: {
      required: true,
    },
  },
  computed: {
    link() {
      return ensureExt(this.item.link);
    },
    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        );
      }
      return this.link === '/';
    },
  },
  methods: {
    isExternal,
    isMailto,
    isTel,
  },
};
</script>
