<!-- Pug case statements do not work for our hydration purposes -->
<template lang="pug">
  .schema
    //- Properties Index
    .schema-item.schema-index(v-if="showIndex")
      h4 Property Index
      ol(:class="{hide: willShowMore}")
        li(v-for="(data, name) in filteredSchema")
          p
            router-link(:to="'#' + name") {{ name }}
      .show-more(v-if="showMore" @click="toggleIndex") {{ (willShowMore ? 'Show More' : 'Show Less') }}

    //- Properties Legend
    .schema-item.schema-legend(v-if="schemaTraits.size")
      h4 Property Traits
      p The property trait tags you see below earmark possible conditions for a field in this data structure.
      .schema-legend--item(v-for="(trait, key) in schemaTraits")
        .trait(:class="trait") {{ prettyTrait(trait)}}
        span {{generateTitle(trait)}}

    //- Properties Table
    .schema-item.schema-data
      h4 Property Information
      .schema-data--table(v-for="(data, name) in filteredSchema" v-if="name !== '...'")
        //- Field Name
        .schema-data--table-item.heading
          p Name
        .schema-data--table-item.name
          h6(:id="name") {{ name }}
            a(:href="`#${name}`" aria-hidden="true" class="header-anchor") #

        //- Field Type
        .schema-data--table-item.heading
          p Type
        .schema-data--table-item.type
          p
            em(v-html="data.type")

        //- Field Traits
        .schema-data--table-item.heading(v-if="data.traits && data.traits.length")
          p Traits
        .schema-data--table-item.traits(v-if="data.traits && data.traits.length")
          .trait(
            v-for="(trait, key) in data.traits"
            :class="trait" v-html="prettyTrait(trait)"
            :title="generateTitle(trait)")

        //- Field Example
        .schema-data--table-item.heading
          p Example
        .schema-data--table-item.example
          p
            pre(v-html="data.example")

        //- Field Description
        .schema-data--table-item.heading
          p Description
        .schema-data--table-item.description
          p(v-html="data.description")
          
      .schema-data--table-continued(v-else v-for="(i, k) in 3" title="Denotes there are more sequential rows") ...
</template>

<script>
import landcycle from '../../scripts/Landcycle';
export default {
  name: 'GenerateTable',
  data() {
    return {
      schema: [],
      traits: [],
      showMore: true,
      willShowMore: true,
    };
  },
  created() {
    const schema = require(`../../public/schemas/${
      this.$page.frontmatter.schema
    }.schema.json`);

    // Store the schema traits for properties
    let traits = [];
    for (let name in schema) {
      const field = schema[name];

      if (field.traits) {
        traits = traits.concat(field.traits);
      }
    }

    this.showMore = Object.keys(schema).length > 4;
    this.traits = new Set(traits);
    this.schema = new this.$landcycle(schema).schema;
  },
  computed: {
    schemaTraits() {
      return new Set(this.traits);
    },
    showIndex() {
      return !Object.keys(this.schema).includes('...');
    },
    filteredSchema() {
      const filteredTraits = [];
      let schema = undefined;

      if (this.$page.frontmatter.title === 'AllCards') {
        schema = {};

        for (let trait of Array.from(this.traits)) {
          if (trait !== 'atomic' && trait !== 'optional') {
            this.traits.delete(trait);
          }
        }

        for (let name in this.schema) {
          const field = this.schema[name];

          if (field.traits && field.traits.includes('atomic')) {
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
    prettyTrait(trait) {
      return trait.replace('-', ' ');
    },
    generateTitle(title) {
      switch (title) {
        case 'atomic':
          return 'Field available in AllCards JSON';
        case 'optional':
          return 'Field omitted when value returns falsey or expected value';
        case 'decks-only':
          return 'Field only available in an Individual Deck';
        case 'nullable':
          return 'Field may return a null value';
        case 'stale':
          return 'Field may return an undocumented value';
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

.trait {
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
    background-color: lighten($accentColor, 70%);
  }

  &.optional {
    background-color: lighten($yellowColor, 70%);
  }

  &.decks-only {
    background-color: lighten($greenColor, 70%);
  }

  &.nullable {
    background-color: lighten(red, 70%);
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

    &--item {
      * {
        display: inline;
      }

      .trait {
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
      background-color: $tableColor;
      position: relative;
      display: grid;
      grid-template-columns: minmax(min-content, 150px) 1fr;
      border-radius: 5px;
      margin-bottom: 20px;
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
        padding: 7px 13px;
        border-bottom: 1px solid $tableBorderColor;
        grid-column: span 1;

        &.heading {
          grid-column: span 1;
          text-align: left;
          text-transform: capitalize;
          font-weight: bold;
          background-color: $tableHeadingColor;
          border-right: 1px solid $tableBorderColor;
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .schema {
    &-data {
      &--table {
        grid-template-columns: 1fr;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
