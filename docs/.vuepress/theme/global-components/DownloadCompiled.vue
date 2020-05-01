<template lang="pug">
  .download-tables
    blockquote.download-item(v-if="files" v-for="(file, name) in files" :key="name")
      .download-wrap
        .text-wrap
          .text-wrap--details
            h3 {{ name }}
            small
              span(v-html="file.description")

          .text-wrap--download
            //- Individual Files
            ol(v-if="!file.example.includes('Files')")
              li.text-wrap--download--btn-wrap
                small Download Files:
                span
                  a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.json`") JSON
                span(v-for="(compression, key) in fileBaseCompression" :key="key")
                  a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.json.${compression}`") {{ compression }}

            //- Directory Files
            ol(v-if="file.example.includes('Files')")
              li.text-wrap--download--btn-wrap
                small Download Files:
                span(v-for="(format, key) in fileBaseCompression" :key="key" v-if="format !== 'zip'")
                  a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.tar.${format}`") {{ format }}
                span(v-else)
                  a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.zip`") {{ format }}

            ol(v-if="file.example === 'AllPrintings'")
                li.text-wrap--download--btn-wrap
                  small SQL Download Files:
                  span
                    a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.sql`") SQL
                  span(v-for="(compression, key) in fileBaseCompression" :key="key")
                    a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.sql.${compression}`") {{ compression }}
                li.text-wrap--download--btn-wrap
                  small SQLite Download Files:
                  span
                    a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.sqlite`") SQLite
                  span(v-for="(compression, key) in fileBaseCompression" :key="key")
                    a.dl-btn(download :href="`${$env}/${fileDirectory}/${file.example}.sqlite.${compression}`") {{ compression }}
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
      fileDirectory: ""
    };
  },
  async created() {
    let files = this.files;

    const landcycle = new this.$landcycle(files);
    landcycle._init();

    this.fileDirectory = await this.$api;

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
      // &:first-of-type {
      //   border-color: var(--orange-color);
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
