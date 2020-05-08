<template lang="pug">
  ol.download-field
    li
      small Downloads:
      span(v-for="(format, key) in formats" v-if="format !== 'json'" :key="key")
        a.dl-btn(download :href="`${$api}${fileName}.json.${format}`") {{ format }}
      span(v-else)
        a.dl-btn(download :href="`${$api}${fileName}.json`") {{ format }}
</template>

<script>
export default {
  name: "DownloadField",
  props: [ "fileName" ],
  data(){
    return {
      formats: ["json", "bz2", "gz", "xz", "zip"]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/download";
</style>
