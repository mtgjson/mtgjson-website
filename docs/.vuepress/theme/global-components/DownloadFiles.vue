<template lang="pug">
  .download-tables
    .download-table(v-if="!files")
      .loader
    .download-table(v-else)
      h2 File List
      .download--toc
        ul
          li(v-for="(file, name) in filesListFirst" :key="name" v-if="files")
            a(:href="`#${file.example}`") {{file.example}}
        ul
          li(v-for="(file, name) in filesListSecond" :key="name" v-if="files")
            a(:href="`#${file.example}`") {{file.example}}
      .schema-table(v-for="(file, name) in files" :key="name" v-if="files")
        .download-wrap
          .text-wrap
            .text-wrap--details
              h2(:id="name") {{ name }}
              p(v-html="file.description")

            .text-wrap--download
              //- Individual Files
              ol(v-if="!file.example.includes('Files')")
                li.text-wrap--download--btn-wrap
                  p.small-header Downloads:
                  a.dl-btn(download="true" target="_blank" :href="`${$api}${file.example}.json`") JSON
                  a.dl-btn(download="true" target="_blank" v-for="(compression, key) in fileBaseCompression" :key="key" :href="`${$api}${file.example}.json.${compression}`") {{ compression }}

              //- Directory Files
              ol(v-if="file.example.includes('Files')")
                li.text-wrap--download--btn-wrap
                  p.small-header Downloads:
                  a.dl-btn(download="true" target="_blank" v-for="(format, key) in fileBaseCompression" :key="key" v-if="format !== 'zip'" :href="`${$api}${file.example}.tar.${format}`") {{ format }}
                  a.dl-btn(download="true" target="_blank" v-else :href="`${$api}${file.example}.zip`") {{ format }}

              ol(v-if="file.example === 'AllPrintings'")
                li.text-wrap--download--btn-wrap
                  p.small-header SQL Downloads
                    span  (courtesy of <a href="https://github.com/mtgjson/mtgsqlive" rel="noopener noreferrer" target="_blank">mtgsqlive</a>):
                  a.dl-btn(download="true" target="_blank" :href="`${$api}${file.example}.sql`") SQL
                  a.dl-btn(download="true" target="_blank" v-for="(compression, key) in fileBaseCompression" :key="key" :href="`${$api}${file.example}.sql.${compression}`") {{ compression }}
                li.text-wrap--download--btn-wrap
                  p.small-header SQLite Downloads
                    span  (courtesy of <a href="https://github.com/mtgjson/mtgsqlive" rel="noopener noreferrer" target="_blank">mtgsqlive</a>):
                  a.dl-btn(download="true" target="_blank" :href="`${$api}${file.example}.sqlite`") SQLite
                  a.dl-btn(download="true" target="_blank" v-for="(compression, key) in fileBaseCompression" :key="key" :href="`${$api}${file.example}.sqlite.${compression}`") {{ compression }}
</template>

<script>
import filesSchema from "../../src/schemas/compiledList.schema.json";
export default {
  name: "DownloadFiles",
  data() {
    return {
      defaultFiles: null,
      fileBaseCompression: ["bz2", "gz", "xz", "zip"],
      fileSQLCompression: ["sql", "sqlite"],
    };
  },
  computed: {
    files(){
      return this.defaultFiles;
    },
    filesListFirst(){
      const filesValues = Object.values(this.files);
      return filesValues.slice(0, filesValues.length / 2)
    },
    filesListSecond(){
      const filesValues = Object.values(this.files);
      return filesValues.slice(filesValues.length / 2, filesValues.length)
    }
  },
  async beforeMount() {
    let files = filesSchema;

    const landcycle = new this.$helpers.jsonMustaches(files);
    landcycle._init();

    // Remove quotes
    for (let file in files) {
      if (hasOwnProperty.call(files, file)) {
        const { example } = files[file];

        files[file].example = example.replace(/['"]+/g, "");
      }
    }

    this.defaultFiles = await landcycle.schema;
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/download";

.download-tables {
  .download {
    &--toc {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      ul {
        grid-column: span 1;
      }
    }
    &-item {
      .download-wrap {
        .text-wrap {
          small {
            span {
              display: block;
              font-weight: normal !important;
              text-transform: none !important;
              margin-bottom: 15px;
            }
          }

          p {
            margin-bottom: 15px;
          }

          ol {
            li {
              display: block;
              margin-bottom: 10px;

              small {
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
