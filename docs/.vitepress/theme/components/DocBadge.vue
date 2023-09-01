<template lang="pug">
Badge(:type="type" :text="text" :title="title")
</template>

<script setup lang="ts">
type Props = {
  text: string;
  type: string;
};

const props: Props = defineProps<Props>();
const tooltip = props.text.charAt(0).toUpperCase() + props.text.slice(1, props.text.length);

const title: string = `${tooltip} Property`;
</script>
