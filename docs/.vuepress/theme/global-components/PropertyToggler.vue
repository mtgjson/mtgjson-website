<template lang="pug">
  <div>
    <label>Hide optional properties</label>
    <input type="checkbox" @click="toggleOptionals" />
  </div>
</template>

<script>
export default {
  name: 'PropertyToggler',
  data(){
    return {
      isChecked: false
    }
  },
  methods: {
    toggleOptionals(){
      this.checked = !this.checked;

      if(this.checked){
      } else {

      }
    }
  }
}
</script>
