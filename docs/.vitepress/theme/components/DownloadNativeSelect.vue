<template lang="pug">
.download-native-select
  select(
    v-if="fileName === 'AllPrintings'",
    @change="downloadFile"
  )
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
    optgroup(label="PSQL")
      option(
        :key="`psql`",
        :value="`${api}${fileName}.psql`"
      ) {{ `${fileName}.psql` }}
    optgroup(label="PSQL Compressed")
      option(
        v-for="(format, key) in compressedFormats",
        :key="`psql-${key + format}`",
        :value="`${api}${fileName}.psql.${format}`"
      ) {{ `${fileName}.psql.${format}` }}
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

<script setup lang="ts">
import type { HTMLChangeEvent } from '../types';

type Props = {
  fileName: string;
  fileType?: string;
};

defineProps<Props>();

const compressedFormats: string[] = ['bz2', 'gz', 'xz', 'zip'];
const api: string = 'https://mtgjson.com/api/v5/';

/**
 * It is worth noting here that, locally, when downloading a regular JSON file
 * the browser will attempt to open it in itself, this has to to with x-origin
 * issues and should not be the case when live on the server.
 */
const downloadFile = (e: HTMLChangeEvent): void => {
  const target: HTMLFormElement = e.target;
  const url: string = target.value;
  const fileName: string = target.options[target.options.selectedIndex].innerText;
  const placeHolderAnchor: HTMLAnchorElement = document.createElement('a');
  let $anchorElement: HTMLAnchorElement;

  placeHolderAnchor.id = 'temp-anchor';
  placeHolderAnchor.href = url;
  placeHolderAnchor.download = fileName;

  document.body.appendChild(placeHolderAnchor);
  $anchorElement = document.querySelector('#temp-anchor');

  placeHolderAnchor.click();

  document.body.removeChild($anchorElement);
};
</script>

<style lang="scss" scoped>
.download-native-select {
  select {
    margin-top: 1rem;
    padding: 0.25rem 0.5rem;
    height: 40px;
    border-radius: var(--common-radius);
    background-color: var(--select-bg-color);
    border: 1px solid var(--select-border-color);
    color: var(--select-text-color);
    appearance: button;
    cursor: pointer;
  }
}
</style>
