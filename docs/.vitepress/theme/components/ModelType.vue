<template lang="pug">
.model-type
  .vue-toggler-plugin
    Toggle(v-model="toggleValue" @change="toggleType")
    p Show model type
  div(v-show="showType")
    div.language-ts(v-html="currentType")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Toggle from '@vueform/toggle'
import typesAsJson from '../static/types.json';

interface Props {
  type: string;
}

const props = defineProps<Props>();

const toggleValue = ref<boolean>(false);
const showType = ref<boolean>(false);
const currentType = computed<object>(() => typesAsJson[props.type]);

const toggleType = (): void => {
  showType.value = !showType.value;
}
</script>

<style src='@vueform/toggle/themes/default.css'></style>
