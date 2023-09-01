<template lang="pug">
Badge(:type="type" :text="title" :title="tooltip" :class="inline ? 'doc-badge-inline' : ''" class="doc-badge")
</template>

<script setup lang="ts">
type Props = {
  text: string;
  type: string;
  inline?: boolean;
};

const props: Props = defineProps<Props>();
const title: string = props.text.charAt(0).toUpperCase();
// Handle multiple words
// const title: string = props.text.split(' ').map(text => {
//   return text.charAt(0).toUpperCase() + text.slice(1, text.length);
// }).join(' ');

let tooltip: string = `${title} property`;

switch (props.text) {
  case 'optional':
    tooltip = 'Property may not be available';
    break;

  case 'deprecated':
    tooltip = 'Property is deprecated';
    break;

  case 'preview':
    tooltip = 'Data is not complete';
    break;

  case 'online only':
    tooltip = 'Data is only relevant to digital products';
    break;

  case 'paper only':
    tooltip = 'Data is only relevant to paper products';
    break;

  default:
    break;
}
</script>

<style lang="scss" scoped>
.doc-badge {
  &-inline {
    margin: 0 !important;
  }
}
</style>
