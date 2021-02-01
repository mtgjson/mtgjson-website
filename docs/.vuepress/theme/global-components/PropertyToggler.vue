<template lang="pug">
#property-toggler(v-if="noOptionals")
  label Hide optional properties
  input(type="checkbox", @click="toggleOptionals")
</div>
</template>

<script>
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
    this.blocks = $("#property-toggler ~ blockquote:has(i)");
    this.toHideTitles = Array.from(this.blocks.find("h3"));
    this.tocLinks = Array.from(document.querySelectorAll(".table-of-contents li a"));

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
      if (doHide) {
        this.blocks.hide();
      } else {
        this.blocks.show();
      }
    },
    toggleTOCOptionals(doHide) {
      this.toHideTitles.forEach((block) => {
        this.tocLinks.forEach((a, index) => {
          const href = a.href.split("#")[1];
          const tocLink = $(this.tocLinks[index]);

          if (href === block.id) {
            if (doHide) {
              tocLink.parent().hide();
            } else {
              tocLink.parent().show();
            }
          }
        });
      });
    },
  },
};
</script>
