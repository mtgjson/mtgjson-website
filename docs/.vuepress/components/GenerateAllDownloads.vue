<template lang="pug">
  .download-tables
    GenerateSingleDownload(v-if="files" v-for="(file, index) in files" :file="file")
</template>

<script>
import GenerateSingleDownload from './GenerateSingleDownload';
export default {
  name: 'GenerateAllDownloads',
  components: { GenerateSingleDownload },
  computed: {
    files(){
      const list = require(`../public/schemas/Files.schema.json`).map( file => {
        file["example"] = file["example"].split('\"')[1]; // remove quotes
        return file
      });
      return list;
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/includes'
@require '../styles/download'
</style>
