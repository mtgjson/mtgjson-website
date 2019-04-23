<template lang="pug">
  .download-tables
    .download-table(v-if="files" v-for="(file, index) in files")
      .download-item(v-if="file")
        .download-wrap
          .txt-wrap
            h3 {{ index }}
            small
              span {{ file.description }}
          //- All sets sqlite database
          .dl-wrap(v-if="file.example === 'AllSets'")
            a.cta-btn(v-for="(format, key) in fileFormats" v-if="format !== 'sqlite'" :key="key" :href="`/${fileDirectory}/${file.example}.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}`") {{ format }}
            p
              small
                span AllSets as an sqlite database. 
                  span Courtesy of 
                    a(href="https://github.com/mtgjson/mtgsqlive" target="_blank") mtgsqlive
              a.cta-btn(v-for="(format, key) in fileFormatsAllSetsSQL" v-if="format !== 'sqlite'" :key="key" :href="`/${fileDirectory}/${file.example}.sqlite.${format}`") {{ format }}
              a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.sqlite`") sqlite
          //- All set files download
          .dl-wrap(v-else-if="file.example === 'AllSetFiles'")
            a.cta-btn(v-for="(format, key) in fileFormatsAllSetFiles" v-if="format !== 'zip'" :key="key" :href="`/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.zip`") {{ format }}
          //- All deck files download
          .dl-wrap(v-else-if="file.example === 'AllDeckFiles'")
            a.cta-btn(v-for="(format, key) in fileFormatsAllSetFiles" v-if="format !== 'zip'" :key="key" :href="`/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.zip`") {{ format }}
          //- Deck lists
          .dl-wrap(v-else-if="file.example === 'DeckLists'")
            a.cta-btn(v-for="(format, key) in fileFormats" v-if="format !== 'json'" :key="key" :href="`/${fileDirectory}/${file.example}.json.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.json`") {{ format }}
          //- Everything else
          .dl-wrap(v-else)
            a.cta-btn(v-for="(format, key) in fileFormats" v-if="format !== 'json'" :key="key" :href="`/${fileDirectory}/${file.example}.json.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${fileDirectory}/${file.example}.json`") {{ format }}
</template>

<script>
export default {
  name: 'GenerateAllDownloads',
  data() {
    return {
      files: require(`../../public/schemas/Files.schema.json`),
      fileFormats: ['json', 'zip', 'bz2', 'gz', 'xz'],
      fileFormatsAllSetFiles: ['zip', 'bz2', 'gz', 'xz'],
      fileFormatsAllSetsSQL: ['sqlite', 'zip', 'bz2', 'gz', 'xz'],
      fileDirectory: 'json',
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
              color: $textColor;
            }
          }
        }
      }
    }
  }
}
</style>
