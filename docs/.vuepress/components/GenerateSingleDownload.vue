<template lang="pug">
  .download-table
    .download-item
      .download-wrap
        .txt-wrap
          p(:id="download") {{ download }}
            a(:href="'#' + download" aria-hidden="true" class="header-anchor") #
          small
            span {{ descriptions[download].description }}
        .dl-wrap
          a.cta-btn(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key" :href="`/${downloadDirectory}/${download}.json.${format}`") {{ format }}
          a.cta-btn(v-else v-bind:href="`/${downloadDirectory}/${download}.json`") {{ format }}
</template>

<script>
export default {
  name: 'GenerateSingleDownload',
  props: [ 'download', 'descriptions' ],
  data() {
    return {
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
    };
  }
};
</script>

<style lang="stylus" scoped>
  .download-table {
    border-top-width: 0 !important;

    &:first-of-type {
      border-top-width: 1px !important;
    }
  }
</style>
