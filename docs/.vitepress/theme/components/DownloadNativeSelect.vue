<template lang="pug">
.download-links
  select(v-if="fileName === 'AllPrintings'", @change="downloadFile")
    option Select a file to download
    optgroup(label="JSON")
      option(
        :key="`json`",
        :value="`${api}${fileName}.json`"
      ) {{ `${fileName}.json` }}
    optgroup(label="JSON Compressed")
      option(
        v-for="(format, key) in compressedFormats",
        :key="`json-${key + format}`",
        :value="`${api}${fileName}.json.${format}`"
      ) {{ `${fileName}.json.${format}` }}
    optgroup(label="SQL")
      option(
        :key="`sql`",
        :value="`${api}${fileName}.sql`"
      ) {{ `${fileName}.sql` }}
    optgroup(label="SQL Compressed")
      option(
        v-for="(format, key) in compressedFormats",
        :key="`sql-${key + format}`",
        :value="`${api}${fileName}.sql.${format}`"
      ) {{ `${fileName}.sql.${format}` }}
    optgroup(label="SQLite")
      option(
        :key="`sqlite`",
        :value="`${api}${fileName}.sqlite`"
      ) {{ `${fileName}.sqlite` }}
    optgroup(label="SQLite Compressed")
      option(
        v-for="(format, key) in compressedFormats",
        :key="`sqlite-${key + format}`",
        :value="`${api}${fileName}.sqlite.${format}`"
      ) {{ `${fileName}.sqlite.${format}` }}
  select(v-else-if="fileName.includes('Files')", @change="downloadFile")
    option Select a file to download
    optgroup(label="Files Compressed")
      option(
        :key="`file-zip`",
        :value="`${api}${fileName}.zip`"
      ) {{ `${fileName}.zip` }}
      option(
        v-for="(format, key) in compressedFormats",
        :key="`file-${key + format}`",
        :value="`${api}${fileName}.tar.${format}`"
      ) {{ `${fileName}.tar.${format}` }}
  select(v-else-if="fileType === 'AllDecks'", @change="downloadFile")
    option Select a file to download
    optgroup(label="JSON")
      option(
        :key="`json`",
        :value="`${api}decks/${fileName}.json`"
      ) {{ `${fileName}.json` }}
    optgroup(label="JSON Compressed")
      option(
        v-for="(format, key) in compressedFormats",
        :key="`json-${key + format}`",
        :value="`${api}decks/${fileName}.json.${format}`"
      ) {{ `${fileName}.json.${format}` }}
  select(v-else, @change="downloadFile")
    option Select a file to download
    optgroup(label="JSON")
      option(
        :key="`json`",
        :value="`${api}${fileName}.json`"
      ) {{ `${fileName}.json` }}
    optgroup(label="JSON Compressed")
      option(
        v-for="(format, key) in compressedFormats",
        :key="`json-${key + format}`",
        :value="`${api}${fileName}.json.${format}`"
      ) {{ `${fileName}.json.${format}` }}
</template>

<script setup>
const props = defineProps({
  fileName: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    default: '',
  },
});

const compressedFormats = ["bz2", "gz", "xz", "zip"];

const api = 'https://mtgjson.com/api/v5/';

/**
 * It is worth noting here that, locally, when downloading a regular JSON file
 * the browser will attempt to open it in itself, this has to to with x-origin
 * issues and should not be the case when live on the server.
 */
const downloadFile = (e) => {
  const target = e.target || e.currentTarget;
  const url = target.value;
  const fileName = target.options[target.options.selectedIndex].innerText;
  const placeHolderAnchor = document.createElement("a");
  let $anchorElement;

  placeHolderAnchor.id = "temp-anchor";
  placeHolderAnchor.href = url;
  placeHolderAnchor.download = fileName;
  document.body.appendChild(placeHolderAnchor);
  $anchorElement = document.querySelector("#temp-anchor");
  placeHolderAnchor.click();
  document.body.removeChild($anchorElement);
};
</script>

<style lang="scss" scoped>
.download-links {
  select {
    margin-top: 1rem;
    font-size: 14px;
    padding: 0.5rem;
    border-radius: var(--common-radius);
    border: none;
    appearance: none;
    background-color: var(--gray-1-color);
    color: var(--dark-color);
  }
}
</style>
