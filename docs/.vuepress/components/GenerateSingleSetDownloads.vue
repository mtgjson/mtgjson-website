<template lang="pug">
  .download-tables
    .sort-row
      p
        strong Sort by:
      select.table-sort-select(@change="sortBy($event)")
        option(value="releaseDate:true" selected) Release Date (Newest)
        option(value="releaseDate") Release Date (Oldest)
        option(value="name:true") Alphabetized by Name (Z-0)
        option(value="name") Alphabetized by Name (0-Z)
        option(value="code:true") Alphabetized by Code (Z-0)
        option(value="code") Alphabetized by Code (0-Z)

    .download-table(v-for="(set, key) in list")
      .download-item
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
  name: 'GenerateSingleSetDownloads',
  data() {
    return {
      downloadDirectory: 'json',
      downloadFormats: ['.bz2', '.gz', '.json', '.xz', '.zip'],
      defaultList: [],
    };
  },
  created() {
    this.defaultList = require(`../public/${
      this.downloadDirectory
    }/SetList.json`);
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
      let cfg = {
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
        a = getItem.call(cfg, a);
        b = getItem.call(cfg, b);
        return cfg.desc * (a < b ? -1 : +(a > b));
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/includes';
@require '../styles/download';

.sort-row {
  p {
    display: inline;
    margin-right: 15px;
  }

  .table-sort-select {
    display: inline;
    font-size: 16px;
    padding: 5px;
    margin-bottom: 20px;
  }
}

.dl-wrap {
  justify-content: start !important;
  flex: 0 0 100% !important;

  +breakpoint(medium) {
    justify-content: end !important;
    flex: 1 !important;
  }
}
</style>
