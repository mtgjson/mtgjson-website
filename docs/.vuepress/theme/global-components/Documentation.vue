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
            p(title="The name of the property") Name
          .name
            a(:href="`#${name}`")
              h6 {{ name }}

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
      schema: undefined,
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
            attributes = attributes.concat(field.attributes);
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

    this.showMore = Object.keys(schema).length > 4;
    this.schema = new this.$landcycle(schema).schema;
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
h4 {
  margin-bottom: 0;
  padding-bottom: 10px;
}

h6, p {
  color: var(--text-color);
  margin: 0;
  font-size: 14px;
  line-height: 1.7em;
}

h6 {
  transition: 0.25s ease-in-out;
  position: relative;
  padding: 0;
  margin: 0;

  a {
    position: absolute;
    left: 0;
  }
}

em {
  color: var(--gray-color);
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
  position: relative;
  display: inline-block;
  text-transform: capitalize;
  overflow: hidden;
  z-index: 2;
  color: var(--dark-color);
  font-weight: bold;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }

  &.atomic {
    &::before {
      background-color: var(--blue-color);
    }
  }

  &.optional {
    &::before {
      background-color: var(--spoiler-color);
    }
  }

  &.deprecated {
    &::before {
      background-color: var(--red-color);
    }
  }

  &.deck {
    &::before {
      background-color: var(--green-color);
    }
  }

  &.nullable {
    &::before {
      background-color: var(--red-color);
    }
  }

  &.stale {
    &::before {
      background-color: var(--medium-gray-color);
    }
  }

  &.token {
    &::before {
      background-color: plum;
    }
  }
}

.schema {
  &-item {
    margin-bottom: 30px;

    ol, ul {
      margin-left: 0;
    }
  }

  &-index {
    ol {
      margin: 0;
      padding-left: 15px;
      list-style: disc;
      position: relative;
      overflow: hidden;
      padding-bottom: 30px;
      border-bottom: 1px solid var(--bg-color);

      li {
        list-style: disc;
      }

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
        box-shadow: 5px 5px 10px var(--shadow-color);
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
      color: var(--gray-color);
    }

    .show-more {
      color: var(--accent-color);
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
        display: flex;
        margin-top: 5px;

        .attribute {
          cursor: initial;
        }
      }

      span {
        font-size: 12px;
        line-height: 1.7em;
      }
    }
  }

  &-data {
    blockquote {
      background-color: var(--table-bg-color);
      border-color: var(--table-border-color);

      &:hover {
        border-color: var(--accent-color);
      }
    }

    &--table {
      padding: 0;
    }

    &--table, &--table-continued {
      position: relative;
      margin-top: 10px;
      overflow: hidden;
      box-sizing: border-box;
      margin-bottom: 25px;

      &:hover {
        .name {
          h6 {
            color: var(--accent-color);
            transition: 0.25s ease-in-out;
          }
        }
      }

      &-continued {
        display: flex;
        justify-content: center;
        padding: 7px 13px 17px;
        font-weight: bold;
        cursor: help;
      }

      // Allows us to anchor to a screen safe position
      &-anchor {
        position: absolute;
        top: -($navbarHeight + 1rem);
      }

      &-item {
        display: grid;
        grid-template-columns: minmax(min-content, 150px) 1fr;
        border-bottom: 1px solid var(--table-border-color);

        &:last-of-type {
          border-bottom-width: 0;
        }

        .heading {
          grid-column: span 1;
          text-align: left;
          text-transform: capitalize;
          font-weight: bold;
          background-color: var(--table-heading-color);
          border-right: 1px solid var(--table-border-color);
          padding: 7px 13px;
          display: flex;
          align-items: center;

          & > * {
            cursor: help;
          }

          & + * {
            padding: 7px 13px;
            display: flex;
            align-items: center;
            grid-column: span 1;
          }
        }

        .type {
          & > *[title] {
            cursor: help;
          }
        }

        .name {
          a {
            text-decoration: none;
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
        border-left-width: 1px;

        &-item {
          grid-template-columns: 1fr;

          &, .heading {
            border-width: 0;
          }
        }
      }
    }
  }
}
</style>
