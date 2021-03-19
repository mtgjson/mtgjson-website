<template lang="pug">
#property-toggler(v-if="noOptionals")
  label Hide optional properties
  input(type="checkbox", @click="toggleOptionals")
</div>
</template>

<script>
// Why jQuery?
// We use it to backfill certain selecting logic that is just not available in CSS3
import $ from "jquery";
export default {
  name: "PropertyToggler",
  data() {
    return {
      blocks: null,
      toHideTitles: [],
      tockLinks: [],
      checked: false,
      optionals: true,
    };
  },
  computed: {
    noOptionals() {
      return this.optionals;
    },
  },
  mounted() {
    const blocks = $("#property-toggler ~ blockquote:has(i)");

    this.tocLinks = Array.from(document.querySelectorAll(".table-of-contents li a"));
    this.blocks = Array.from(blocks);
    this.toHideTitles = [];

    Array.from(blocks).forEach(block => {
      this.toHideTitles.push(block.children[0].id);
    })

    if (this.blocks.length === 0) {
      this.optionals = false;
    }
  },
  methods: {
    toggleOptionals() {
      this.checked = !this.checked;

      this.toggleBlockOptionals(this.checked);
      this.toggleTOCOptionals(this.checked);
    },
    toggleBlockOptionals(doHide){
      this.blocks.forEach(el => {
        el.hidden = doHide;
      });
    },
    toggleTOCOptionals(doHide) {
      this.toHideTitles.forEach((title) => {
        this.tocLinks.forEach((a, index) => {
          const href = a.href.split("#")[1];
          const tocLink = this.tocLinks[index].parentElement;

          if (href === title) {
            tocLink.hidden = doHide;
          }
        });
      });
    },
  },
};
</script>
