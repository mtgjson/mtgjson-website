<template lang="pug">
  .download-tables
    .download-table
      .downtable--toc
        h2 File List
        ul
          li(v-for="(file, name) in files" :key="name" v-if="files")
            a(:href="`#${name}`") {{name}}
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
                  a.dl-btn(download :href="`${$api}${file.example}.json`") JSON
                  a.dl-btn(v-for="(compression, key) in fileBaseCompression" :key="key" download :href="`${$api}${file.example}.json.${compression}`") {{ compression }}

              //- Directory Files
              ol(v-if="file.example.includes('Files')")
                li.text-wrap--download--btn-wrap
                  p.small-header Downloads:
                  a.dl-btn(v-for="(format, key) in fileBaseCompression" :key="key" v-if="format !== 'zip'" download :href="`${$api}${file.example}.tar.${format}`") {{ format }}
                  a.dl-btn(v-else download :href="`${$api}${file.example}.zip`") {{ format }}

              ol(v-if="file.example === 'AllPrintings'")
                li.text-wrap--download--btn-wrap
                  p.small-header SQL Downloads
                    span  (courtesy of <a href="https://github.com/mtgjson/mtgsqlive" rel="noopener noreferrer" target="_blank">mtgsqlive</a>):
                  a.dl-btn(download :href="`${$api}${file.example}.sql`") SQL
                  a.dl-btn(v-for="(compression, key) in fileBaseCompression" :key="key" download :href="`${$api}${file.example}.sql.${compression}`") {{ compression }}
                li.text-wrap--download--btn-wrap
                  p.small-header SQLite Downloads
                    span  (courtesy of <a href="https://github.com/mtgjson/mtgsqlive" rel="noopener noreferrer" target="_blank">mtgsqlive</a>):
                  a.dl-btn(download :href="`${$api}${file.example}.sqlite`") SQLite
                  a.dl-btn(v-for="(compression, key) in fileBaseCompression" :key="key" download :href="`${$api}${file.example}.sqlite.${compression}`") {{ compression }}
</template>

<script>
import files from "../../src/schemas/compiledList.schema.json";
export default {
  name: "DownloadFiles",
  data() {
    return {
      files,
      fileBaseCompression: ["bz2", "gz", "xz", "zip"],
      fileSQLCompression: ["sql", "sqlite"],
    };
  },
  async created() {
    let files = this.files;

    const landcycle = new this.$helpers.jsonMustaches(files);
    landcycle._init();

    // Remove quotes
    for (let file in files) {
      if (hasOwnProperty.call(files, file)) {
        const { example } = files[file];

        files[file].example = example.replace(/['"]+/g, "");
      }
    }

    this.files = await landcycle.schema;
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/download";

.download-tables {
  .download {
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
