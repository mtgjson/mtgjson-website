<template lang="pug">
#property-toggler.property-toggler(v-if="noOptionals")
  label(for="property-toggler-input") Include optional properties
    span {{ ' ' }}(Showing {{ count }}):
  input#property-toggler-input(
    type="checkbox",
    @click="toggleOptionals",
    v-model="checked"
  )
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import $ from 'jquery';

const hiddenTOCProperties = ref([]);
const allTOCAnchors = ref([]);
const propertyBlocks = ref([]);
const hasOptionals = ref(true);
const checked = ref(true);

const noOptionals = computed(() => hasOptionals.value);
const count = computed(() => (checked.value ? fullCount : hiddenCount));
const fullCount = computed(() => allTOCAnchors.value.length);
const hiddenCount = computed(() => {
  if (hiddenTOCProperties.value.length !== allTOCAnchors.value.length) {
    return allTOCAnchors.value.length - hiddenTOCProperties.value.length;
  } else {
    return 0;
  }
});

onMounted(() => {
  allTOCAnchors.value = Array.from($('.table-of-contents li a'));
  propertyBlocks.value = Array.from($('#property-toggler ~ blockquote:has(i.optional)'));

  if (propertyBlocks.value.length === 0) {
    hasOptionals.value = false;
  }

  for (const block of propertyBlocks.value) {
    const propertyName = block.firstChild.firstChild.data.trim();

    hiddenTOCProperties.value.push(propertyName);
  }

  toggleTOCVariations();
});

const toggleTOCVariations = () => {
  const tocAnchorsMap = {};
  const tags = 'i:not(".optional")';
  const propertyBlocks = Array.from($(`#property-toggler ~ blockquote:has(${tags})`));

  // Map all TOC anchor links by its inner text
  for (const element of allTOCAnchors.value) {
    tocAnchorsMap[element.innerText] = element;
  }

  // Set all TOC anchor link tags with tag properties
  for (const propertyBlock of propertyBlocks) {
    const blockPropertyName = propertyBlock.firstChild.textContent.split('#')[0].trim();
    const tocPropertyElement = tocAnchorsMap[blockPropertyName];

    if (tocPropertyElement) {
      // Here's the problem...
      // We only focus on getting the _first_ tag in the property block
      const tag = Array.from($(propertyBlock).find(tags)[0].classList)[0];

      if (tocPropertyElement.classList.length < 1) {
        tocPropertyElement.classList.toggle('tag');
        tocPropertyElement.classList.toggle(tag);
        tocPropertyElement.title = tag + ' property';
      }
    }
  }
};

const toggleOptionals = () => {
  toggleBlockOptionals(checked.value);
  toggleTOCOptionals(checked.value);
  toggleHeadingsContent(checked.value);
};

const toggleHeadingsContent = (doHide) => {
  const $propsHeading = document.querySelector('#model-properties');
  const $toggler = document.querySelector('.property-toggler');

  if (doHide && hiddenCount.value === 0) {
    $propsHeading.classList.add('none');
    $toggler.classList.add('none');
  } else {
    $propsHeading.classList.remove('none');
    $toggler.classList.remove('none');
  }
};

const toggleBlockOptionals = (doHide) => {
  for (const element of propertyBlocks.value) {
    element.hidden = doHide;
  }
};

const toggleTOCOptionals = (doHide) => {
  for (const [thisIndex, anchorElement] of allTOCAnchors.value.entries()) {
    const tocPropertyName = anchorElement.innerText;
    const tocListItem = allTOCAnchors.value[thisIndex].parentElement;

    if (hiddenTOCProperties.value.includes(tocPropertyName)) {
      tocListItem.hidden = doHide;
    }
  }
};
</script>

<style lang="scss" scoped>
.property-toggler {
  margin-bottom: 1rem;

  &.none {
    position: relative;
    margin-bottom: 2.5rem;

    &::after {
      content: 'No Available Properties';
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
