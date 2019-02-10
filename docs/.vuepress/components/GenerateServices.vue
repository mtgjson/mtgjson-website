<template lang="pug">
  .services-table
    .service(v-for="(service, key) in services")
      a(:href="service.link" target="_blank")
        img(v-if="service.image", :src="'/images/' + service.image", :alt="service.link", :title="service.name")
        p {{ service.name }}
</template>

<script>
export default {
  name: "GenerateServices",
  data() {
    return {
      defaultServices: [],
      defaultColumns: 0,
    };
  },
  computed: {
    columns(){
      return this.defaultColumns;
    },
    services() {
      return this.defaultServices;
    },
  },
  mounted() {
    let servicesData = require(`../services.js`).default;
    
    this.defaultColumns = servicesData.columns;
    this.defaultServices = servicesData.services;
  }
};
</script>

<style lang="scss" scoped>
.services-table {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #eaecef;
  border-right-width: 0;
  border-bottom: 0;

  .service {
    display: flex;
    flex: 0 0 25%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #eaecef;
    border-right: 1px solid #eaecef;
    transition: .25s all;

    &:hover {
      cursor: pointer;
      background-color: #f3f5f7;
      transition: .25s all;

      a {
        text-decoration: underline;
      }
    }

    a {
      display: block;
      text-align: center;
      
      img {
        width: auto;
        max-height: 65px;
        height: auto;
      }

      p {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.2em;
        word-wrap: anywhere;
        display: block;
      }
    }
  }
}

@media screen and (max-width: 570px){
  .service {
    flex: 0 0 50% !important;
  }
}
</style>
