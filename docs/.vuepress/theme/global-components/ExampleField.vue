<template lang="pug">
  .example-field(v-if="enums.length > 0" :class="{'showing': showAll}")
    strong Examples:{{' '}}
    span(v-if="!showAll") {{ enums.slice(0, 5).toString().split(',').join(', ') }}
      div.show-btn(v-if="enums.length > 5") ,{{' '}}
        span(@click="toggleShowAll") Show&nbsp;More
    span(v-if="showAll && enums.length > 5") {{ enums.toString().split(',').join(', ') }},{{' '}}
      div.show-btn
        span(@click="toggleShowAll") Show&nbsp;Less
</template>

<script>
export default {
  name: 'ExampleField',
  props: [ 'type' ],
  data() {
    return {
      allEnums: null,
      show: false
    };
  },
  computed: {
    showAll(){
      return this.show;
    },
    enums(){
      let enums;

      if(this.allEnums){
        enums = this.allEnums[this.type];

        if(enums){
          return enums;
        }
      }

      return [];
    }
  },
  methods: {
    toggleShowAll(){
      this.show = !this.show;
    }
  },
  async beforeCreate() {
    await this.$helpers.setStoreState.apply(this, ['EnumValues']);

    this.allEnums = this.$store.getters.EnumValues[this.$page.frontmatter.schema];
  }
};
</script>

<style lang="scss" scoped>
.example-field {
  position: relative;
  display: inline;

  & > span {
    font-family: var(--font-monospace);
    font-size: 12px;
    background-color: var(--code-bg-color);
    color: var(--code-text-color);
    border-radius: 5px;
    line-height: 2.7em;
    padding: 7px 10px;
    margin: 0;
    word-break: break-word;
    font-weight: bold;
  }

  .show-btn {
    display: inline;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &.showing {
    & > span {
      line-height: 1em;
    }
  }
}
</style>
