<template lang="pug">
  .download-tables
    GenerateSingleDownload(v-if="files" v-for="(file, index) in files" :file="file")
</template>

<script>
import GenerateSingleDownload from './GenerateSingleDownload';
export default {
  name: 'GenerateAllDownloads',
  components: { GenerateSingleDownload },
  data() {
    return {
      defaultFiles: [],
    };
  },
  created() {
    this.defaultFiles = require(`../public/schemas/Files.schema.json`).map(
      file => {
        file['example'] = file['example'].split('\"')[1]; // remove quotes
        return file;
      }
    );
  },
  computed: {
    files() {
      return this.defaultFiles;
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/includes';
@require '../styles/download';
</style>
