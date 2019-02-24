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
      files: require(`../public/schemas/Files.schema.json`),
    };
  },
  created(){
    this.files = this.files.map(
      file => {
        const key = 'value';
        const name = file[key];

        if(name.includes('\"')){
          file[key] = name.split('\"')[1]; // remove quotes
        }

        return file;
      }
    );
  }
};
</script>

<style lang="stylus">
@require '../styles/includes';
@require '../styles/download';
</style>
