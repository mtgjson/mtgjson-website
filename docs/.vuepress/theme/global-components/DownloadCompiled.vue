<template lang="pug">
  .download-tables
    .download-table
      blockquote.download-item(v-for="(file, name) in files" :key="name" v-if="files && file.example !== 'AllPrintingsCSVFiles'")
        .download-wrap
          .text-wrap
            .text-wrap--details
              h4(:id="name") {{ name }}
              p(v-html="file.description")

            .text-wrap--download
              //- Individual Files
              ol(v-if="!file.example.includes('Files')")
                li.text-wrap--download--btn-wrap
                  small Download Files:
                  span
                    a.dl-btn(download :href="`${$api}${file.example}.json`") JSON
                  span(v-for="(compression, key) in fileBaseCompression" :key="key")
                    a.dl-btn(download :href="`${$api}${file.example}.json.${compression}`") {{ compression }}

              //- Directory Files
              ol(v-if="file.example.includes('Files')")
                li.text-wrap--download--btn-wrap
                  small Download Files:
                  span(v-for="(format, key) in fileBaseCompression" :key="key" v-if="format !== 'zip'")
                    a.dl-btn(download :href="`${$api}${file.example}.tar.${format}`") {{ format }}
                  span(v-else)
                    a.dl-btn(download :href="`${$api}${file.example}.zip`") {{ format }}

              ol(v-if="file.example === 'AllPrintings'")
                li.text-wrap--download--btn-wrap
                  small CSV Download Files:
                  span
                    a.dl-btn(download :href="`${$api}AllPrintingsCSVFiles.tar.bz2`") BZ2
                    a.dl-btn(download :href="`${$api}AllPrintingsCSVFiles.tar.gz`") GZ
                    a.dl-btn(download :href="`${$api}AllPrintingsCSVFiles.tar.xz`") XZ
                    a.dl-btn(download :href="`${$api}AllPrintingsCSVFiles.zip`") ZIP
                li.text-wrap--download--btn-wrap
                  small SQL Download Files:
                  span
                    a.dl-btn(download :href="`${$api}${file.example}.sql`") SQL
                  span(v-for="(compression, key) in fileBaseCompression" :key="key")
                    a.dl-btn(download :href="`${$api}${file.example}.sql.${compression}`") {{ compression }}
                li.text-wrap--download--btn-wrap
                  small SQLite Download Files:
                  span
                    a.dl-btn(download :href="`${$api}${file.example}.sqlite`") SQLite
                  span(v-for="(compression, key) in fileBaseCompression" :key="key")
                    a.dl-btn(download :href="`${$api}${file.example}.sqlite.${compression}`") {{ compression }}
                li.sqlite
                  p SQL/SQLite database courtesy of <a href="https://github.com/mtgjson/mtgsqlive" rel="noopener noreferrer" target="_blank">mtgsqlive</a>.
</template>

<script>
import files from "../../public/schemas/compiledList.schema.json";
export default {
  name: "AllDownloads",
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
      // &:nth-of-type(even) {
      //   grid-column: 1 / 3;
      // }

      // &:nth-of-type(odd) {
      //   grid-column: 3 / 5;
      // }

      // &:first-of-type {
      //   grid-column: span 4;
      // }

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
