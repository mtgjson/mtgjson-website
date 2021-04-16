<template lang="pug">
  .example-field(v-if="enums.length > 0" :class="{'showing': showAll}")
    strong Examples:{{' '}}
    code(v-if="!showAll") {{ shortenEnums(enums) }}
      div.show-btn(v-if="enums.length > 5") ,{{' '}}
        span(@click="toggleShowAll") Show&nbsp;More
    code(v-if="showAll && enums.length > 5") {{ elongateEnums(enums) }},{{' '}}
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
  async beforeCreate() {
    await this.$helpers.setStoreState.apply(this, ['EnumValues']);

    this.allEnums = this.$store.getters.EnumValues[this.$page.frontmatter.schema];
  },
  methods: {
    toggleShowAll(){
      this.show = !this.show;
    },
    shortenEnums(enums){
      return enums.sort().slice(0, 5).toString().split(',').join(', ')
    },
    elongateEnums(enums){
      return enums.sort().toString().split(',').join(', ');
    }
  }
};
</script>

<style lang="scss" scoped>
.example-field {
  position: relative;
  display: flex;
  align-items: center;

  code {
    line-height: 1.25rem;
  }

  .show-btn {
    display: inline;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
