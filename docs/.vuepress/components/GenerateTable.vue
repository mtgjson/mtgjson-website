<!-- Pug case statements do not work for our hydration purposes -->
<template lang="pug">
  .schema-table
    table(v-if="!showMobileTable")
      thead
        tr
          th(v-for="(value, key) in structure[0]" v:key=key)
            span {{ key }}
      tbody
        tr(v-for="(value, key) in structure" v:key=key)
          td(v-for="(value, key) in value" v:key=key v-bind:data-break="value.toLowerCase().indexOf('id') > 0")
            span(v-if="key === 'property'")
              h3(:id="value") {{ value }}
                a(:href="'#' + value" aria-hidden="true" class="header-anchor") #
            span(v-else-if="key === 'type'")
              em {{ value }}
            span(v-else-if="key === 'example'")
              code.land-cycler {{ value }}
            span(v-else)
              span.land-cycler {{ value }}

    ol.mobile-doc-table(v-if="showMobileTable" v-for="(value, key) in structure" v:key=key)
      li(v-for="(value, key) in value" v:key=key)
        span(v-if="key === 'property'")
          div
            h3(:id="value") {{ key }}
              a(:href="'#' + value" aria-hidden="true" class="header-anchor") #
          div {{ value }}
        span(v-else-if="key === 'type'")
          div {{ key }}
          div
            em {{ value }}
        span(v-else-if="key === 'example'")
          div {{ key }}
          div
            code.land-cycler {{ value }}
        span(v-else)
          div {{ key }}
          div.land-cycler {{ value }}

</template>

<script>
import Landcycle from '../modules/Landcycle';

export default {
  name: 'GenerateTable',
  data() {
    return {
      isMobileSize: 960,
      isMobile: false,
      schema: [],
    };
  },
  created() {
    this.schema = require(`../public/schemas/${
      this.$page.frontmatter.schema
    }.schema.json`);
  },
  beforeMount() {
    // In Vue.js it is suggested to put these in the `created` lifecycle method
    // However, in VuePress, we need them in the mounted area because of the
    // build process of VuePress itself. Not sure why
    window.addEventListener('resize', this.checkIfMobile);
    // Not always working but could be because state
    window.addEventListener('DOMContentLoaded', this.checkIfMobile);
  },
  mounted() {
    const land = Array.from(this.$el.querySelectorAll('.land-cycler'));
    let build = new Landcycle(land);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = Math.max(window.innerWidth || 0) < this.isMobileSize;
    },
  },
  computed: {
    structure() {
      return this.schema;
    },
    showMobileTable() {
      return this.isMobile;
    },
  },
};
</script>

<style lang="stylus" scoped>
h3 {
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-weight: normal;
  position: relative;

  a {
    position: absolute;
    left: 0;
  }
}

table {
  &, * {
    box-sizing: border-box;
  }

  tr {
    width: 100%;
    // display: table-cell
  }

  th {
    padding: 10px 15px;
    text-align: left;
    text-transform: capitalize;
  }

  td {
    padding: 10px 15px;

    &:nth-of-type(2) {
      white-space: nowrap;
    }
  }

  thead, tbody {
    width: 100%;
  }

  tbody {
    tr:nth-of-type(odd) {
      background-color: $tableAltBgColor;
    }

    tr:nth-of-type(even) {
      background-color: transparent;
    }
  }
}

.mobile-doc-table {
  padding: 0;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid $borderColor;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
  }

  li {
    list-style: none;

    &:last-of-type {
      span {
        border-bottom-width: 0;
      }
    }

    span {
      width: 100%;
      display: flex;
      border-bottom: 1px solid $borderColor;

      div {
        flex: 0 0 50%;
        padding: 10px 15px;
        border-right: 1px solid $borderColor;
        box-sizing: border-box;

        &:first-of-type {
          text-transform: capitalize;
          font-weight: bold;
          background-color: $tableAltBgColor;
        }

        &:last-of-type {
          border-right-width: 0;
        }
      }
    }
  }
}

code {
  &:empty {
    display: none;
  }
}

*[data-break='true'] ~ * {
  code {
    word-wrap: anywhere;
  }
}
</style>
