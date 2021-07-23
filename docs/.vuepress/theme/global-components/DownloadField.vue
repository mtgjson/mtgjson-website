<template lang="pug">
  .download-links
    select(v-if="fileName === 'AllPrintings'")
      option Select a file to download
      option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json`" v-html="`${fileName}.json`" @click="downloadFile")
      option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json.${format}`" v-html="`${fileName}.json.${format}`" @click="downloadFile")
      option(v-if="format === 'sql'" v-for="(format, key) in sqlFormats" :key="`sql-${key + format}`" :value="`${$api}${fileName}.sql`" v-html="`${fileName}.sql`" @click="downloadFile")
      option(v-if="format !== 'sql'" v-for="(format, key) in sqlFormats" :key="`sql-${key + format}`" :value="`${$api}${fileName}.sql.${format}`" v-html="`${fileName}.sql.${format}`" @click="downloadFile")
      option(v-if="format === 'sqlite'" v-for="(format, key) in sqliteFormats" :key="`sqlite-${key + format}`" :value="`${$api}${fileName}.sqlite`" v-html="`${fileName}.sqlite`" @click="downloadFile")
      option(v-if="format !== 'sqlite'" v-for="(format, key) in sqliteFormats" :key="`sqlite-${key + format}`" :value="`${$api}${fileName}.sqlite.${format}`" v-html="`${fileName}.sqlite.${format}`" @click="downloadFile")
    select(v-else-if="fileName.includes('Files')")
      option Select a file to download
      option(v-if="format === 'zip'" v-for="(format, key) in fileFormats" :key="`file-${key + format}`" :value="`${$api}${fileName}.zip`" v-html="`${fileName}.zip`" @click="downloadFile")
      option(v-if="format !== 'zip'" v-for="(format, key) in fileFormats" :key="`file-${key + format}`" :value="`${$api}${fileName}.tar.${format}`" v-html="`${fileName}.tar.${format}`" @click="downloadFile")
    select(v-else-if="fileName === 'AllDecks'")
      option Select a file to download
      option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${downloadPath}.json`" v-html="`${cleanDownloadName}.json`" @click="downloadFile")
      option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${downloadPath}.json.${format}`" v-html="`${cleanDownloadName}.json.${format}`" @click="downloadFile")
    select(v-else)
      option Select a file to download
      option(v-if="format === 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json`" v-html="`${fileName}.json`" @click="downloadFile")
      option(v-if="format !== 'json'" v-for="(format, key) in jsonFormats" :key="`json-${key + format}`" :value="`${$api}${fileName}.json.${format}`" v-html="`${fileName}.json.${format}`" @click="downloadFile")

</template>

<script>
export default {
  name: "DownloadField",
  props: [ "fileName", "downloadPath" ],
  data(){
    return {
      sqlFormats: ["sql", "bz2", "gz", "xz", "zip"],
      sqliteFormats: ["sqlite", "bz2", "gz", "xz", "zip"],
      jsonFormats: ["json", "bz2", "gz", "xz", "zip"],
      fileFormats: ["bz2", "gz", "xz", "zip"]
    }
  },
  computed: {
    cleanDownloadName(){
      return this._props.downloadPath && this._props.downloadPath.split('/')[1];
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
