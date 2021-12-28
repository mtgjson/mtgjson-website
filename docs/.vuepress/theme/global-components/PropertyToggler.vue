<template lang="pug">
#property-toggler.property-toggler(v-if="noOptionals")
  label(for="property-toggler-input") Include optional properties
    span {{ ' ' }}(Showing {{ count }}):
  input#property-toggler-input(
    type="checkbox",
    @click="toggleOptionals",
    v-model="checked"
  )
</div>
</template>

<script>
// Why jQuery?
// We use it to backfill certain selecting logic that is just not available in CSS
import $ from "jquery";
export default {
  name: "PropertyToggler",
  data() {
    return {
      hiddenTOCProperties: [],
      allTOCAnchors: [],
      propertyBlocks: [],
      hasOptionals: true,
      checked: true,
    };
  },
  computed: {
    noOptionals() {
      return this.hasOptionals;
    },
    fullCount() {
      return this.allTOCAnchors.length;
    },
    hiddenCount() {
      return this.hiddenTOCProperties.length === this.allTOCAnchors.length
        ? 0
        : this.allTOCAnchors.length - this.hiddenTOCProperties.length;
    },
    count() {
      return this.checked ? this.fullCount : this.hiddenCount;
    },
  },
  mounted() {
    this.allTOCAnchors = Array.from($(".table-of-contents li a"));
    this.propertyBlocks = Array.from(
      $("#property-toggler ~ blockquote:has(i.optional)")
    );

    if (this.propertyBlocks.length === 0) {
      this.hasOptionals = false;
    }

    for (const block of this.propertyBlocks) {
      const propertyName = block.firstChild.innerText.split("# ")[1];

      this.hiddenTOCProperties.push(propertyName);
    }

    this.toggleTOCVariations();
  },
  methods: {
    toggleOptionals() {
      this.toggleBlockOptionals(this.checked);
      this.toggleTOCOptionals(this.checked);
      this.toggleHeadingsContent(this.checked);
    },
    toggleHeadingsContent(doHide) {
      const $propsHeading = document.querySelector("#model-properties");
      const $toggler = document.querySelector(".property-toggler");

      if (doHide && this.hiddenCount === 0) {
        $propsHeading.classList.add("none");
        $toggler.classList.add("none");
      } else {
        $propsHeading.classList.remove("none");
        $toggler.classList.remove("none");
      }
    },
    toggleBlockOptionals(doHide) {
      for (const element of this.propertyBlocks) {
        element.hidden = doHide;
      }
    },
    toggleTOCOptionals(doHide) {
      for (const [thisIndex, anchorElement] of this.allTOCAnchors.entries()) {
        const tocPropertyName = anchorElement.innerText;
        const tocListItem = this.allTOCAnchors[thisIndex].parentElement;

        if (this.hiddenTOCProperties.includes(tocPropertyName)) {
          tocListItem.hidden = doHide;
        }
      }
    },
    toggleTOCVariations() {
      const tocAnchorsMap = {};
      const tags = 'i:not(".optional")';
      const propertyBlocks = Array.from(
        $(`#property-toggler ~ blockquote:has(${tags})`)
      );

      // Map all TOC anchor links by its inner text
      for (const element of this.allTOCAnchors) {
        tocAnchorsMap[element.innerText] = element;
      }

      // Set all TOC anchor link tags with tag properties
      for (const propertyBlock of propertyBlocks) {
        const blockPropertyName =
          propertyBlock.firstChild.textContent.split("# ")[1];
        const tocPropertyElement = tocAnchorsMap[blockPropertyName];

        if (tocPropertyElement) {
          // Here's the problem...
          // We only focus on getting the _first_ tag in the property block
          const tag = Array.from($(propertyBlock).find(tags)[0].classList)[0];

          if (tocPropertyElement.classList.length < 1) {
            tocPropertyElement.classList.toggle("tag");
            tocPropertyElement.classList.toggle(tag);
            tocPropertyElement.title = tag + " property";
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.property-toggler {
  margin-bottom: 1rem;

  &.none {
    position: relative;
    margin-bottom: 2.5rem;

    &::after {
      content: "No Available Properties";
      position: absolute;
      top: 2.5rem;
      left: 0;
      font-size: 1rem;
      color: var(--gray-color);
      font-weight: bold;
    }
  }

  label {
    font-weight: bold;
    cursor: pointer;

    span {
      font-weight: normal;
    }
  }
}
</style>
