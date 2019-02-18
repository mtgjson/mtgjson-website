<template lang="pug">
  .download-tables
    GenerateSingleDownload(v-for="(download, index) in allFiles" :download="download" :descriptions="descriptions")
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
    allFiles(){
      const src = require(`../public/${this.downloadDirectory}/CompiledList.json`);

      // compat for new structure
      if(src.files){
        return src.files
      } else {
        return src
      }
    },
    descriptions(){
      return require(`../public/schemas/CompiledList.schema.json`);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/includes'
@require '../styles/download'
</style>
