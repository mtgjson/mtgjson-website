<template lang="pug">
  .theme-switcher(@click="switchTheme")
    .theme-switcher--button(
    v-if="activeTheme === lightTheme"
    title="Enable Dark Theme"
    :data-theme='darkTheme')
      IconDark
    .theme-switcher--button(
    v-if="!activeTheme"
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
      activeTheme: document.body.classList[0],
      darkTheme: "dark",
      lightTheme: "light"
    };
  },
  methods: {
    switchTheme(e) {
      let newTheme = e.currentTarget.firstElementChild.dataset.theme;
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
      // Set state on body
      if(newTheme === 'light') {
        document.body.classList.add('light');
      } else {
        newTheme = "";
        document.body.classList.remove('light');
      }
      // Store state in localStorage
      if(this.$helpers.testStorage() === true){
        window.localStorage.setItem("theme", newTheme);
      }
      this.$store.dispatch('SET_THEME_COLOR', newTheme);
      this.activeTheme = newTheme;
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
