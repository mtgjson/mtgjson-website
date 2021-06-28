<template lang="pug">
  header.navbar
    .navbar-options
      SidebarButton.desktop-hide(@toggle-sidebar="$emit('toggle-sidebar')")
      router-link.nav-logo-link(:to="$localePath").desktop-hide
        NavMeta(:width="`60px`")
      //- NavLinks.mobile-hide
      ThemeSwitcher
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
.navbar {
  display: flex;
  position: relative;
  z-index: 9;
  height: var(--navbar-height);
  align-items: center;
  padding: 0 4rem;
  margin-left: var(--sidebar-width);
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--bg-border-color);

  .nav-logo-link {
    text-decoration: none;
  }

  // Race condition with nesting Logo inside of router-link
  .router-link-exact-active.router-link-active:empty {
    display: none;
  }

  &-options {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}

@media (max-width: 719px) {
  .navbar {
    left: 0;
    border-bottom: 1px solid var(--bg-border-color);
    margin-left: 0;

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
