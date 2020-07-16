<template lang="pug">
  header.navbar
    .navbar-options
      SidebarButton.desktop-hide(@toggle-sidebar="$emit('toggle-sidebar')")
      router-link(:to="$localePath")
        NavMeta(:width="`60px`")
      NavLinks.mobile-hide
      ThemeSwitcher.desktop-hide
</template>

<script>
import NavLinks from './NavLinks';
import SidebarButton from './SidebarButton';
import NavMeta from '../global-components/NavMeta';
import ThemeSwitcher from '../global-components/ThemeSwitcher';

export default {
  components: {
    SidebarButton,
    ThemeSwitcher,
    NavLinks,
    NavMeta,
  },
};
</script>

<style lang="scss">
@import '../styles/wrapper';

.navbar {
  display: flex;
  position: relative;
  z-index: 9;
  height: var(--navbar-height);
  align-items: center;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--bg-border-color);
  @extend %wrapper;

  padding: 0 4rem;

  // Race condition with nesting Logo inside of router-link
  .router-link-exact-active.router-link-active:empty {
    display: none;
  }

  &-options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 719px) {
  .navbar {
    left: 0;

    &-options {
      display: flex;
      justify-content: space-between;
    }

    .sidebar-button {
      left: -0.5rem;
    }
  }
}

@media (max-width: 719px) {
  .navbar {
    padding: 0 2rem;

    &-options {
      max-width: var(--content-width);
    }
  }
}
</style>
