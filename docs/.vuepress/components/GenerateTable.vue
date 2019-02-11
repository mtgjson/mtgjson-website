<template lang="pug">
  .doc-table
    table(v-if="!showMobileTable")
      thead
        tr
          th(v-for="(value, key) in properties[0]" v:key=key)
            span {{ key }}
      tbody
        tr(v-for="(value, key) in properties" v:key=key)
          td(v-for="(value, key) in value" v:key=key v-bind:data-break="value.toLowerCase().indexOf('id') > 0")
            span(v-if="key === 'type'")
              em.fertilizer {{ value }}
            span(v-else-if="key === 'example'")
              code.fertilizer {{ value }}
            span(v-else)
              span.fertilizer {{ value }}

    ol.mobile-doc-table(v-if="showMobileTable" v-for="(value, key) in properties" v:key=key)
      li(v-for="(value, key) in value" v:key=key)
        span(v-if="key === 'type'")
          div {{ key }}
          div
            em.fertilizer {{ value }}
        span(v-else-if="key === 'example'")
          div {{ key }}
          div
            code.fertilizer {{ value }}
        span(v-else)
          div {{ key }}
          div.fertilizer {{ value }}

</template>

<script>
export default {
  name: "GenerateTable",
  data() {
    return {
      isMobileSize: 800,
      isMobile: false,
      object: [],
      matter: {},
      /**
       * @TODO Remove flower from this component in to its own file
       */
      fertilize: false,
      flower: {
        buds: [],
        petals: [],
        deflower: petal => {
          console.log('Deflowering...')
          if (this.flower.buds.indexOf(petal) > -1) {
            let petalName = petal.replace("${", "").replace("}$", "");
            let newFlower = {
              name: petalName,
              dew: null
            }

            switch(petalName){
              case 'date':
                newFlower.dew = `${new Date().toISOString().split('T')[0]}`;
                break;

              case 'card':
              case 'token':
                newFlower.dew = `<a class="code-link" href=/structures/${petalName}>${petalName}</a>`;
                break;

              default:
                break;
            }

            return newFlower;
          }
        }
      }
    };
  },
  created() {
    // We use create to load the data as fast as possible and can get,
    // away without computed values because we have no state
    this.matter = this.$page.frontmatter;
    this.fertilize = this.$page.frontmatter.petals || false;
    /**
     * @TODO Find a way to allow fertilization before `created` lifecycle
     * and enable router linking for fertizilation
     */
    this.object = require(`../public/documents/${this.matter.document}.doc.json`);
    
  },
  beforeMount(){
    // In Vue.js it is suggested to put these in the `created` lifecycle method
    // However, in VuePress, we need them in the mounted area because of the
    // build process of VuePress itself. Not sure why
    window.addEventListener('resize', this.checkIfMobile)
    window.addEventListener('DOMContentLoaded', this.checkIfMobile)
  },
  mounted() {
    const soil = Array.from(this.$el.querySelectorAll(".fertilizer"));
    
    // Pass in the page links to the flower methods
    if( this.fertilize ){
      this.grow( this.flower, this.matter.petals ).then( flower => {
        soil.forEach((el, index) => {
          flower.buds.forEach(petal => {
            if (el.innerText.indexOf(petal) > -1) {
              let removedPetal = flower.deflower(petal);
              el.innerHTML = el.innerText.replace(
                petal,
                removedPetal.dew
              );
            }
          });
        });
      }).catch( err => {
        console.log( err )
      });
    }
  },
  methods: {
    async grow( flower, petals ) {
      for (let growth of petals) {
        for (let petal in growth) {
          let bud = growth[petal];
          await flower.buds.push(bud);
        }
      }
      return flower;
    },
    checkIfMobile(){
      this.isMobile = Math.max(window.innerWidth || 0) < this.isMobileSize;
    }
  },
  computed: {
    properties() {
      return this.object;
    },
    replacement() {
      return this.value;
    },
    showMobileTable(){
      return this.isMobile;
    }
  }
};
</script>

<style lang="stylus" scoped>
table
  &, *
    box-sizing: border-box

  tr
    width: 100%
    // display: table-cell

  th
    padding: 10px 15px
    text-align: left;
    text-transform: capitalize
  
  td
    padding: 10px 15px

    &:nth-of-type(2)
      white-space: nowrap

  thead,
  tbody
    width: 100%

  tbody
    tr:nth-of-type(odd)
      background-color: $tableAltBgColor
    
    tr:nth-of-type(even)
      background-color: transparent

.mobile-doc-table
  padding: 0
  margin: 0
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid $borderColor
  box-sizing: border-box

  li
    list-style none

    &:last-of-type
      span
        border-bottom-width: 0

    span
      width: 100%;
      display: flex;
      border-bottom: 1px solid $borderColor

      div
        flex: 0 0 50%;
        padding: 10px 15px
        border-right: 1px solid $borderColor
        box-sizing: border-box

        &:first-of-type
          text-transform: capitalize
          font-weight: bold
          background-color: $tableAltBgColor

        &:last-of-type
          border-right-width: 0

code
  background-color: $tableCodeBgColor
  color: $tableCodeTextColor

  &:empty
    display: none

*[data-break="true"] ~ *
  code
    word-wrap anywhere
</style>
