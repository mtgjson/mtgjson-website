<template>
  <div
    class="meta-data can-hide"
  >
    <span
      ref="versionNumber"
      class="version-number"
    >v{{ version.version }}</span>
    <span
      class="release-date"
    >({{ version.date }})</span>
  </div>
</template>

<script>
import Version from '../../public/json/version';

export default {
  data () {
    return {
      version: Version
    }
  }
}
</script>

<style lang="stylus">
.meta-data
  display inline-block
  margin-left 0.8rem
  font-size 12px
  color $textColor
  position relative
  .version-number
    font-weight 600
  .release-date
    font-weight normal
</style>
