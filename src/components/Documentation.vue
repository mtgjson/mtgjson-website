<template lang="pug">
  .documentation
    .leftbar
      .leftbar--container
        ol
          li(v-for="(value, key) in manifest", v:key="key")
            router-link(
              :to="{path: value}",
              replace
              v-on:click.native="getDocumentation") {{ value }}
    .rightbar
      Table(v-if='!isMainDocPage', v-bind='{ documentName, headings, properties }')
      DocNotes(v-else)
</template>

<script>
import Table from "@/components/Table";
import DocNotes from "@/components/DocNotes";

export default {
  name: "Documentation",
  components: {
    Table,
    DocNotes
  },
  data() {
    return {
      isMainDocPage: true,
      manifest: this.$store.getters.manifest,
      documentName: this.$route.params.id
    };
  },
  computed: {
    headings() {
      return this.$store.getters.currentDocument.headings;
    },
    properties() {
      return this.$store.getters.currentDocument.properties;
    }
  },
  watch: {
    $route (to, from){
      if( to.path.includes('docs')) this.isMainDocPage = true;
    }
  },
  mounted() {
    // Activate the table when the page is loaded for that resource
    this.getDocumentation(this.documentName);
  },
  methods: {
    getDocumentation(event) {
      this.documentName =
        event && event.currentTarget
          ? event.currentTarget.text
          : this.documentName;

      if (this.manifest.indexOf(this.documentName) < 0) {
        this.isMainDocPage = true;
        return;
      } else {
        this.isMainDocPage = false;
      }

      fetch(`../data/${this.documentName}.doc.json`)
        .then(res => res.json())
        .then(res => {
          /**
           * @todo: safeguard the data coming in and leaving
           */
          const key = Object.keys(res)[0];
          const newDocument = {
            headings: res[key].headings,
            properties: res[key].properties
          };

          this.$store.dispatch("update current document", newDocument);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/includes";
.documentation {
  display: flex;
  flex-wrap: nowrap;

  .leftbar {
    background-color: lightblue;
    box-sizing: border-box;
    flex: 0 0 220px;
    height: 100vh;
    margin-left: 0;

    .leftbar--container {
      ol {
        overflow: initial;

        li {
          list-style: none;

          a:link {
            display: block;
            padding: 20px 30px;
            text-decoration: none;
            color: initial;
            font-weight: bold;

            @extend %medium-headline;

            &:hover {
              background-color: #efefef;
            }

            &.router-link-exact-active {
              background-color: white;
            }
          }
        }
      }
    }
  }

  .rightbar {
    flex: auto;
    margin: 20px 30px 30px 30px;
    height: auto;
  }
}
</style>
