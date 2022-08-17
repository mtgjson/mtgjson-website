<template lang="pug">
#property-toggler.property-toggler(v-if="hasOptionals")
  DataToggler(:callback="toggleOptionals" :label="'Hide Optional Properties'")
  span (Showing {{ count }})
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import DataToggler from './DataToggler.vue';
import $ from 'jquery';

const hiddenTOCProperties = ref<string[]>([]);
const allTOCAnchors = ref<HTMLAnchorElement[]>([]);
const propertyBlocks = ref<HTMLElement[]>([]);
const hasOptionals = ref<boolean>(true);
const toggleValue = ref<boolean>(false);

const count = computed<number>((): number => (!toggleValue.value ? fullCount.value : hiddenCount.value));
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
  propertyBlocks.value = Array.from($('#model-properties ~ blockquote:has(i.optional)'));

  if (propertyBlocks.value.length === 0) {
    hasOptionals.value = false;
  }

  for (const block of propertyBlocks.value) {
    const propertyName = block.firstChild.firstChild.nodeValue.trim();

    hiddenTOCProperties.value.push(propertyName);
  }
});

const toggleOptionals = (): void => {
  const showOptionals = !toggleValue.value;

  toggleValue.value = showOptionals;

  toggleBlockOptionals(showOptionals);
  toggleTOCOptionals(showOptionals);
  toggleHeadingsContent(showOptionals);
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
  allTOCAnchors.value.forEach((tocAnchor: HTMLAnchorElement, index: number): void => {
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
  display: inline-flex;
  align-content: center;
  margin-bottom: 1rem;

  span {
    margin-left: 0.5rem;
    display: inline-flex;
    align-items: center;
  }

  &.none {
    position: relative;
    margin-bottom: 1rem;

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
}
</style>
