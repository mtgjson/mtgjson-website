<template lang="pug">
  .theme-switcher(@click="switchTheme")
    .theme-switcher--button(
    v-if="activeTheme === lightTheme"
    title="Enable Dark Theme"
    :data-theme='darkTheme')
      IconDark
    .theme-switcher--button(
    v-if="activeTheme === darkTheme"
    title="Enable Light Theme"
    :data-theme='lightTheme')
      IconLight

</template>

<script>
import IconDark from '../../public/images/icon-dark.svg';
import IconLight from '../../public/images/icon-light.svg';

export default {
  name: "ThemeSwitcher",
  components: { IconDark, IconLight },
  data() {
    return {
      activeTheme: "",
      darkTheme: "dark",
      lightTheme: "light"
    };
  },
  beforeMount() {
    // Attempt to retrieve localStorage state
    if(this.testStorage() === true){
      const savedTheme = window.localStorage.getItem("theme");

      if(savedTheme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.body.classList.add('dark');
        document.body.classList.remove('light');

        this.activeTheme = 'dark';
      } else if(savedTheme === 'light' || window.matchMedia('(prefers-color-scheme: light)').matches){
        document.body.classList.add('light');
        document.body.classList.remove('dark');

        this.activeTheme = 'light';
      }
    }
  },
  methods: {
    switchTheme(e) {
      const newTheme = e.currentTarget.firstElementChild.dataset.theme;
      // Set state on body
      document.body.classList.remove(this.activeTheme);
      document.body.classList.add(newTheme);
      // Change favicon to match
      const oldLink = document.querySelector("link[rel*='icon']");
      let link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = `/favicons/favicon-${newTheme}.ico`;
      // Don't clog up the <head> with cascade
      oldLink.remove();
      // Add new favicon
      document.getElementsByTagName("head")[0].appendChild(link);
      // Store state in localStorage
      if(this.testStorage() === true){
        window.localStorage.setItem("theme", newTheme);
      }
      this.$store.dispatch('SET_THEME_COLOR', newTheme);
      this.activeTheme = newTheme;
    },
    testStorage(){
      var test = 'test';

      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch(e) {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.theme-switcher {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &--button {
    width: 25px;
    height: 25px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--text-color);
    }
  }
}
</style>
