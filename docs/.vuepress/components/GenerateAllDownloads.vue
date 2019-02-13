<template lang="pug">
  .download-tables
    GenerateSingleDownload(v-for="(download, index) in downloads" :download="download")
</template>

<script>
import GenerateSingleDownload from './GenerateSingleDownload';
export default {
  name: 'GenerateAllDownloads',
  components: { GenerateSingleDownload },
  data(){
    return {
      downloadDirectory: 'json'
    }
  },
  computed: {
    downloads(){
      return require(`../public/${this.downloadDirectory}/CompiledList.json`);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/includes'
@require '../styles/download'
</style>
