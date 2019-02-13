<template lang="pug">
  .download-tables
    GenerateSingleDownload(v-for="(download, index) in downloads" :download="download")
</template>

<script>
import GenerateSingleDownload from './GenerateSingleDownload';
export default {
  name: 'GenerateAllDownloads',
  components: { GenerateSingleDownload },
  computed: {
    downloads(){
      return this.$page.frontmatter.downloads
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/includes'
@require '../styles/download'
</style>
