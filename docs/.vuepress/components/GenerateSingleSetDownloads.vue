<template lang="pug">
  .download-tables
    .sorting-options
      .sort-row
        div
          strong Sort By:
          select.table-sort-select(@change="sortBy($event)")
            option(value="releaseDate:true" selected) Release Date (Newest)
            option(value="releaseDate") Release Date (Oldest)
            option(value="name") Name (Ascending)
            option(value="name:true") Name (Descending)
            option(value="code") Code (Ascending)
            option(value="code:true") Code (Descending)

    .download-table(v-for="(set, key) in list")
      .download-item
        .download-wrap
          .img-wrap
            div(v-if="set.parentCode" :class="`ss ss-${set.parentCode.toLowerCase()}`")
            div(v-else :class="`ss ss-${set.code.toLowerCase()}`")
          .txt-wrap
            h3(:id="set.code") {{ set.name }}
              //- a(:href="'#' + set.code" aria-hidden="true" class="header-anchor") #
            small Set Code: 
              span {{ set.code }}
            small Release Date: 
              span {{ set.releaseDate }}
          .dl-wrap
            a.cta-btn(v-for="(format, key) in downloadFormats" v-if="format !== 'json'" :key="key" :href="`/${downloadDirectory}/${set.code}.json.${format}`") {{ format }}
            a.cta-btn(v-else v-bind:href="`/${downloadDirectory}/${set.code}.json`") {{ format }}

</template>

<script>
export default {
  name: 'GenerateSingleSetDownloads',
  data() {
    return {
      downloadFormats: ['json', 'bz2', 'gz', 'xz', 'zip'],
      downloadDirectory: 'json',
      defaultList: require(`../public/json/SetList.json`)
    };
  },
  created() {
    this.defaultList = this.sortBy('releaseDate:true');
  },
  computed: {
    list() {
      return this.defaultList;
    },
  },
  methods: {
    // PogChamp
    // A little different than the source but works
    // https://jsbin.com/wowezadolo/edit?js,console
    sortBy(event = '') {
      let values = event.currentTarget
        ? event.currentTarget.value.split(':')
        : event.split(':');
      let config = {
        prop: values[0],
        desc: values[1] ? -1 : 1,
        parser: function(x) {
          return x;
        },
      };

      let parse = function(x) {
        return x;
      };
      let getItem = function(x) {
        let isObject = x != null && typeof x === 'object';
        let isProp = isObject && this.prop in x;
        return this.parser(isProp ? x[this.prop] : x);
      };

      return this.defaultList.sort((a, b) => {
        a = getItem.call(config, a);
        b = getItem.call(config, b);
        return config.desc * (a < b ? -1 : +(a > b));
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/includes';
@require '../styles/download';

.download-tables {
  margin-top: 0;

  .sorting-options {
    position: sticky;
    top: 55px;
    z-index: 9;
    background-color: white;
    padding: 30px 0 30px;
    border-bottom: 1px solid $borderColor;

    .show-sort-row {
      display: inline-block;
    }
  }

  select {
    display: inline;
    font-size: 16px;
    margin-left: 10px;
  }

  .download-table {
    margin-top: -1px;
  }
}
</style>
