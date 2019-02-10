<template lang="pug">
  .set-downloads-table
    .set-download(v-for="(set, key) in sets", :data-hover-effect="iconHoverEffect")
      .download-wrap
        .img-wrap
          div(:class="`ss ss-${set.code.toLowerCase()}`")
          //- img(:src="`https://img.scryfall.com/sets/${set.code.toLowerCase()}.svg`")
        .txt-wrap
          p {{ set.name }} - {{ set.code }}
          small {{ set.releaseDate }}
        .dl-wrap
          a.cta-btn(download :href="`${pathToDownloads}${set.code}.json.zip`") ZIP
          a.cta-btn(download :href="`${pathToDownloads}${set.code}.json`") JSON

</template>

<script>
export default {
  name: "GenerateSetsDownloads",
  data() {
    return {
      pathToDownloads: 'https://mtgjson.com/json/',
      sets: require(`../public/json/SetList.json`),
      iconHoverEffect: false
    };
  }
};
</script>

<style lang="scss" scoped>
.set-downloads-table {
  margin-top: 20px;

  .set-download {
    padding: 20px;

    &:nth-of-type(odd) {
      background-color: #eaecef;
    }

    &[data-hover-effect='true']:hover {
      .img-wrap {
        div::before {
          transition: .25s color;
          background: -moz-linear-gradient(left, #ea8420 0%, #ea582c 50%, #ea8420 100%);
          background: -webkit-linear-gradient(left, #ea8420 0%,#ea582c 50%,#ea8420 100%);
          background: linear-gradient(to right, #ea8420 0%,#ea582c 50%,#ea8420 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ea8420', endColorstr='#ea8420',GradientType=1 );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: black;
        }
      }
    }

    .download-wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .img-wrap {
        flex: none;
        display: flex;
        margin-right: 20px;
        justify-content: center;

        div {
          position: relative;
          height: 50px;
          width: 50px;

          &::before {
            position: absolute;
            text-align: center;
            line-height: 1em;
            font-size: 50px;
            width: 100%;
            height: 100%;
            transition: .25s color;
          }
        }
        
        img {
          flex: none;
          width: 100%;
          height: auto;
        }
      }

      .txt-wrap {
        p {
          font-weight: bold;
          margin: 0;
        }

        small {

        }
      }

      .dl-wrap {
        flex: auto;
        display: flex;
        flex-direction: row-reverse;

        .cta-btn {
          background-color: dodgerblue;
          margin-left: 20px;
          transition: .25s all;

          &:hover {
            text-decoration: none;
            opacity: 0.8;
            transition: .25s all;
          }
        }
      }
    }
  }
}
</style>
