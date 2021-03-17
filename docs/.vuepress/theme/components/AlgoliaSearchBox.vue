<template lang="pug">
  form#search-form.algolia-search-wrapper.search-box(
    role="search")

    input#algolia-search-input.search-query(placeholder="Search...")
</template>

<script>
export default {
  props: ['options'],
  watch: {
    $lang(newValue) {
      this.update(this.options, newValue);
    },

    options(newValue) {
      this.update(newValue, this.$lang);
    },
  },
  mounted() {
    this.initialize(this.options, this.$lang);
  },
  methods: {
    async initialize(userOptions, lang) {
      const { algoliaOptions = {} } = userOptions;
      const docsearch = await require('docsearch.js/dist/cdn/docsearch.min.js');
      await require('docsearch.js/dist/cdn/docsearch.min.css');

      docsearch(
        Object.assign({}, userOptions, {
          inputSelector: '#algolia-search-input',
          // #697 Make docsearch work well at i18n mode.
          algoliaOptions: Object.assign(
            {
              facetFilters: [`lang:${lang}`].concat(
                algoliaOptions.facetFilters || []
              ),
            },
            algoliaOptions
          ),
          handleSelected: (input, event, suggestion) => {
            this.$router.push(new URL(suggestion.url).pathname);
          },
        })
      );
    },

    update(options, lang) {
      this.$el.innerHTML =
        '<input id="algolia-search-input" class="search-query">';
      this.initialize(options, lang);
    },
  },
};
</script>

<style lang="scss">
.algolia-search-wrapper {
  flex: 1;

  & > span {
    vertical-align: middle;
  }

  .algolia-autocomplete {
    line-height: normal;
    height: 100%;
    display: flex !important;

    input {
      box-sizing: border-box;
      // height: 100%;
      // max-width: 40px;
    }

    .ds-dropdown-menu {
      background-color: #fff;
      border: 1px solid var(--accent-color);
      border-radius: 5px;
      font-size: 16px;
      margin: 6px 0 0;
      padding: 0;
      text-align: left;

      &:before {
        border: 1px solid var(--accent-color);
        border-left-width: 0;
        border-bottom-width: 0;
      }

      [class*=ds-dataset-] {
        border: none;
        padding: 0;
      }

      .ds-suggestions {
        margin-top: 0;
      }

      .ds-suggestion {
        border-bottom: 1px solid #dfdfdf;//var(--table-bg-color);
      }
    }

    .algolia-docsearch-suggestion--highlight {
      color: var(--accent-color);
    }

    .algolia-docsearch-suggestion {
      border-color: var(--gray-color);
      padding: 0;

      .algolia-docsearch-suggestion--category-header {
        padding: 5px 10px;
        margin-top: 0;
        background: var(--accent-color);
        color: #fff;
        font-weight: 600;
        border-width: 0;

        .algolia-docsearch-suggestion--highlight {
          background: rgba(255, 255, 255, 0.6);
        }
      }

      .algolia-docsearch-suggestion--wrapper {
        padding: 0;
      }

      .algolia-docsearch-suggestion--title {
        font-weight: 600;
        margin-bottom: 0;
        color: var(--dark-color);
      }

      .algolia-docsearch-suggestion--subcategory-column {
        vertical-align: top;
        padding: 5px 7px 5px 5px;
        border-color: var(--gray-color);
        background: #f1f3f5;

        &:after {
          display: none;
        }
      }

      .algolia-docsearch-suggestion--subcategory-column-text {
        color: #555;
      }
    }

    .algolia-docsearch-footer {
      border-color: var(--gray-color);
      margin: 10px;
    }

    .ds-cursor .algolia-docsearch-suggestion--content {
      background-color: #e7edf3 !important;
      color: var(--dark-3-color);
    }
  }
}

@media (min-width: 719px) {
  .algolia-search-wrapper {
    .algolia-autocomplete {
      .algolia-docsearch-suggestion {
        .algolia-docsearch-suggestion--subcategory-column {
          float: none;
          width: 150px;
          min-width: 150px;
          display: table-cell;
        }

        .algolia-docsearch-suggestion--content {
          float: none;
          display: table-cell;
          width: 100%;
          vertical-align: top;
        }

        .ds-dropdown-menu {
          min-width: 515px !important;
        }
      }
    }
  }
}

@media (max-width: 719px) {
  .algolia-search-wrapper {
    .ds-dropdown-menu {
      min-width: calc(100vw - 4rem) !important;
      max-width: calc(100vw - 4rem) !important;
    }

    .algolia-docsearch-suggestion--wrapper {
      padding: 5px 7px 5px 5px !important;
    }

    .algolia-docsearch-suggestion--subcategory-column {
      padding: 0 !important;
      background: white !important;
    }

    .algolia-docsearch-suggestion--subcategory-column-text:after {
      content: ' > ';
      font-size: 10px;
      line-height: 14.4px;
      display: inline-block;
      width: 5px;
      margin: -3px 3px 0;
      vertical-align: middle;
    }
  }
}
</style>
