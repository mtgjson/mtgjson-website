<template lang="pug">
.example-field(v-if="enums.length > 0", :class="{ showing: showAll }")
  strong Examples:{{ ' ' }}
  code(v-if="!showAll") {{ '"' + enums.slice(0, 5).join('", "') + '"' }}
    .show-btn(v-if="enums.length > 5", @click="toggleShowAll") Show&nbsp;More
  code(v-if="showAll && enums.length > 5") {{ '"' + enums.join('", "') + '"' }}
    .show-btn(@click="toggleShowAll") Show&nbsp;Less
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useData } from 'vitepress';
import { useStore } from '../store.js';

interface Props {
  type: string;
}

const { frontmatter } = useData();
const store = useStore();
const props = defineProps<Props>();
const showAll = ref<boolean>(false);
const allEnums = computed<object>((): object => store.EnumValues[frontmatter.value.schema]);
const enums = computed<string[]>((): string[] => {
  if(allEnums.value && allEnums.value[props.type]) {
    return allEnums.value[props.type];
  } else {
    return [];
  }
});

const toggleShowAll = (): void => {
  showAll.value = !showAll.value;
};

onMounted((): void => {
  store.fetchFromApi('EnumValues');
});
</script>

<style lang="scss" scoped>
.example-field {
  position: relative;
  display: flex;
  align-items: center;

  .show-btn {
    display: inline;
    margin-left: 0.5rem;
    color: var(--accent-color);
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
