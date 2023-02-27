<template lang="pug">
label.data-toggler(:class="class")
  input(
    type="checkbox"
    :checked="checked"
    @change="onChange")
  p.label(v-if="label") {{ label }}
</template>

<script setup lang="ts">
import type { HTMLChangeEvent } from '../types';

type Props = {
  class?: string;
  label?: string;
  checked?: boolean;
  callback?: (arg1?: any, arg2?: any) => void;
};

const props = defineProps<Props>();

const onChange = (event: HTMLChangeEvent): void => {
  props.callback(event.target.checked);
};
</script>

<style lang="scss" scoped>
.data-toggler {
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  input {
    margin: 0;
  }

  .label {
    margin: 0 0 0 0.5rem;
    font-weight: bold;
  }
}
</style>
