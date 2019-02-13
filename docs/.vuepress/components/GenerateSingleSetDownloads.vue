<template lang="pug">
  .download-tables
    .download-table(v-for="(set, key) in sets")
      .download-item
        .download-wrap
          .img-wrap
            div(:class="`ss ss-${set.code.toLowerCase()}`")
          .txt-wrap
            p {{ set.name }} - {{ set.code }}
            small {{ set.releaseDate }}
          .dl-wrap
            a(v-for="(format, key) in downloadFormats" v-if="format !== '.json'" :key="key" :href="`/${downloadDirectory}/${set.code}.json${format}`") {{ format }}
            a(v-else v-bind:href="`/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
export default {
  name: 'GenerateSingleSetDownloads',
  data() {
    return {
      /**
       * @TODO fix environment variables and aliases
       */
      downloadDirectory: 'json',
      downloadFormats: ['.bz2', '.gz', '.json', '.xz', '.zip']
    };
  },
  computed: {
    sets() {
      return require(`../public/${this.downloadDirectory}/${
        this.$page.frontmatter.download
      }.json`);
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/includes'
@require '../styles/download'

.dl-wrap
  justify-content: start !important;
  flex: 0 0 100% !important;
  
  +breakpoint(medium)
    justify-content: end !important;
    flex: 1 !important;

</style>
