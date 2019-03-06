<template>
  <div
    class="meta-data can-hide"
  >
    <router-link
      class="version-number"
      :to="changelogLink"
    >v{{ metaData.version }}</router-link>
    <span
      class="release-date"
    >({{ metaData.date }})</span>
  </div>
</template>

<script>
import MetaData from '../../public/json/version';

export default {
  data () {
    return {
      metaData: MetaData
    }
  },

  computed: {
    changelogLink(){
      const version = this.metaData.version.replace(/\./g, '-');
      const date = this.metaData.date;
      return `/changelog/#_${version}-${date}`;
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
