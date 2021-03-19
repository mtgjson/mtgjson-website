<template lang="pug">
  .download-links
    div(v-if="file === 'AllPrintings'")
      div
        p.small-header Downloads:
        a.download-links--link(v-for="(format, key) in jsonFormats" v-if="format !== 'json'" :key="`json-${key + format}`" download :href="`${$api}${file}.json.${format}`") {{ format }}
        a.download-links--link(v-else download :href="`${$api}${file}.json`") {{ format }}
      div
        p.small-header SQL Downloads:
        a.download-links--link(v-for="(format, key) in sqlFormats" v-if="format !== 'sql'" :key="`sql-${key + format}`" download :href="`${$api}${file}.sql.${format}`") {{ format }}
        a.download-links--link(v-else download :href="`${$api}${file}.sql`") {{ format }}
      div
        p.small-header SQLite Downloads:
        a.download-links--link(v-for="(format, key) in sqliteFormats" v-if="format !== 'sqlite'" :key="`sqlite-${key + format}`" download :href="`${$api}${file}.sqlite.${format}`") {{ format }}
        a.download-links--link(v-else download :href="`${$api}${file}.sqlite`") {{ format }}
    div(v-else-if="file.includes('Files')")
      div
        p.small-header File Downloads:
        a.download-links--link(v-for="(format, key) in fileFormats" v-if="format !== 'zip'" :key="key" download :href="`${$api}${file}.tar.${format}`") {{ format }}
        a.download-links--link(v-else download :href="`${$api}${file}.zip`") {{ format }}
    div(v-else)
      div
        p.small-header Downloads:
        a.download-links--link(v-for="(format, key) in jsonFormats" v-if="format !== 'json'" :key="key" download :href="`${$api}${file}.json.${format}`") {{ format }}
        a.download-links--link(v-else download :href="`${$api}${file}.json`") {{ format }}

</template>

<script>
export default {
  name: "DownloadField",
  props: [ "fileName" ],
  data(){
    return {
      sqlFormats: ["sql", "bz2", "gz", "xz", "zip"],
      sqliteFormats: ["sqlite", "bz2", "gz", "xz", "zip"],
      jsonFormats: ["json", "bz2", "gz", "xz", "zip"],
      fileFormats: ["bz2", "gz", "xz", "zip"]
    }
  },
  computed: {
    file(){
      let file = this.fileName.match(/(?<=")(.*)(?=")/g);

      if(file === null){
        file = this.fileName;
      }

      return file;
    }
  }
};
</script>

<style lang="scss" scoped>
.small-header {
  margin-bottom: 0 !important;
}

.download-links--link {
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid var(--gray-color);
  text-transform: uppercase;

  &:last-of-type {
    margin-right: 0;
    padding-right: 0;
    border: 0;
  }
}
</style>
