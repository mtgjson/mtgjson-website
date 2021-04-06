<template lang="pug">
  .download-links
    div(v-if="fileName === 'AllPrintings'")
      div.download-links--wrap
        p.small-header Downloads:
        a.download-links--link(v-for="(format, key) in jsonFormats" v-if="format !== 'json'" :key="`json-${key + format}`" download :href="`${$api}${fileName}.json.${format}`")
          button.cta-btn {{ format }}
        a.download-links--link(v-else download :href="`${$api}${fileName}.json`")
          button.cta-btn {{ format }}
      div.download-links--wrap
        p.small-header SQL Downloads:
        a.download-links--link(v-for="(format, key) in sqlFormats" v-if="format !== 'sql'" :key="`sql-${key + format}`" download :href="`${$api}${fileName}.sql.${format}`")
          button.cta-btn {{ format }}
        a.download-links--link(v-else download :href="`${$api}${fileName}.sql`")
          button.cta-btn {{ format }}
      div.download-links--wrap
        p.small-header SQLite Downloads:
        a.download-links--link(v-for="(format, key) in sqliteFormats" v-if="format !== 'sqlite'" :key="`sqlite-${key + format}`" download :href="`${$api}${fileName}.sqlite.${format}`")
          button.cta-btn {{ format }}
        a.download-links--link(v-else download :href="`${$api}${fileName}.sqlite`")
          button.cta-btn {{ format }}
    div(v-else-if="fileName.includes('Files')")
      div.download-links--wrap
        p.small-header File Downloads:
        a.download-links--link(v-for="(format, key) in fileFormats" v-if="format !== 'zip'" :key="key" download :href="`${$api}${fileName}.tar.${format}`")
          button.cta-btn {{ format }}
        a.download-links--link(v-else download :href="`${$api}${fileName}.zip`")
          button.cta-btn {{ format }}
    div(v-else)
      div.download-links--wrap
        p.small-header Downloads:
        a.download-links--link(v-for="(format, key) in jsonFormats" v-if="format !== 'json'" :key="key" download :href="`${$api}${fileName}.json.${format}`")
          button.cta-btn {{ format }}
        a.download-links--link(v-else download :href="`${$api}${fileName}.json`")
          button.cta-btn {{ format }}

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
  }
};
</script>

<style lang="scss" scoped>
.small-header {
  margin-bottom: 0 !important;
}

.download-links {
  &--wrap {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;

    .small-header {
      flex: 100%;
    }
  }
  &--link {
    display: inline-block;

    .cta-btn {
      text-transform: uppercase;
      margin: 0;
    }

    &:last-of-type {
      margin-right: 0;
      padding-right: 0;
      border: 0;
    }
  }
}
</style>
