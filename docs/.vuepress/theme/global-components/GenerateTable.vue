<!-- Pug case statements do not work for our hydration purposes -->
<template lang="pug">
  .schema(v-if="schema")
    //- Properties Legend
    .schema-item.schema-legend(v-if="schemaAttributes.size")
      h4 Property Attributes
      p The property attributes you see below earmark possible conditions for a field in this data structure.
      ol
        li(v-for="(attribute, key) in schemaAttributes")
          .attribute(:class="attribute") {{ attribute }}
          span {{ getTitle(attribute) }}

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
      .schema-data--table(v-for="(data, name) in filteredSchema" v-if="name !== '...'")
        //- Property Name
        .schema-data--table-item
          .heading
            p Name
          .name
            h6(:id="name") {{ name }}
              a(:href="`#${name}`" aria-hidden="true" class="header-anchor") #

        //- Property Type
        .schema-data--table-item
          .heading
            p Type
          .type
            p
              em {{ data.type }}

        //- Property Introduction
        .schema-data--table-item(v-if="data.introduced")
          .heading
            p Introduced
          .introduced
            p
              em {{ data.introduced }}

        //- Property Attributes
        .schema-data--table-item(v-if="data.attributes")
          .heading
            p Attributes
          .attributes
            .attribute(
              v-for="(attribute, key) in data.attributes"
              :class="attribute"
              :title="getTitle(attribute)") {{ attribute }}

        //- Property Example
        .schema-data--table-item
          .heading
            p Example
          .example
            p
              pre(v-html="data.example")

        //- Property Description
        .schema-data--table-item
          .heading
            p Description
          .description
            p(v-html="data.description")
          
      .schema-data--table-continued(v-else v-for="(i, k) in 3" title="Denotes there are more sequential rows") ...
</template>

<script>
export default {
  name: 'GenerateTable',
  data() {
    return {
      schema: undefined,
      attributes: undefined,
      showMore: true,
      willShowMore: true,
    };
  },
  created() {
    const schema = require(`../../public/schemas/${
      this.$page.frontmatter.schema
    }.schema.json`);

    // Store the schema attributes for properties
    let attributes = [];
    for (let name in schema) {
      const field = schema[name];

      if (field.attributes) {
        attributes = attributes.concat(field.attributes);
      }
    }

    this.showMore = Object.keys(schema).length > 4;
    this.attributes = new Set(attributes);
    this.schema = new this.$landcycle(schema).schema;
  },
  computed: {
    schemaAttributes() {
      return new Set(Array.from(this.attributes).sort());
    },
    showIndex() {
      return !Object.keys(this.schema).includes('...');
    },
    filteredSchema() {
      const filteredTraits = [];
      let schema = undefined;

      if (this.$page.frontmatter.title === 'AllCards') {
        schema = {};

        for (let attribute of Array.from(this.attributes)) {
          if (attribute !== 'atomic' && attribute !== 'optional') {
            this.attributes.delete(attribute);
          }
        }

        for (let name in this.schema) {
          const field = this.schema[name];

          if (field.attributes && field.attributes.includes('atomic')) {
            schema[name] = field;
          }
        }
      }

      return schema || this.schema;
    },
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
          return 'Property omitted when value returns falsey or expected value';
        case 'deprecated':
          return 'Property will be removed in a future major or minor version release';
        case 'decks':
          return 'Property only available in an Individual Deck JSON';
        case 'nullable':
          return 'Property may return a null value';
        case 'stale':
          return 'Property may return an undocumented value';
        default:
          break;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
h4 {
  margin-bottom: 0;
  padding-bottom: 10px;
}

h6, p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7em;
}

h6 {
  position: relative;
  padding: 0;
  margin: 0;

  a {
    position: absolute;
    left: 0;
  }
}

em {
  color: $grayColor;
}

pre, code {
  display: inline-block;
  white-space: pre-line;

  &:empty {
    display: none;
  }
}

pre {
  margin: 7px 0;
  line-height: 1.7em;
}

.attribute {
  border-radius: 5px;
  margin-right: 5px;
  font-size: 10px;
  padding: 3px 5px;
  cursor: help;
  display: inline-block;
  text-transform: capitalize;
  font-weight: bold;
  color: $bgColor;

  &.atomic {
    background-color: lighten($accentColor, 25%);
  }

  &.optional {
    background-color: lighten($yellowColor, 50%);
  }

  &.deprecated {
    background-color: lighten(red, 30%);
  }

  &.decks {
    background-color: lighten($greenColor, 50%);
  }

  &.nullable {
    background-color: lighten(red, 60%);
  }

  &.stale {
    background-color: lighten(gray, 70%);
  }
}

.schema {
  &-item {
    margin-bottom: 30px;
  }

  &-index {
    ol {
      margin: 0;
      list-style: disc;
      position: relative;
      overflow: hidden;
      padding-bottom: 30px;
      border-bottom: 1px solid $bgColor;

      &::after {
        transform: rotateX(180deg);
        width: 100%;
        height: 40px;
        position: absolute;
        bottom: -40px;
        left: 0;
        right: 0;
        z-index: 1;
        content: '';
        box-shadow: 5px 5px 10px $bgColorDark;
      }

      &.hide {
        max-height: 90px;
        padding-bottom: 0;
      }

      &.wontHide {
        max-height: 100%;
        border-width: 0;

        &::after {
          box-shadow: none;
        }
      }
    }

    small {
      color: $grayColor;
    }

    .show-more {
      color: $accentColor;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      margin: 10px auto 0;
      cursor: pointer;
    }
  }

  &-legend {
    p {
      margin-bottom: 10px;
    }

    ol {
      padding-left: 0;

      li {
        display: block;
        cursor: initial;
      }

      span {
        font-size: 12px;
        line-height: 1.7em;
      }
    }
  }

  &-data {
    &--table, &--table-continued {
      position: relative;
      border-radius: 5px;
      margin-bottom: 25px;
      margin-top: 10px;
      overflow: hidden;
      box-sizing: border-box;

      // Visually correct border radius w/ border
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        border: 1px solid $tableBorderColor;
        border-radius: 5px;
        pointer-events: none;
        box-sizing: border-box;
      }

      &-continued {
        display: flex;
        justify-content: center;
        padding: 7px 13px 17px;
        font-weight: bold;
        cursor: help;
      }

      &-item {
        display: grid;
        grid-template-columns: minmax(min-content, 150px) 1fr;
        background-color: $tableColor;
        border-bottom: 1px solid $tableBorderColor;

        .heading {
          grid-column: span 1;
          text-align: left;
          text-transform: capitalize;
          font-weight: bold;
          background-color: $tableHeadingColor;
          border-right: 1px solid $tableBorderColor;
          padding: 7px 13px;
          display: flex;
          align-items: center;

          & + * {
            padding: 7px 13px;
            display: flex;
            align-items: center;
            grid-column: span 1;
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .schema {
    &-data {
      &--table {
        &-item {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
