<template lang="pug">
#property-toggler.property-toggler(v-if="noOptionals")
  label(for="property-toggler-input") Include optional properties
    span {{" "}}(Showing {{ count }}):
  input(id="property-toggler-input" type="checkbox" @click="toggleOptionals" v-model="checked")
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
      hiddenAnchors: [],
      allAnchors: [],
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
      return this.allAnchors.length;
    },
    hiddenCount() {
      return this.hiddenAnchors.length === this.allAnchors.length
        ? 0
        : this.allAnchors.length - this.hiddenAnchors.length;
    },
    count(){
      return this.checked ? this.fullCount : this.hiddenCount;
    }
  },
  mounted() {
    const propertyBlocks = $("#property-toggler ~ blockquote:has(i.optional)");

    this.allAnchors = Array.from(
      document.querySelectorAll(".table-of-contents li a")
    );
    this.propertyBlocks = Array.from(propertyBlocks);
    this.hiddenAnchors = [];

    this.propertyBlocks.forEach((block) => {
      this.hiddenAnchors.push(block.children[0].id);
    });

    if (this.propertyBlocks.length === 0) {
      this.hasOptionals = false;
    }
  },
  methods: {
    toggleOptionals() {
      this.toggleBlockOptionals(this.checked);
      this.toggleTOCOptionals(this.checked);
      this.toggleHeadingsContent(this.checked);
    },
    toggleHeadingsContent(doHide) {
      const $propsHeading = document.querySelector('#model-properties');
      const $toggler = document.querySelector('.property-toggler');

      if(doHide && this.hiddenCount === 0){
        $propsHeading.classList.add('none');
        $toggler.classList.add('none');
      } else {
        $propsHeading.classList.remove('none');
        $toggler.classList.remove('none');
      }
    },
    toggleBlockOptionals(doHide) {
      this.propertyBlocks.forEach((el) => {
        el.hidden = doHide;
      });
    },
    toggleTOCOptionals(doHide) {
      this.hiddenAnchors.forEach((title) => {
        this.allAnchors.forEach((a, index) => {
          const href = a.href.split("#")[1];
          const tocLink = this.allAnchors[index].parentElement;

          if (href === title) {
            tocLink.hidden = doHide;
          }
        });
      });
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
