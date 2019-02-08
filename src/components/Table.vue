<template lang="pug">
  .doc-table
    h2 {{ documentName }}
    table
      thead
        tr
          th(v-for="(value, key) in headings" v:key="key")
            span {{ value }}
      tbody
        tr(v-for="(value ,key) in properties" v:key="key")
          td(v-for="(value ,key) in value" v:key="key")
            span {{ value }}
</template>

<script>
export default {
  name: "Table",
  props: [ "documentName", "headings", "properties"]
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/includes";
.doc-table {
  h2 {
    margin-bottom: 20px;
  }

  table {
    box-sizing: border-box;
    border: 1px solid $tableBorderColor;
    border-bottom-width: 0;


    & * {
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box;
    }
  
    thead {
      border-bottom: 1px solid $tableBorderColor;
  
      tr {
        th {
          font-weight: bold;
        }
      }
  
    }
  
    tbody {
      tr {
        border-bottom: 1px solid $tableBorderColor;
  
        td {
          @extend %body-small;
          vertical-align: middle;
          padding-top: 12px;

          &:nth-of-type(3){
            span {
              padding: 1px 4px;
              border-radius: 3px;
              background-color: $tableHighlightColor;
              color: $tableDarklightColor;
            }
          }
        }
  
        &:nth-of-type(odd) {
          td {
            background-color: $tableRowOffsetColor;
          }
        }
      }
    }
  
    th,
    td {
      padding: 15px 20px;
      text-align: left;
      border-right: 1px solid $tableBorderColor;
  
      &:last-of-type {
        border-right-width: 0;
      }
    }
  }
}
</style>