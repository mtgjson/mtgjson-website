<template lang="pug">
  .schema(v-if="schema")
    //- Properties Legend
    //- This fills out a filtered list of tags that a property may have
    .schema-item.schema-legend(v-if="filteredAttributes.size")
      h4 Property Attributes
      p The property attributes you see below earmark possible conditions for a field in this data model.
      ol
        li(v-for="(attribute, key) in filteredAttributes")
          .attribute(:class="attribute.split('-')[0]") {{ attribute.split('-')[0] }}
          span {{ getTitle(attribute.split('-')[0]) }}

    //- Properties Index
    //- This fills out an anchored list of all the properties
    .schema-item.schema-index
      h4 Property Index
      p A list of all available properties.
      ol(:class="{hide: willShowMore, wontHide: !showMore}")
        li(v-for="(data, name) in filteredSchema")
          p
            router-link(:to="'#' + name") {{ name }}
      .show-more(v-if="showMore" @click="toggleIndex") {{ (willShowMore ? 'Show More' : 'Show Less') }}

    //- Properties Table
    //- This fills out a fully descriptive list of all the properties
    .schema-item.schema-data
      h4 Property Information
      blockquote.schema-data--table(v-for="(data, name) in filteredSchema")
        .schema-data--table-anchor(:id="name" aria-hidden="true")
        //- Property Name
        .schema-data--table-item
          .heading
            p(title="The name of the property") Key
          .name
            a(:href="`#${data.propName || name}`")
              h6(v-html="data.propName || name")

        //- Property Type
        .schema-data--table-item
          .heading
            p(title="The type of the property") Type
          .type
            p(:title="`Property is of type: ${data.type}`")
              em {{ data.type }}

        //- Property Example
        .schema-data--table-item
          .heading
            p(title="An example of the property value") Example
          .example
            p
              pre(v-html="data.example")

        //- Property Values
        .schema-data--table-item(v-if="getValues(data.propName || name)")
          .heading
            p(title="Possibl values of the property") Values
          .values
            p
              select
                option(v-for="(value, key) in getValues(data.propName || name)") "{{ value }}"

        //- Property Description
        .schema-data--table-item
          .heading
            p(title="The description of the property and its value") Description
          .description
            p(v-html="data.description")

        //- Property Attributes
        .schema-data--table-item(v-if="data.attributes")
          .heading
            p(title="Any attributes of the property and its value") Attributes
          .attributes
            .attribute(
              v-for="(attribute, key) in data.attributes"
              :class="attribute.split('-')[0]"
              :title="getTitle(attribute.split('-')[0])") {{ attribute.replace('-', ' ') }}

        //- Property Introduction
        .schema-data--table-item(v-if="data.introduced")
          .heading
            p(title="When the property was introduced") Introduced
          .introduced
            p
              em {{ data.introduced }}

</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      schema: null,
      values: null,
      showMore: true,
      willShowMore: true,
      isAtomicCard: false,
      isTokenCard: false,
      isManifest: false
    };
  },
  computed: {
    filteredAttributes() {
      // Store the schema attributes for properties
      const schema = this.filteredSchema;
      let attributes = [];

      for (let name in schema) {
        if (hasOwnProperty.call(schema, name)) {
          const field = schema[name];

          if (field.attributes) {
            attributes = attributes.concat(
              field.attributes.map(attr => attr.split('-')[0])
            );
          }
        }
      }

      return new Set(attributes.sort());
    },
    filteredSchema() {
      const schema = this.schema;
      let newSchema = {};

      for (let name in schema) {
        if (hasOwnProperty.call(schema, name)) {
          const field = schema[name];

          if( this.isAtomicCard ){
            if (field.isAtomicProperty) {
              newSchema[name] = field;
            }
          } else if (this.isTokenCard){
            if (field.isTokenProperty) {
              if(!field.attributes || (field.attributes && !field.attributes.includes('deck'))){
                newSchema[name] = field;
              }
            }
          } else if (this.isManifest) {
            if (field.isManifestProperty) {
              newSchema[name] = field;
            }
          } else if (!field.isTokenOnlyProperty && !field.isManifestOnlyProperty) {
            newSchema[name] = field;
          }
        }
      }

      return newSchema || schema;
    },
  },
  async created() {
    const schema = require(`../../public/schemas/${this.$page.frontmatter.schema}.schema.json`);
    const landcycle = new this.$landcycle(schema);
    landcycle._init();

    if(this.$store.getters.values.length < 1){
      await this.$store.dispatch('UPDATE_VALUES');
    }

    this.isAtomicCard = this.$page.frontmatter.title.includes("Atomic");
    this.isTokenCard = this.$page.frontmatter.title.includes("Token");
    this.isManifest = this.$page.frontmatter.title.includes("Manifest");

    this.showMore = Object.keys(schema).length > 4;
    this.values = this.$store.getters.values;
    this.schema = landcycle.schema;
  },
  methods: {
    toggleIndex() {
      this.willShowMore = !this.willShowMore;
    },
    getValues(property) {
      const schema = this.$page.frontmatter.schema; // schema file should match key name
      const keys = Object.keys(this.values); // Keys of the KeyValues file
      let pageProperty = '';
      let values = null;
      let page = null;

      for( const key of keys ){
        if( schema.toLowerCase().includes(key) ){
          pageProperty = key;
          break;
        }
      }

      page = this.values[pageProperty]; // lookup if we have a matching key to the page

      if( page ) {
        values = page[property]
      }

      return values;
    },
    getTitle(attribute) {
      switch (attribute) {
        case 'optional':
          return 'Property omitted when value returns a falsey or expected value.';
        case 'deprecated':
          return 'Property will be removed in a future major or minor version release.';
        case 'deck':
          return 'Property only available on a card within a Deck (Individual) file.';
        case 'nullable':
          return 'Property may return a null value.';
        default:
          break;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/documentation';
</style>
