<template lang="pug">
  .schema(v-if="!schema")
    p.loading-msg Loading...
  .schema(v-else)
    //- Properties Options
    //- This fills out optional rendering
    .schema-options
      label(for="show-optional" ) Show optional properties:
      input(id="show-optional" type="checkbox" v-model="showOptional" :disabled="!canHideOptionals")
    //- Properties Index
    //- This fills out an anchored list of all the properties
    .schema-item.schema-index
      h4 Property Index
      p A list of all available properties.

      ol(:class="{hide: willShowMore, wontHide: !showMore}")
        li(
        v-for="(data, name) in filteredSchema"
        v-show="shouldShowProperty(data)"
        :key="name")
          router-link(:to="'#' + name") {{ name }}
      .show-more(v-if="showMore" @click="toggleIndex") {{ (willShowMore ? 'Show More' : 'Show Less') }}

    //- Properties Table
    //- This fills out a fully descriptive list of all the properties
    .schema-item.schema-data
      h4 Property Information

      blockquote.schema-data--table(
      v-for="(data, name) in filteredSchema"
      v-show="shouldShowProperty(data)"
      :key="name"
      :class="{omitted: (!data.example && showExample)}")
        .schema-data--table-anchor(:id="name" aria-hidden="true")

        DocumentationField(
        v-if="name"
        label="Name"
        title="The name of the property")
          h6(v-html="name")

        DocumentationField(
        v-if="name"
        label="Type"
        title="The type of the property")
          em(v-html="data.type")

        DocumentationField(
        v-if="!getValues(name)"
        label="Example"
        title="Example of the property value")
          pre(v-html="data.example")

        DocumentationField(
        v-if="getValues(name)"
        label="Examples"
        title="All possible values of the property")
          .values-list
            ol.values-list--code(@click="toggleValue")
              li(v-for="(value, key) in getValues(name)" :key="key") "{{ value }}"

        DocumentationField(
        v-if="name"
        label="Description"
        title="The description of the property and values")
          p(v-html="data.description")

        DocumentationField(
        v-if="data.attributes"
        label="Attributes"
        title="Any attributes of the property")
          .attribute(
            v-for="(attribute, key) in data.attributes"
            :key="key"
            :class="getAttribute(attribute)"
            :title="getTitle(getAttribute(attribute))") {{ attribute.replace('-', ' ') }}

        DocumentationField(
        v-if="name"
        label="Introduced"
        title="When the property was introduced")
          em(v-html="data.introduced")
</template>

<script>
import DocumentationField from "./DocumentationField";
export default {
  name: "Documentation",
  components: { DocumentationField },
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
    canHideOptionals() {
      const keys = Object.keys(this.schema).length;
      let count = 0;

      for (let prop in this.schema) {
        let attr = this.schema[prop].attributes;

        if (attr) {
          count = count + 1;
        }
      }

      return count !== keys && count !== 0;
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
          } else if (
            // All non-restrictive
            this.isDeckCard ||
            (!field.isTokenOnlyProperty &&
              !field.isManifestOnlyProperty &&
              !field.isDeckOnlyProperty)
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

    await this.$helpers.setStoreState.apply(this, ["EnumValues"]);

    this.isAtomicCard = this.$page.frontmatter.title.includes("(Atomic)");
    this.isTokenCard = this.$page.frontmatter.title.includes("(Token)");
    this.isDeckCard = this.$page.frontmatter.title.includes("(Deck)");
    this.isManifest = this.$page.frontmatter.title.includes("List"); // SetList/DeckList

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
        (!this.showOptional && !prop.attributes) ||
        (prop.attributes && !prop.attributes.includes("optional"))
      );
    },
    getValues(property) {
      const schema = this.$page.frontmatter.schema; // schema file should match key name
      const keys = Object.keys(this.values); // Keys of the EnumValues file

      let pageProperty = "";
      let values = false;
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
