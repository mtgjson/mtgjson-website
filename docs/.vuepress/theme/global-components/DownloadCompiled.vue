<template lang="pug">
  .download-tables
    blockquote.download-item(v-if="files" v-for="(file, index) in files")
      .download-wrap
        .txt-wrap
          h3 {{ index }}
          small
            span(v-html="file.description")

        ol.dl-wrap
          //- Individual Files
          span(v-if="!file.example.includes('Files')")
            li.dl-wrap--btn-wrap
              small JSON Files:
              span
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.json`") JSON
              span(v-for="(compression, key) in fileBaseCompression")
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.json.${compression}`") {{ compression }}

          //- Directory Files
          span(v-if="file.example.includes('Files')")
            li.dl-wrap--btn-wrap
              small Directory Files:
              span(v-for="(format, key) in fileBaseCompression" v-if="format !== 'zip'")
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
              span(v-else)
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.zip`") {{ format }}

          span(v-if="file.example === 'AllPrintings'")
            li.dl-wrap--btn-wrap
              small SQL Files:
              span
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.sql`") SQL
              span(v-for="(compression, key) in fileBaseCompression")
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.sql.${compression}`") {{ compression }}
            li.dl-wrap--btn-wrap
              small SQLite Files:
              span
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.sqlite`") SQLite
              span(v-for="(compression, key) in fileBaseCompression")
                a.dl-btn(:href="`${$env}/${fileDirectory}/${file.example}.sqlite.${compression}`") {{ compression }}
            li.sqlite
              small SQL/SQLite database courtesy of <a href="https://github.com/mtgjson/mtgsqlive" target="_blank">mtgsqlive</a>.

</template>

<script>
export default {
  name: 'AllDownloads',
  data() {
    return {
      files: require(`../../public/schemas/Files.schema.json`),
      fileBaseCompression: ['bz2', 'gz', 'xz', 'zip'],
      fileSQLCompression: ['sql','sqlite'],
      fileDirectory: 'files',
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

.download-item:first-of-type {
  border-color:orange;
}

.dl-wrap {
  &--btn-wrap {
    small {
      color: var(--gray-color)
    }
  }
}
</style>
