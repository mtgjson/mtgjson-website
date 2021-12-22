<template lang="pug">
.download-buttons-list(v-if="fileName === 'AllPrintings'")
  .download-buttons-list--item
    a.btn(:href="`${$api}${fileName}.json`", :key="key") json
    a.btn(
      v-for="(format, key) in formats",
      :href="`${$api}${fileName}.json.${format}`",
      :key="key"
    ) {{ `json.${format}` }}
  .download-buttons-list--item
    a.btn(:href="`${$api}${fileName}.sql`", :key="key") sql
    a.btn(
      v-for="(format, key) in formats",
      :href="`${$api}${fileName}.sql.${format}`",
      :key="key"
    ) {{ `sql.${format}` }}
  .download-buttons-list--item
    a.btn(:href="`${$api}${fileName}.sqlite`", :key="key") sqlite
    a.btn(
      v-for="(format, key) in formats",
      :href="`${$api}${fileName}.sqlite.${format}`",
      :key="key"
    ) {{ `sqlite.${format}` }}
.download-buttons-list(v-else-if="fileName.includes('Files')")
  .download-buttons-list--item
    a.btn(:href="`${$api}${fileName}.zip`", :key="key") zip
    a.btn(
      v-for="(format, key) in formats",
      v-if="format !== 'zip'",
      :href="`${$api}${fileName}.tar.${format}`",
      :key="key"
    ) {{ `tar.${format}` }}
.download-buttons-list(v-else-if="fileName === 'AllDecks'")
  .download-buttons-list--item
    a.btn(:href="`${$api}decks/${fileName}.json`", :key="key") json
    a.btn(
      v-for="(format, key) in formats",
      :href="`${$api}decks/${fileName}.json.${format}`",
      :key="key"
    ) {{ `json.${format}` }}
.download-buttons-list(v-else)
  .download-buttons-list--item
    a.btn(:href="`${$api}${fileName}.json`", :key="key") json
    a.btn(
      v-for="(format, key) in formats",
      :href="`${$api}${fileName}.json.${format}`",
      :key="key"
    ) {{ `json.${format}` }}
</template>

<script>
export default {
  name: "DownloadButtonsList",
  props: {
    fileName: {
      type: String,
      required: true,
      default: "AllPrintings",
    },
  },
  data() {
    return {
      formats: ["bz2", "gz", "xz", "zip"],
    };
  },
};
</script>

<style lang="scss" scoped>
.download-buttons-list {
  .btn {
    margin-top: 1rem;
    display: inline-block;
    font-size: 14px;
    margin-left: 7px;

    &:first-of-type {
      margin-left: 0;
    }
  }
}
</style>
