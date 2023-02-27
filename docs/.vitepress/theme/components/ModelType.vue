<template lang="pug">
.model-type.language-ts(v-html="currentType")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import types from '../static/types.json';

type Props = {
  type: string;
};

const props = defineProps<Props>();

const currentType = ref<object>(types[props.type]);

</script>
