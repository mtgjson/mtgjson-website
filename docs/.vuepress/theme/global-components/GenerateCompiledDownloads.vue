<template lang="pug">
  .download-tables
    blockquote.download-item(v-if="files" v-for="(file, index) in files")
      .download-wrap
        .txt-wrap
          h3 {{ index }}
          small
            span(v-html="file.description")

        //- All sets sqlite database
        ol.dl-wrap(v-if="file.example === 'AllSets'")
          li
            small Files: 
              span(v-for="(format, key) in fileFormats" v-if="format !== 'json'" :key="key") , 
                a(:href="`/${fileDirectory}/${file.example}.json.${format}`") {{ format }}
              span(v-else)
                a(:href="`/${fileDirectory}/${file.example}.json`") {{ format }}
          li.sqlite
            small AllSets as an sqlite database. 
              span Courtesy of 
                a(href="https://github.com/mtgjson/mtgsqlive" target="_blank") mtgsqlive
                span .
          li
            small Files: 
              span(v-for="(format, key) in fileFormatsAllSetsSQL" v-if="format !== 'sqlite'" :key="key") , 
                a(:href="`/${fileDirectory}/${file.example}.sqlite.${format}`") {{ format }}
              span(v-else)
                a(:href="`/${fileDirectory}/${file.example}.sqlite`") {{ format }}

        //- All set files download
        //- All deck files download
        ol.dl-wrap(v-else-if="file.example === 'AllSetFiles' || file.example === 'AllDeckFiles'" )
          li
            small Files: 
              span(v-for="(format, key) in fileFormatsAllSetFiles" v-if="format !== 'zip'" :key="key")
                a(:href="`/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
                span , 
              span(v-else)
                a(:href="`/${fileDirectory}/${file.example}.zip`") {{ format }}

        //- Everything else
        ol.dl-wrap(v-else)
          li
            small Files: 
              span(v-for="(format, key) in fileFormats" v-if="format !== 'json'" :key="key") , 
                a(:href="`/${fileDirectory}/${file.example}.json.${format}`") {{ format }}
              span(v-else)
                a(:href="`/${fileDirectory}/${file.example}.json`") {{ format }}

</template>

<script>
export default {
  name: 'GenerateAllDownloads',
  data() {
    return {
      files: require(`../../public/schemas/Files.schema.json`),
      fileFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      fileFormatsAllSetFiles: ['bz2', 'gz', 'xz', 'zip'],
      fileFormatsAllSetsSQL: ['sqlite', 'bz2', 'gz', 'xz', 'zip'],
      fileDirectory: 'json',
    };
  },
  created(){
    let files = this.files;
    
    // Remove quotes
    for(let file in files){
      if (hasOwnProperty.call(files, file)) {
        const { example } = files[file];
        
        files[file].example = example.replace(/['"]+/g, '');
      }
    }

    this.files = new this.$landcycle(files).schema;
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/download';

.txt-wrap {
  small {
    span {
      text-transform: none !important;
    }
  }
}

.dl-wrap {
  p {
    flex: 0 0 100%;

    small {
      span {
        display: block;
        margin-bottom: 17px;

        span {
          display: inline-block;
          margin: 0;
          
          a {
            text-transform: lowercase !important;

            &::after {
              content: ".";
              color: var(--text-color);
            }
          }
        }
      }
    }
  }
}
</style>
