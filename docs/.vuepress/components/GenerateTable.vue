<template lang="pug">
  .doc-table
    table
      thead
        tr
          th(v-for="(value, key) in headings" v:key="key")
            span {{ value }}
      tbody
        tr(v-for="(value, key) in properties" v:key="key")
          td(v-for="(value, key) in value" v:key="key")
            span {{ value }}
</template>

<script>
export default {
  name: "GenerateTable",
  data() {
    return {
      documentHeadings: [],
      documentProperties: [{}]
    };
  },
  computed: {
    headings() {
      return this.documentHeadings;
    },
    properties() {
      return this.documentProperties;
    }
  },
  mounted() {
    let dump = require(`../../.docs/${this.$page.title}.doc.json`);

    this.documentHeadings = dump.headings || this.documentHeadings;
    this.documentProperties = dump.properties || this.documentProperties;
  }
};
</script>

<style lang="scss" scoped>
table {
  th {
    text-align: left;
  }
}
</style>
