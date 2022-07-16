<template lang="pug">
.example-field(v-if="enums.length > 0", :class="{ showing: showAll }")
  strong Examples:{{ ' ' }}
  code(v-if="!showAll") {{ '"' + enums.slice(0, 5).join('", "') + '"' }}
    .show-btn(v-if="enums.length > 5", @click="toggleShowAll") Show&nbsp;More
  code(v-if="showAll && enums.length > 5") {{ '"' + enums.join('", "') + '"' }}
    .show-btn(@click="toggleShowAll") Show&nbsp;Less
</template>

<script setup>
import { defineProps, ref, computed, onMounted } from "vue";
import { useData } from "vitepress";
import { useStore } from "vuex";

const { frontmatter } = useData();
const store = useStore();

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const show = ref(false);

const allEnums = computed(() => store.state.EnumValues[frontmatter.value.schema]);
const showAll = computed(() => show.value);
const enums = computed(() => {
  let enums;

  if (allEnums.value) {
    enums = allEnums.value[props.type];

    if (enums) {
      return enums.sort();
    }
  }

  return [];
});

const toggleShowAll = () => {
  show.value = !show.value;
};

onMounted(() => {
  store.dispatch("FETCH_DATA", "EnumValues");
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
