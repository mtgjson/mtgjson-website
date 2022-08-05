<template lang="pug">
.model-type
  .vue-toggler-plugin
    Toggle(v-model="toggleValue" @change="toggleType")
    p Show TypeScript notation
  div#model-type-code-block.language-ts(v-show="showType" v-html="currentType")
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
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

onMounted((): void => {
  const location: URL = new URL(window.location.href);
  const params: string[][] = Array.from(location.searchParams.entries());

  params.forEach((param: string[]): void => {
    const p: string = param[0];
    const v: string = param[1];

    if (p === 'ts' && v === 'true') {
      showType.value = !showType.value;
      toggleValue.value = !toggleValue.value;
    }
  });
});
</script>
