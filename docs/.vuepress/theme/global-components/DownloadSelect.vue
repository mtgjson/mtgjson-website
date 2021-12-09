<template lang="pug">
  .download-links
    //- AllPrintings. Uses multiple file types including SQL
    select(v-if="fileName === 'AllPrintings'" @change="downloadFile")
      option Select a file to download
      optgroup(label="JSON")
        option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json`") {{ `${fileName}.json` }}
      optgroup(label="JSON Compressed")
        option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json.${format}`") {{ `${fileName}.json.${format}` }}
      optgroup(label="SQL")
        option(v-if="format === 'sql'" v-for="(format, key) in sqlFormats" :key="`sql-${key + format}`" :value="`${$api}${fileName}.sql`") {{ `${fileName}.sql` }}
      optgroup(label="SQL Compressed")
        option(v-if="format !== 'sql'" v-for="(format, key) in sqlFormats" :key="`sql-${key + format}`" :value="`${$api}${fileName}.sql.${format}`") {{ `${fileName}.sql.${format}` }}
      optgroup(label="SQLite")
        option(v-if="format === 'sqlite'" v-for="(format, key) in sqliteFormats" :key="`sqlite-${key + format}`" :value="`${$api}${fileName}.sqlite`") {{ `${fileName}.sqlite` }}
      optgroup(label="SQLite Compressed")
        option(v-if="format !== 'sqlite'" v-for="(format, key) in sqliteFormats" :key="`sqlite-${key + format}`" :value="`${$api}${fileName}.sqlite.${format}`") {{ `${fileName}.sqlite.${format}` }}
    //- Files. Uses compressed formats
    select(v-else-if="fileName.includes('Files')" @change="downloadFile")
      option Select a file to download
      optgroup(label="Files Compressed")
        option(v-if="format === 'zip'" v-for="(format, key) in fileFormats" :key="`file-${key + format}`" :value="`${$api}${fileName}.zip`") {{ `${fileName}.zip` }}
        option(v-if="format !== 'zip'" v-for="(format, key) in fileFormats" :key="`file-${key + format}`" :value="`${$api}${fileName}.tar.${format}`") {{ `${fileName}.tar.${format}` }}
    //- Decks. Uses a specific path
    select(v-else-if="fileType === 'AllDecks'" @change="downloadFile")
      option Select a file to download
      optgroup(label="JSON")
        option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}decks/${fileName}.json`") {{ `${fileName}.json` }}
      optgroup(label="JSON Compressed")
        option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}decks/${fileName}.json.${format}`") {{ `${fileName}.json.${format}` }}
    //- All otheres.
    select(v-else @change="downloadFile")
      option Select a file to download
      optgroup(label="JSON")
        option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json`") {{ `${fileName}.json` }}
      optgroup(label="JSON Compressed")
        option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json.${format}`") {{ `${fileName}.json.${format}` }}

</template>

<script>
export default {
  name: "DownloadField",
  props: [ "fileName", "fileType" ],
  data(){
    return {
      sqlFormats: ["sql", "bz2", "gz", "xz", "zip"],
      sqliteFormats: ["sqlite", "bz2", "gz", "xz", "zip"],
      jsonFormats: ["json", "bz2", "gz", "xz", "zip"],
      fileFormats: ["bz2", "gz", "xz", "zip"]
    }
  },
  methods: {
    /**
     * It is worth noting here that, locally, when downloading a regular JSON file
     * the browser will attempt to open it in itself, this has to do with x-origin
     * issues and should not be the case when live on the server.
     */
    downloadFile(e){
      const target = e.target || e.currentTarget;
      const url = target.value;
      const fileName = target.options[target.options.selectedIndex].innerText;
      const placeHolderAnchor = document.createElement('a');
      let $anchorElement;

      placeHolderAnchor.id = 'temp-anchor';
      placeHolderAnchor.href = url;
      placeHolderAnchor.download = fileName;
      document.body.appendChild(placeHolderAnchor);
      $anchorElement = document.querySelector('#temp-anchor');
      placeHolderAnchor.click();
      document.body.removeChild($anchorElement);
    }
  }
};
</script>

<style lang="scss" scoped>
.download-links {
  select {
    margin-top: 1rem;
    font-size: 14px;
    padding: .5rem;
    border-radius: 5px;
    border: none;
    background-color: var(--light-gray-color);
  }
}
</style>
