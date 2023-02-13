<template lang="pug">
.model-type
  DataToggler(
    :callback="updateType",
    :label="'Show TypeScript Notation'"
  )
  .model-type-code.language-ts(v-show="showType" v-html="currentType")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataToggler from './DataToggler.vue';
import types from '../static/types.json';

type Props = {
  type: string;
};

const props = defineProps<Props>();

const showType = ref<boolean>(false);
const currentType = ref<object>(types[props.type]);

const updateType = (): void => {
  showType.value = !showType.value;
};
</script>

<style lang="scss" scoped>
.model-type {
  &-code {
    margin-top: 1rem;
  }
}
</style>
