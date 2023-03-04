<template lang="pug">
.example-field(
  v-if="enums.length > 0",
  :class="{ showing: showAll }"
)
  strong Example:&nbsp;
  code(v-if="!showAll") {{ '"' + enums.sort().slice(0, minimumToShow).join('", "') + '"' }}
    .show-btn(
      v-if="enums.length > minimumToShow",
      @click="toggleShowAll"
    ) Show&nbsp;More
  code(v-else) {{ '"' + enums.sort().join('", "') + '"' }}
    .show-btn(
      v-if="enums.length > minimumToShow"
      @click="toggleShowAll"
    ) Show&nbsp;Less
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData } from 'vitepress';
import { useStore } from '../store';
import type { TMeta } from '../types';

type Props = {
  type: string;
};

const props = defineProps<Props>();

const minimumToShow = 5;

const { frontmatter } = useData();
const store = useStore();

const showAll = ref<boolean>(false);

const allEnums = computed<object>((): object => store.EnumValues);
const metaFakeEnums = computed<TMeta>((): TMeta => store.Meta);
const thisEnum = computed<object>((): object => allEnums.value[frontmatter.value.enum]);
const enums = computed<string[]>((): string[] => {
  if ( metaFakeEnums.value && frontmatter.value.enum === 'meta') {
    return [ metaFakeEnums.value[props.type] ];
  }

  if (thisEnum.value && thisEnum.value[props.type]) {
    return thisEnum.value[props.type];
  }

  return [];
});

const toggleShowAll = (): void => {
  showAll.value = !showAll.value;
};
</script>

<style lang="scss" scoped>
.example-field {
  position: relative;
  display: flex;
  align-items: center;

  code {
    padding-top: 0.15rem !important;
    padding-bottom: 0.15rem !important;
  }

  .show-btn {
    display: inline;
    margin-left: 0.5rem;
    color: var(--white-color);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
