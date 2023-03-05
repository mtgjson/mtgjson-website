<template lang="pug">
Layout
  template(#sidebar-nav-before)
    Searchbar
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import Searchbar from '../components/Searchbar.vue';

const { Layout } = DefaultTheme;
</script>
