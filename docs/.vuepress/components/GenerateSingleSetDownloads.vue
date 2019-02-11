<template lang="pug">
  .set-downloads-table
    .set-download(v-for="(set, key) in sets", :data-hover-effect="iconHoverEffect")
      .download-wrap
        .img-wrap
          div(:class="`ss ss-${set.code.toLowerCase()}`")
        .txt-wrap
          p {{ set.name }} - {{ set.code }}
          small {{ set.releaseDate }}
        .dl-wrap
          a(v-for="(format, key) in downloadFormats" v-if="format !== '.json'" :key="key" :href="`/${downloadDirectory}/${set.code}.json${format}`") {{ format }}
          a(v-else v-bind:href="`/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
export default {
  name: "GenerateSingleSetDownloads",
  data() {
    return {
      /**
       * @TODO fix environment variables and aliases
       */
      iconHoverEffect: true,
      downloadDirectory: 'json',
      downloadFormats: ['.bz2', '.gz', '.json', '.xz', '.zip'].sort( ( a, b ) => a - b ),
    };
  },
  computed: {
    sets(){
      return require(`../public/${this.downloadDirectory}/${this.$page.frontmatter.download}.json`);
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/includes';

.set-downloads-table
  margin-top: 20px
  border: 1px solid #eaecef
  box-sizing: border-box
  width: 100%
  display: flex
  flex-wrap: wrap

  .set-download
    flex: 0 0 100%;

    &:nth-of-type(odd)
      background-color: #eaecef

    &:nth-of-type(even)
      background-color: transparent

    +breakpoint(small)
      flex: 0 0 50%

      &:nth-of-type(even),
      &:nth-of-type(odd)
        background-color: transparent

      &:nth-of-type(4n),
      &:nth-of-type(4n+1)
        background-color: #eaecef

    +breakpoint(large)
      flex: 0 0 33.333%

      &:nth-of-type(odd)
        background-color: #eaecef
        
      &:nth-of-type(even)
        background-color: transparent

    &[data-hover-effect='true']:hover
      .img-wrap
        div::before
          transition: .25s color
          background: linear-gradient(to right, #ea8420 0%,#ea582c 50%,#ea8420 100%)
          background-clip: text
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent

    .download-wrap
      padding: 20px
      display: flex
      flex-wrap: wrap
      align-items: center

      .img-wrap
        flex: none

        div
          margin-right: 20px
          position: relative
          height: 50px
          width: 50px

          &::before
            position: absolute
            text-align: center
            line-height: 1em
            font-size: 50px
            width: 100%
            height: 100%
            transition: .25s color
        
        img
          flex: none
          width: 100%
          height: auto

      .txt-wrap
        flex: 1;

        & > *
          flex: 0 0 100%

        p
          font-weight: bold
          margin: 0

      .dl-wrap
        flex: 0 0 100%;
        margin-top: 10px
        display: inline-flex
        flex-wrap: wrap

        +breakpoint(large)
          margin-left: 70px;

        a
          margin: 10px 20px 10px 0
          font-weight: bold

          &:last-of-type
            margin-right: 0
</style>
