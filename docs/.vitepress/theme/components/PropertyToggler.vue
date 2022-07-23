<template lang="pug">
#property-toggler.property-toggler(v-if="hasOptionals")
  input#property-toggler-input(
    type="checkbox",
    @click="toggleOptionals",
    v-model="checked"
  )
  label(for="property-toggler-input") Include optional properties
    span {{ ' ' }}(Showing {{ count }})
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import $ from 'jquery';

const hiddenTOCProperties = ref<string[]>([]);
const allTOCAnchors = ref<HTMLAnchorElement[]>([]);
const propertyBlocks = ref<HTMLElement[]>([]);
const hasOptionals = ref(true);
const checked = ref(true);

const count = computed<number>((): number => (checked.value ? fullCount.value : hiddenCount.value));
const fullCount = computed<number>((): number => allTOCAnchors.value.length);
const hiddenCount = computed<number>((): number => {
  if (hiddenTOCProperties.value.length !== allTOCAnchors.value.length) {
    return allTOCAnchors.value.length - hiddenTOCProperties.value.length;
  } else {
    return 0;
  }
});

onMounted((): void => {
  allTOCAnchors.value = Array.from($('.table-of-contents li a'));
  propertyBlocks.value = Array.from($('#property-toggler ~ blockquote:has(i.optional)'));

  if (propertyBlocks.value.length === 0) {
    hasOptionals.value = false;
  }

  for (const block of propertyBlocks.value) {
    const propertyName = block.firstChild.firstChild.nodeValue.trim();

    hiddenTOCProperties.value.push(propertyName);
  }

  toggleTOCVariations();
});

const toggleTOCVariations = (): void => {
  const tocAnchorsMap: any = {};
  const tags: string = 'i:not(".optional")';
  const propertyBlocks: HTMLElement[] = Array.from($(`#property-toggler ~ blockquote:has(${tags})`));

  // Map all TOC anchor links by its inner text
  for (const element of allTOCAnchors.value) {
    tocAnchorsMap[element.innerText] = element;
  }

  // Set all TOC anchor link tags with tag properties
  propertyBlocks.forEach((propertyBlock: HTMLElement) => {
    const blockPropertyName: string = propertyBlock.firstChild.textContent.split('#')[0].trim();
    const tocPropertyElement: HTMLElement = tocAnchorsMap[blockPropertyName];

    if (tocPropertyElement) {
      const tocElement: HTMLElement = $(propertyBlock).find(tags)[0];
      const tag: string = Array.from(tocElement.classList)[0];

      if (tocPropertyElement.classList.length < 1) {
        tocPropertyElement.classList.toggle('tag');
        tocPropertyElement.classList.toggle(tag);
      }
    }
  });
};

const toggleOptionals = (): void => {
  toggleBlockOptionals(checked.value);
  toggleTOCOptionals(checked.value);
  toggleHeadingsContent(checked.value);
};

const toggleHeadingsContent = (doHide: boolean): void => {
  const $propsHeading: HTMLElement = document.querySelector('#model-properties');
  const $toggler: HTMLElement = document.querySelector('.property-toggler');

  if (doHide && hiddenCount.value === 0) {
    $propsHeading.classList.add('none');
    $toggler.classList.add('none');
  } else {
    $propsHeading.classList.remove('none');
    $toggler.classList.remove('none');
  }
};

const toggleBlockOptionals = (doHide: boolean): void => {
  for (const element of propertyBlocks.value) {
    element.hidden = doHide;
  }
};

const toggleTOCOptionals = (doHide: boolean): void => {
  allTOCAnchors.value.forEach((tocAnchor: HTMLAnchorElement, index: number) => {
    const tocPropertyName: string = tocAnchor.innerText;
    const tocListItem: HTMLElement = allTOCAnchors.value[index].parentElement;

    if (hiddenTOCProperties.value.includes(tocPropertyName)) {
      tocListItem.hidden = doHide;
    }
  });
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

  input {
    margin-right: 0.5rem;
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
