<!-- Pug case statements do not work for our hydration purposes -->
<template lang="pug">
  .schema
    //- Properties Index
    .schema-item.schema-index(v-if="showIndex")
      h4.toggle.hide(
        ref="showMoreToggle"
        @click="toggleList($event)"
        title="Tap to show more or less") Property Index
      ol
        li(v-for="(data, name) in filteredSchema")
          p
            router-link(:to="'#' + name") {{ name }}

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
      showMore: true
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
  mounted(){
    if(!this.showMore){
      this.$refs.showMoreToggle.classList.remove('toggle', 'hide');
    }
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
    toggleList(event) {
      if(this.showMore){
        event.currentTarget.classList.toggle('hide');
      }
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

.toggle {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: '';
    margin-left: 10px;
    margin-top: 5px;
    border: 5px solid transparent;
    border-top: 5px solid $textColor;
  }

  &.hide {
    &::after {
      margin-top: -5px;
      border: 5px solid transparent;
      border-bottom: 5px solid $textColor;
    }

    & + * {
      // display: none;
      position: relative;
      max-height: 90px;
      overflow: hidden;

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
        box-shadow: 5px 5px 10px white;
      }
    }
  }
}

.trait {
  border-radius: 5px;
  margin-right: 5px;
  font-size: 10px;
  padding: 3px 5px;
  cursor: help;
  display: inline-block;
  text-transform: capitalize;

  &.atomic {
    background-color: lighten($accentColor, 85%);
  }

  &.optional {
    background-color: lighten($yellowColor, 85%);
  }

  &.decks-only {
    background-color: lighten($greenColor, 85%);
  }

  &.nullable {
    background-color: lighten(red, 75%);
  }

  &.stale {
    background-color: lighten(gray, 75%);
  }
}

.schema {
  &-item {
    margin-bottom: 30px;
  }

  &-index {
    ol {
      margin-top: 0;
      list-style: disc;
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
        border: 1px solid $borderColor;
        border-radius: 5px;
        pointer-events: none;
        box-sizing: border-box;
      }

      &-continued {
        background-color: $tableAltBgColor;
        display: flex;
        justify-content: center;
        padding: 7px 13px 17px;
        font-weight: bold;
        cursor: help;
      }

      &-item {
        padding: 7px 13px;
        border-bottom: 1px solid $borderColor;
        grid-column: span 1;

        &.heading {
          grid-column: span 1;
          text-align: left;
          text-transform: capitalize;
          font-weight: bold;
          background-color: $tableAltBgColor;
          border-right: 1px solid $borderColor;
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
