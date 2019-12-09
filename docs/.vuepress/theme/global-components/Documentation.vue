<template lang="pug">
  .schema(v-if="schema")
    //- Properties Legend
    .schema-item.schema-legend(v-if="filteredAttributes.size")
      h4 Property Attributes
      p The property attributes you see below earmark possible conditions for a field in this data structure.
      ol
        li(v-for="(attribute, key) in filteredAttributes")
          .attribute(:class="attribute.split('-')[0]") {{ attribute.split('-')[0] }}
          span {{ getTitle(attribute.split('-')[0]) }}

    //- Properties Index
    .schema-item.schema-index(v-if="showIndex")
      h4 Property Index
      p A list of all available properties.
      ol(:class="{hide: willShowMore, wontHide: !showMore}")
        li(v-for="(data, name) in filteredSchema")
          p
            router-link(:to="'#' + name") {{ name }}
      .show-more(v-if="showMore" @click="toggleIndex") {{ (willShowMore ? 'Show More' : 'Show Less') }}

    //- Properties Table
    .schema-item.schema-data
      h4 Property Information
      blockquote.schema-data--table(v-for="(data, name) in filteredSchema" v-if="name !== '...'")
        .schema-data--table-anchor(:id="name" aria-hidden="true")
        //- Property Name
        .schema-data--table-item
          .heading
            p(title="The name of the property") Key
          .name
            a(:href="`#${data.propName}`")
              h6(v-html="data.propName")

        //- Property Type
        .schema-data--table-item
          .heading
            p(title="The type of the property") Type
          .type
            p(:title="`Property is of type: ${data.type}`")
              em {{ data.type }}

        //- Property Introduction
        .schema-data--table-item(v-if="data.introduced")
          .heading
            p(title="When the property was introduced") Introduced
          .introduced
            p
              em {{ data.introduced }}

        //- Property Example
        .schema-data--table-item
          .heading
            p(title="An example of the property value") Example
          .example
            p
              pre(v-html="data.example")

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

      blockquote.schema-data--table-continued(v-else v-for="(i, k) in 3" title="Denotes there are more sequential rows") ...
</template>

<script>
export default {
  name: 'Documentation',
  data() {
    return {
      schema: [],
      showMore: true,
      willShowMore: true,
      tokenOnlyFields: [
        'artist',
        'borderColor',
        'colorIdentity',
        'colorIndicator',
        'colors',
        'isOnlineOnly',
        'layout',
        'loyalty',
        'name',
        'names',
        'number',
        'power',
        'reverseRelated',
        'scryfallId',
        'scryfallOracleId',
        'scryfallIllustrationId',
        'subtypes',
        'supertypes',
        'side',
        'text',
        'toughness',
        'type',
        'types',
        'uuid',
        'watermark',
      ],
    };
  },
  computed: {
    showIndex() {
      return !Object.keys(this.filteredSchema).includes('...');
    },
    filteredAttributes() {
      // Store the schema attributes for properties
      const schema = this.filteredSchema;
      let attributes = [];

      for (let name in schema) {
        if (hasOwnProperty.call(schema, name)) {
          const field = schema[name];

          if (field.attributes) {
            attributes = attributes.concat(field.attributes.map(attr => attr.split('-')[0]));
          }
        }
      }

      return new Set(attributes.sort());
    },
    filteredSchema() {
      const schema = this.schema;
      let newSchema = undefined;

      // Logic to filter down the card schema for AllCards
      if (this.$page.frontmatter.title === 'AllCards') {
        newSchema = {};

        for (let name in schema) {
          if (hasOwnProperty.call(schema, name)) {
            const field = schema[name];

            if (field.attributes && field.attributes.includes('atomic')) {
              newSchema[name] = field;
            }
          }
        }
      }

      if (this.$page.frontmatter.title === 'token') {
        newSchema = {};

        for (let name in schema) {
          if (hasOwnProperty.call(schema, name)) {
            const field = schema[name];

            if (this.tokenOnlyFields.includes(name)) {
              newSchema[name] = field;
            }
          }
        }
      }

      return newSchema || schema;
    },
  },
  created() {
    const schema = require(`../../public/schemas/${this.$page.frontmatter.schema}.schema.json`);
    const landcycle = new this.$landcycle(schema);
    landcycle._init();

    this.showMore = Object.keys(schema).length > 4;
    this.schema = landcycle.schema;
  },
  methods: {
    toggleIndex() {
      this.willShowMore = !this.willShowMore;
    },
    getTitle(attribute) {
      switch (attribute) {
        case 'atomic':
          return 'Property available in AllCards JSON';
        case 'optional':
          return 'Property omitted when value returns a falsey or expected value';
        case 'deprecated':
          return 'Property will be removed in a future major or minor version release';
        case 'deck':
          return 'Property only available on a card within an Individual Deck JSON';
        case 'nullable':
          return 'Property may return a null value';
        case 'stale':
          return 'Property may return an undocumented value';
        case 'token':
          return 'Property only available on token cards';
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
