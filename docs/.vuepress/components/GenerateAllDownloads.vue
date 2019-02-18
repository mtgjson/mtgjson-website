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
      return require(`../public/schemas/Files.schema.json`);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/includes'
@require '../styles/download'
</style>
