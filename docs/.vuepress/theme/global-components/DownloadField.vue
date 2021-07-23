<template lang="pug">
  .download-links
    select(v-if="fileName === 'AllPrintings'")
      option Select a file to download
      option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json`" @click="downloadFile") {{ `${fileName}.json` }}
      option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json.${format}`" @click="downloadFile") {{ `${fileName}.json.${format}` }}
      option(v-if="format === 'sql'" v-for="(format, key) in sqlFormats" :key="`sql-${key + format}`" :value="`${$api}${fileName}.sql`" @click="downloadFile") {{ `${fileName}.sql` }}
      option(v-if="format !== 'sql'" v-for="(format, key) in sqlFormats" :key="`sql-${key + format}`" :value="`${$api}${fileName}.sql.${format}`" @click="downloadFile") {{ `${fileName}.sql.${format}` }}
      option(v-if="format === 'sqlite'" v-for="(format, key) in sqliteFormats" :key="`sqlite-${key + format}`" :value="`${$api}${fileName}.sqlite`" @click="downloadFile") {{ `${fileName}.sqlite` }}
      option(v-if="format !== 'sqlite'" v-for="(format, key) in sqliteFormats" :key="`sqlite-${key + format}`" :value="`${$api}${fileName}.sqlite.${format}`" @click="downloadFile") {{ `${fileName}.sqlite.${format}` }}
    select(v-else-if="fileName.includes('Files')")
      option Select a file to download
      option(v-if="format === 'zip'" v-for="(format, key) in fileFormats" :key="`file-${key + format}`" :value="`${$api}${fileName}.zip`" @click="downloadFile") {{ `${fileName}.zip` }}
      option(v-if="format !== 'zip'" v-for="(format, key) in fileFormats" :key="`file-${key + format}`" :value="`${$api}${fileName}.tar.${format}`" @click="downloadFile") {{ `${fileName}.tar.${format}` }}
    select(v-else-if="fileType === 'AllDecks'")
      option Select a file to download
      option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}decks/${fileName}.json`" @click="downloadFile") {{ `${fileName}.json` }}
      option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}decks/${fileName}.json.${format}`" @click="downloadFile") {{ `${fileName}.json.${format}` }}
    select(v-else)
      option Select a file to download
      option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json`" @click="downloadFile") {{ `${fileName}.json` }}
      option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json.${format}`" @click="downloadFile") {{ `${fileName}.json.${format}` }}

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
     * the browser will attempt to open it in itself, this has to to with x-origin
     * issues and should not be the case when live on the server.
     */
    downloadFile(e){
      const target = e.target || e.currentTarget;
      const url = target.value;
      const fileName = target.innerText;
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
