<template lang="pug">
.model-type
  DataToggler(:callback="updateType" :label="'Show TypeScript Notation'")
  div.model-type-code-block.language-ts(v-show="showType" v-html="currentType")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import DataToggler from './DataToggler.vue';
import typesAsJson from '../static/types.json';

type Props = {
  type: string;
};

const props = defineProps<Props>();

const showType = ref<boolean>(false);
const currentType = computed<object>(() => typesAsJson[props.type]);

const updateType = (): void => {
  showType.value = !showType.value;
};
</script>

<style lang="scss" scoped>
.model-type {
  &-code-block {
    margin-top: 1rem;
  }
}
</style>
