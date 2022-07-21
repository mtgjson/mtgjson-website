<template lang="pug">
.nav-meta
  .nav-meta--logo(title="MTGJSON Logo")
    a(href="/") MTGJSON.com
      svg(
        alt="MTGJSON Logo",
        xmlns="http://www.w3.org/2000/svg",
        version="1.0",
        :width="width",
        viewBox="0 0 5000 3500",
        preserveAspectRatio="xMidYMid meet",
        style="zoom: 1"
      )
        g
          path(
            d="M1950,3374 c-177,-47 -300,-179 -361,-384 c-20,-69 -22,-105 -29,-465 c-9,-431 -13,-464 -73,-532 c-40,-45 -94,-70 -174,-79 l-63,-7 l0,-212 l0,-212 l64,-5 c83,-7 150,-39 182,-88 c52,-78 56,-107 64,-530 c8,-435 10,-450 76,-588 c23,-47 55,-93 92,-130 c100,-101 208,-142 369,-142 l93,0 l0,189 l0,188 l-51,6 c-87,11 -147,66 -181,169 c-6,19 -14,183 -18,393 c-9,385 -16,445 -64,552 c-14,30 -39,72 -56,93 c-34,43 -110,95 -155,106 l-29,7 l37,13 c84,29 164,109 206,206 c47,109 54,176 61,548 c4,197 11,369 17,386 c32,95 73,131 168,147 l65,11 l0,188 l0,188 l-92,-1 c-51,0 -118,-7 -148,-15 z z m-1844.999634,-205.244141 z z"
          )
          path(
            d="M2720,3202 l0,-188 l65,-11 c95,-16 136,-52 168,-147 c6,-17 13,-189 17,-386 c7,-372 14,-439 61,-548 c42,-97 122,-177 206,-206 l37,-13 l-29,-7 c-45,-11 -121,-63 -155,-106 c-17,-21 -42,-63 -56,-93 c-48,-107 -55,-167 -64,-552 c-4,-210 -12,-374 -18,-393 c-34,-103 -94,-158 -181,-169 l-51,-6 l0,-188 l0,-189 l93,0 c161,0 269,41 369,142 c37,37 69,83 92,130 c66,138 68,153 76,588 c8,423 12,452 64,530 c32,49 99,81 182,88 l64,5 l0,212 l0,212 l-62,7 c-81,9 -135,34 -175,79 c-60,68 -64,101 -73,532 c-7,360 -9,396 -29,465 c-34,115 -85,202 -156,269 c-100,93 -203,131 -357,131 l-88,0 l0,-188 z"
          )
          path(
            d="M690,1690 l0,-1340 l285,0 l285,0 l0,165 l0,165 l-140,0 l-140,0 l0,1015 l0,1015 l140,0 l140,0 l0,160 l0,160 l-285,0 l-285,0 l0,-1340 z"
          )
          path(
            d="M3650,2870 l0,-160 l140,0 l140,0 l0,-1015 l0,-1015 l-140,0 l-140,0 l0,-165 l0,-165 l285,0 l285,0 l0,1340 l0,1340 l-285,0 l-285,0 l0,-160 z"
          )
          path(
            d="M321,2496 l-105,-71 l-107,-342 l-108,-342 l108,-395 c59,-218 110,-398 112,-400 c2,-2 49,-33 104,-70 l100,-66 l3,440 c1,242 1,637 0,879 l-3,439 l-104,-72 z"
          )
          path(
            d="M4480,1689 l0,-881 l29,19 c187,120 181,115 196,168 c8,28 57,207 109,398 l95,348 l-108,342 l-107,342 l-107,73 l-107,73 l0,-882 z"
          )
  .nav-meta--link.mobile-hide(v-if="!hideText")
    a(href="/")
      h3 MTGJSON
    .version(v-if="version")
      a.version-number(:href="`/changelog/mtgjson-v5/`") v{{ version }}
</template>

<script setup>
import { onMounted, computed, defineProps } from "vue";
// import { useStore } from "vuex";
import { useStore } from '../store.js';

const props = defineProps({
  width: {
    type: String,
    required: true,
  },
  hideText: {
    type: Boolean,
    required: false,
  },
});

const store = useStore();
const version = computed(() => store.Meta.version);

onMounted(() => {
  store.fetchFromApi("Meta");
});
</script>

<style lang="scss" scoped>
.nav {
  &-meta {
    display: flex;
    align-items: center;

    &--logo {
      display: flex;
      align-items: center;
      a {
        font-size: 0;
      }

      svg {
        height: auto;

        g {
          fill: var(--accent-color);
        }
      }
    }

    &--link {
      margin-left: 10px;

      a {
        text-decoration: none;
      }

      h3 {
        color: var(--text-color);
        margin-bottom: 5px;
        padding: 0;
      }
    }
  }
}

.version {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--text-color);
  position: relative;

  &-number {
    font-size: 12px;
    font-weight: bold;
    color: var(--gray-color);
  }
}
</style>
