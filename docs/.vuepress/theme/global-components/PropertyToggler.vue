<template lang="pug">
  div#property-toggler(v-if="noOptionals")
    label Hide optional properties
    input(type="checkbox" @click="toggleOptionals")
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'PropertyToggler',
  data(){
    return {
      optionals: [],
    }
  },
  computed: {
    noOptionals(){
      return this.optionals;
    }
  },
  mounted(){
    if($('#property-toggler ~ blockquote:has(i)').length === 0){
      this.optionals = false;
    }
  },
  methods: {
    toggleOptionals(){
      this.checked = !this.checked;

      if(this.checked){
        $('#property-toggler ~ blockquote:has(i)').hide();
      } else {
        $('#property-toggler ~ blockquote:has(i)').show();
      }
    }
  }
}
</script>
