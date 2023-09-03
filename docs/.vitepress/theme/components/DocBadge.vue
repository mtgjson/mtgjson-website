<template lang="pug">
Badge(:type="type" :text="title" :title="tooltip" :class="inline ? 'inline' : ''" class="doc-badge")
</template>

<script setup lang="ts">
type Props = {
  text: string;
  type: string;
  inline?: boolean;
};

const props: Props = defineProps<Props>();
let title: string = props.text.charAt(0).toUpperCase();
let tooltip: string = '';

switch (props.text) {
  case 'abstract':
    tooltip = 'Abstract Data Model'
    break;

  case 'optional':
    tooltip = 'Property may not be available';
    break;

  case 'deprecated':
    tooltip = 'Property is deprecated';
    break;

  case 'partial':
    tooltip = 'Data is not fully complete';
    title = 'Partial';
    break;

  case 'online only':
    tooltip = 'Data is only a digital product';
    title = 'Digital Only';
    break;

  case 'paper only':
    tooltip = 'Data is only a paper product';
    title = 'Paper Only';
    break;

  case 'foil only':
    tooltip = 'Data is only a foil product';
    title = 'Foiled Only';
    break;

  case 'non-foil only':
    tooltip = 'Data is only a non-foil product';
    title = 'Non-Foiled Only';
    break;

  case 'foreign only':
    tooltip = 'Data is only a foreign product';
    title = 'Foreign Only';
    break;

  default:
    break;
}
</script>

<!-- This is unscoped so we can target this class elsewhere outside the component -->
<style lang="scss">
.doc-badge {
  &.sidebar {
    text-align: center;
    display: inline-block;
    color: var(--white-color);
    border: 2px solid var(--white-color);
    background-color: transparent;
    border-radius: var(--common-radius);
    padding: 0 0.5rem;
    line-height: 0.5rem;
    font-size: 12px;
    line-height: 22px;
    font-weight: bold;
    margin-left: 0.5rem;
  }

  &.abstract {
    color: var(--vp-badge-info-text);
    border-color: var(--vp-badge-info-border);
    background-color: var(--vp-badge-info-bg);
  }

  &.inline {
    margin: 1rem 0.25rem 0 0 !important;
    display: inline-block;
  }
}
</style>
