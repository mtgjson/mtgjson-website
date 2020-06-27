<template lang="pug">
  .schema-data--table-item
    .heading
      p
        strong(:title="title") {{ label }}
    .content
      p
        slot
</template>

<script>
export default {
  name: "DocumentationField",
  props: [ "label", "title" ]
}
</script>

<style lang="scss" scoped>
@import "../styles/documentation";
</style>
