<template lang="pug">
  .download-table
    .download-item
      .download-wrap
        .txt-wrap
          h3(:id="download") {{ download }}.json
            a(:href="'#' + download" aria-hidden="true" class="header-anchor") #
        .dl-wrap
          a(v-for="(format, key) in downloadFormats" v-if="format !== '.json'" :key="key" :href="`/${downloadDirectory}/${download}.json${format}`") {{ format }}
          a(v-else v-bind:href="`/${downloadDirectory}/${download}.json`") {{ format }}
</template>

<script>
export default {
  name: 'GenerateSingleDownload',
  props: [ 'download' ],
  data() {
    return {
      downloadDirectory: 'json',
      downloadFormats: ['.bz2', '.gz', '.json', '.xz', '.zip']
    };
  }
};
</script>