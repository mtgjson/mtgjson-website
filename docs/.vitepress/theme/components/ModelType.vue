<template lang="pug">
.model-type
  .vue-toggler-plugin
    Toggle(v-model="toggleValue" @change="toggleType")
    p Show TypeScript notation
  div.language-ts(v-show="showType" v-html="currentType")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Toggle from '@vueform/toggle';
import typesAsJson from '../static/types.json';

type Props = {
  type: string;
};

const props = defineProps<Props>();

const toggleValue = ref<boolean>(false);
const showType = ref<boolean>(false);
const currentType = computed<object>(() => typesAsJson[props.type]);

const toggleType = (): void => {
  showType.value = !showType.value;
};
</script>
