<template lang="pug">
  .download-tables
    GenerateSingleDeckDownload(v-if="decks" v-for="(deck, index) in decks" :deck="deck")
</template>

<script>
import GenerateSingleDeckDownload from './GenerateSingleDeckDownload';
export default {
  name: 'GenerateAllDownloads',
  components: { GenerateSingleDeckDownload },
  data() {
    return {
      decks: require(`../public/json/decks/DeckLists.json`).decks,
    };
  }
};
</script>

<style lang="stylus">
@require '../styles/includes';
@require '../styles/download';
</style>
