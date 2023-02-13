<template lang="pug">
.social-links
  .social-links-item(
    v-for="(item, key) in socialLinks",
    :key="key",
    :class="item.class"
  )
    a.external(
      :href="item.link",
      :title="item.text",
      :alt="item.text",
      :target="'_blank'",
      :rel="'noopener noreferrer'"
    ) {{ item.text }}
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import type { TSocialLink } from '../types';

const { theme: themeData } = useData();

const socialLinks: TSocialLink[] = themeData.value.socialLinks;
</script>

<style lang="scss">
.social {
  &-links {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-links-item {
    position: relative;
    display: inline-flex;
    align-items: center;

    &-switcher {
      margin-left: 25px;
    }

    &::before {
      content: '';
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

    &.github {
      &::before {
        background-image: url('/images/icons/icon-github.svg');
      }
    }

    &.discord {
      &::before {
        background-image: url('/images/icons/icon-discord.svg');
      }
    }

    &.twitter {
      &::before {
        background-image: url('/images/icons/icon-twitter.svg');
      }
    }

    &.patreon {
      &::before {
        background-image: url('/images/icons/icon-patreon.svg');
      }
    }

    a {
      font-size: 0;
      display: block;
      color: transparent;
      margin: 0 auto;
      height: 25px;
      width: 25px;
    }
  }
}
</style>
