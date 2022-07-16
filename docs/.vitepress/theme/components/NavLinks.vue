<template lang="pug">
nav.nav-links
  .nav-item(v-for="item in userLinks", :key="item.link")
    NavLink(:item="item")
</template>

<script setup>
import { computed } from "vue";
import { useData } from "vitepress";

import NavLink from "./NavLink.vue";

const { theme } = useData();

const userLinks = theme.value.nav;
</script>

<style lang="scss">
.nav-links {
  position: relative;
  display: flex;
  align-items: center;

  .nav-item {
    position: relative;
    line-height: 1.7rem;
    margin-right: 1rem;
    display: inline-flex;
    align-items: center;

    &-switcher {
      margin-left: 25px;
    }

    &::before {
      content: "";
      position: absolute;
      display: block;
      height: 25px;
      width: 25px;
      left: 0;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      pointer-events: none;
    }

    a {
      font-size: 0;
      display: block;
      color: transparent;
      margin: 0 auto;
      height: 25px;
      width: 25px;

      svg {
        display: none;
        margin-left: 3px;
      }
    }

    &:nth-of-type(1) {
      &::before {
        background-image: url("/images/icon-discord.svg");
      }
    }

    &:nth-of-type(2) {
      &::before {
        background-image: url("/images/icon-twt.svg");
      }
    }

    &:nth-of-type(3) {
      &::before {
        background-image: url("/images/icon-patreon.svg");
      }
    }

    &:nth-of-type(4) {
      &::before {
        background-image: url("/images/icon-github.svg");
      }
    }
  }
}
</style>
