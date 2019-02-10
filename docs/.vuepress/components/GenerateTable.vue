<template lang="pug">
  .doc-table
    table
      thead
        tr
          th(v-for="(value, key) in headings" v:key=key)
            span {{ value }}
      tbody
        tr(v-for="(value, key) in properties" v:key=key)
          td(v-for="(value, key) in value" v:key=key)
            span(v-if="key === 'type'")
              em.fertilizer {{ value }}
            span(v-else-if="key === 'example'")
              code.fertilizer {{ value }}
            span(v-else)
              span.fertilizer {{ value }}
</template>

<script>
export default {
  name: "GenerateTable",
  data() {
    return {
      /**
       * @TODO Abstract headings in a way that binds any future document table objects
       */
      headings: ["Property", "Type", "Example", "Description"],
      value: false,
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
          if (this.flower.buds.indexOf(petal) > -1) {
            let petalName = petal.replace("${", "").replace("}$", "");

            return {
              name: petalName,
              link: `/documentation/${petalName.toLowerCase()}`
            }
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
     * @TODO Find a way to allow fertilization before mounted lifecycle
     * and enable router linking for fertizilation
     */
    this.object = require(`../public/documents/${this.matter.document}.doc.json`);
  },
  mounted() {
    const tableValues = Array.from(this.$el.querySelectorAll(".fertilizer"));
    
    // Pass in the page links to the flower methods
    if( this.fertilize ){
      this.grow( this.flower, this.matter.petals ).then( flower => {
        tableValues.forEach((el, index) => {
          flower.buds.forEach(petal => {
            if (el.innerText.indexOf(petal) > -1) {
              let removedPetal = flower.deflower(petal);
              el.innerHTML = el.innerText.replace(
                petal,
                `<a style="font-weight: bold;" href=${removedPetal.link}>${removedPetal.name}</a>`
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
    }
  },
  computed: {
    properties() {
      return this.object;
    },
    replacement() {
      return this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  box-sizing: border-box;

  th {
    text-align: left;
  }

  td {
    &:nth-of-type(2) {
      white-space: nowrap;
    }

    code {
      background-color: #ffeeec;
      color: #9b2e2e;

      &:empty {
        display: none;
      }
    }
  }

  thead,
  tbody {
    width: 100%;
  }

  tbody {
    tr:nth-of-type(odd) {
      background-color: #f6f8fa;
    }
    tr:nth-of-type(even) {
      background-color: transparent;
    }
  }
}
</style>
