<template lang="pug">
  .schema(v-if="schema")
    //- Properties Index
    //- This fills out an anchored list of all the properties
    .schema-item.schema-index
      h4 Property Index
      p A list of all available properties.
      ol(:class="{hide: willShowMore, wontHide: !showMore}")
        li(v-for="(data, name) in filteredSchema" :key="name")
          p
            router-link(:to="'#' + name") {{ name }}
      .show-more(v-if="showMore" @click="toggleIndex") {{ (willShowMore ? 'Show More' : 'Show Less') }}

    //- Properties Table
    //- This fills out a fully descriptive list of all the properties
    .schema-item.schema-data
      h4 Property Information
      .schema-data--options(v-show="hasOptionals")
        label(for="show-optional") Show optional properties:
        input(id="show-optional" type="checkbox" v-model="showOptional")

      blockquote.schema-data--table(
      v-for="(data, name) in filteredSchema"
      v-if="shouldShowProperty(data)"
      :key="name"
      :class="{omitted: (!data.example && showExample)}")
        .schema-data--table-anchor(:id="name" aria-hidden="true")
        //- Property Name
        .schema-data--table-item(v-if="name")
          .heading
            p(title="The name of the property") Name
          .name
            a(:href="`#${name}`")
              h6
                strong(v-html="name")

        //- Property Type
        .schema-data--table-item(v-if="data.type")
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
        .schema-data--table-item(v-if="values && getValues(name)")
          .heading
            p(title="Possible values of the property") Values
          .values
            p.values-code
              ol.values-code--list.has-more(@click="toggleValue" @scroll="detectBottom")
                li(v-for="(value, key) in getValues(name)") "{{ value }}"

        //- Property Description
        .schema-data--table-item(v-if="data.description")
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
              :class="getAttribute(attribute)"
              :title="getTitle(getAttribute(attribute))") {{ attribute.replace('-', ' ') }}

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
  name: "Documentation",
  data() {
    return {
      schema: null,
      values: null,
      showMore: true,
      showExample: true,
      willShowMore: true,
      isAtomicCard: false,
      isTokenCard: false,
      isDeckCard: false,
      isManifest: false,
      showOptional: true
    };
  },
  computed: {
    hasOptionals(){
      let hasOptional = false;

      for(let prop in this.schema) {
        let attr = this.schema[prop].attributes;

        if(!hasOptional && attr){
          hasOptional = attr.includes('optional');
        }
      }

      return hasOptional;
    },
    filteredAttributes() {
      // Store the schema attributes for properties
      const schema = this.filteredSchema;
      let attributes = [];

      for (let name in schema) {
        if (hasOwnProperty.call(schema, name)) {
          const field = schema[name];

          if (field.attributes) {
            attributes = attributes.concat(
              field.attributes.map(attr => attr.split("-")[0])
            );
          }
        }
      }

      return new Set(attributes.sort());
    },
    filteredSchema() {
      const schema = this.schema;
      let filteredSchema = {};

      for (let name in schema) {
        if (hasOwnProperty.call(schema, name)) {
          const field = schema[name];

          if (this.isAtomicCard) {
            // Only Atomic properties
            if (field.isAtomicProperty) {
              filteredSchema[name] = field;
            }
          } else if (this.isTokenCard) {
            // Only Token properties
            if (field.isTokenProperty) {
              filteredSchema[name] = field;
            }
          } else if (this.isManifest) {
            // Only Manifest properties
            if (field.isManifestProperty) {
              filteredSchema[name] = field;
            }
          } else if (this.isDeckCard) {
            // All properties
            filteredSchema[name] = field;
          } else if (
            // All non-restrictive properties
            !field.isTokenOnlyProperty &&
            !field.isManifestOnlyProperty &&
            !field.isDeckOnlyProperty
          ) {
            filteredSchema[name] = field;
          }
        }
      }

      return filteredSchema;
    }
  },
  async created() {
    const schema = require(`../../public/schemas/${this.$page.frontmatter.schema}.schema.json`);
    const landcycle = new this.$landcycle(schema);
    await landcycle._init();

    this.isAtomicCard = this.$page.frontmatter.title.includes("(Atomic)");
    this.isTokenCard = this.$page.frontmatter.title.includes("(Token)");
    this.isDeckCard = this.$page.frontmatter.title.includes("(Deck)");
    this.isManifest = this.$page.frontmatter.title.includes("List"); // SetList/DeckList

    await this.$helpers.setStoreState.apply(this, [
      "EnumValues",
      "UPDATE_VALUES"
    ]);

    this.showMore = Object.keys(schema).length > 4;
    this.values = this.$store.getters.EnumValues;
    this.schema = landcycle.schema;
  },
  methods: {
    toggleIndex() {
      this.willShowMore = !this.willShowMore;
    },
    toggleValue(e) {
      e.currentTarget.classList.toggle("selected");
    },
    getAttribute(attribute = "") {
      return attribute.split("-")[0];
    },
    shouldShowProperty(prop) {
      return (
        this.showOptional ||
        (
          !this.showOptional && !prop.attributes ||
          prop.attributes && !prop.attributes.includes("optional")
        )
      );
    },
    detectBottom(e) {
      const isBottom = e.target.scrollTop === e.target.scrollTopMax;

      if (isBottom) {
        e.target.classList.remove("has-more");
      } else {
        e.target.classList.add("has-more");
      }
    },
    getValues(property) {
      const schema = this.$page.frontmatter.schema; // schema file should match key name
      const keys = Object.keys(this.values); // Keys of the KeyValues file
      let pageProperty = "";
      let values = null;
      let page = null;

      for (const key of keys) {
        if (schema.includes(key)) {
          pageProperty = key;
          break;
        }
      }

      page = this.values[pageProperty]; // lookup if we have a matching key to the page

      if (page) {
        values = page[property];
      }

      return values;
    },
    getTitle(attribute) {
      switch (attribute) {
        case "optional":
          return "Property omitted when value returns a falsey or expected value.";
        case "deprecated":
          return "Property will be removed in a future major or minor version release.";
        case "nullable":
          return "Property may return a null value.";
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/documentation";
</style>
