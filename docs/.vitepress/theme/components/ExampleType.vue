<template lang="pug">
.example-type
  strong Type:&nbsp;
  code {{ type }}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import { useStore } from '../store';
import type { TMeta } from '../types';

  type Props = {
    type: string;
  };

const props: Props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.example-type {
  position: relative;
  display: flex;
  align-items: center;

  code {
    line-height: 1rem !important;
    margin-left: 0;
  }
}
</style>
