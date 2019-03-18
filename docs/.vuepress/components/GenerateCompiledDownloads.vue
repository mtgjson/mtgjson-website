<template lang="pug">
  .download-tables
    GenerateSingleDownload(v-if="files" v-for="(file, index) in files" :name="index" :file="file")
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
    for(let file in this.files){
      const example = this.files[file].example;

      if(example.includes('\"')){
        this.files[file].example = example.split('\"')[1]; // remove quotes
      }
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/download';
</style>
