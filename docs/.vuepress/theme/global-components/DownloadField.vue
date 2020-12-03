<template lang="pug">
  ol.download-field
    li
      p.small-header Downloads:
      a.dl-btn(v-for="(format, key) in formats" v-if="format !== 'json'" :key="key" download :href="`${$api}${fileName}.json.${format}`") {{ format }}
      a.dl-btn(v-else download :href="`${$api}${fileName}.json`") {{ format }}
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

.small-header {
  padding-top: 0;
}
</style>
