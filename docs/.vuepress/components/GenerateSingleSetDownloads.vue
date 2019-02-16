<template lang="pug">
  .download-tables
    .sorting-options
      a.show-sort-row(@click.prevent="toggleSorting()") Toggle Options
      
      .sort-row(v-if="showSorting")
        div
          strong Sort By: 
          select.table-sort-select(@change="sortBy($event)")
            option(value="releaseDate:true" selected) Release Date (Newest)
            option(value="releaseDate") Release Date (Oldest)
            option(value="name") Name (Ascending)
            option(value="name:true") Name (Descending)
            option(value="code") Code (Ascending)
            option(value="code:true") Code (Descending)

        div(v-if="!showAll")
          strong Per Page: 
            select(v-model="perPage")
              option(value="50") 50
              option(value="100") 100
              option(value="200") 200
              
        div.show-all
          strong Show All: 
            input(type="checkbox" v-model="showAll")

      .pagination(v-if="!showAll")
        .pagination-links
          a.prev(v-bind:class="{hidden: (page === 1)}" @click.prevent="goToPage(0)") &larr; Prev Page
          span
            strong Page: {{ page }}
          a.next(v-bind:class="{hidden: (page === pageMax)}" @click.prevent="goToPage(1)") Next Page &rarr;

    .download-table(v-for="(set, key) in paginatedList")
      .download-item
        .download-wrap
          .img-wrap
            div(:class="`ss ss-${set.code.toLowerCase()}`")
          .txt-wrap
            p {{ set.name }} - {{ set.code }}
            small Code: 
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
      defaultList: [],
      defaultPage: 1,
      showSorting: true,
      showAll: true,
      perPage: 50,
    };
  },
  created() {
    this.defaultList = require(`../public/${
      this.downloadDirectory
    }/SetList.json`);
    this.defaultList = this.sortBy('releaseDate:true');
  },
  computed: {
    pageMax() {
      return Math.ceil(this.list.length / this.perPage);
    },
    page() {
      return this.defaultPage;
    },
    list() {
      return this.defaultList;
    },
    paginatedList() {
      if (!this.showAll) {
        return this.defaultList.filter((item, index) => {
          let intermitentMax = this.page * this.perPage;
          let intermitentMin = intermitentMax - this.perPage;

          return index > intermitentMin && index < intermitentMax;
        });
      } else {
        return this.list;
      }
    },
  },
  methods: {
    toggleSorting() {
      this.showSorting = !this.showSorting;
    },
    goToPage(increment) {
      const next =
        increment === 0 ? this.defaultPage - 1 : this.defaultPage + 1;
      this.defaultPage = next < 1 ? 1 : next;
    },
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
    padding: 30px 0 10px;
    border-bottom: 1px solid $borderColor;

    .show-sort-row {
      display: inline-block;
      margin-bottom: 20px;
    }

    .pagination {
      margin-top: 10px;

      .pagination-links {
        width: 100%;
        display: flex;
        justify-content: space-between;

        * {
          flex: 1;
        }

        span {
          text-align: center;
        }

        a {
          cursor: pointer;
          user-select: none;

          &.prev {
            text-align: left;
          }

          &.next {
            text-align: right;
          }

          &.hidden {
            opacity: 0.5;
            pointer-events: none;
            color: gray;
          }
        }
      }
    }

    .sort-row {
      div {
        display: block;
        margin-top: 5px;

        &.show-all {
          margin-bottom: 15px;
        }

        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }

  select {
    display: inline;
    font-size: 16px;
  }

  .download-table {
    margin-top: -1px;
  }
}
</style>
