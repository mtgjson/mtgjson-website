<template lang="pug">
.error-page#not-found-error
  div(v-if="!canRedirect")
    h1 Page Not Found
    p Sorry, there seems to be a problem or this page no longer exists. Go back to your previous page, check the URL or use one of these popular links below:
    p(v-if="suggestedPath") Did you mean to go to {{ ' ' }}
      a(:href="suggestedPath.path") {{ suggestedPath.title }}
      span ?
  div(v-else)
    h1 Page Not Found
    p We think we know where you want to go. Redirecting you
      span(v-if="suggestedPath") {{' '}} to {{' '}}
        a(:href="suggestedPath.path") {{ suggestedPath.title }}
      span {{' '}}in 10 seconds...
  p You can also go back to your previous page, check the URL or use one of these popular links below:
  ul
    li
      a(href="/") Home
    li
      a(href="/faq/") F.A.Q.
    li
      a(href="/downloads/all-files/") All Files
    li
      a(href="/abstract-models/all-prices/") All Prices
    li
      a(href="/data-models/card-set/") Card (Set) Model
    li
      a(href="/data-models/card-atomic/") Card (Atomic) Model
    li
      a(href="/data-models/set/") Set Model
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter, useData } from 'vitepress';
import type { ISearchResult } from '../types';

const route = useRoute();
const router = useRouter();
const { theme } = useData();

const pages: ISearchResult[] = theme.value.pages;
const currentPath: string = route.path;
const hasHTMLExtension: boolean = currentPath.includes('.html');
const hasTrailingSlash: boolean = currentPath.endsWith('/');
let possiblePath: string | null = null;

if(hasHTMLExtension){
  possiblePath = currentPath.split('.html')[0] + '/';
}

if(!hasHTMLExtension && !hasTrailingSlash) {
  possiblePath = currentPath + '/';
}

const suggestedPathData = pages.filter((page: ISearchResult): boolean => page.path === possiblePath)[0];
const suggestedPath = ref<ISearchResult | null>(suggestedPathData);
const canRedirect = ref<boolean>(suggestedPath?.value?.path === possiblePath);

if(canRedirect.value){
  setTimeout((): void => {
    router.go(possiblePath);
  }, 10000);
}
</script>

<style lang="scss" scoped>
.error-page {
  ul {
    li {
      list-style-type: disc;
    }
  }
}
</style>
