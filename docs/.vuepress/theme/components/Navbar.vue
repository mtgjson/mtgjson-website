<template lang="pug">
  header.navbar
    .navbar-options
      SidebarButton.desktop-hide(@toggle-sidebar="$emit('toggle-sidebar')")
      Logo
      NavLinks.mobile-hide
      ThemeSwitcher.desktop-hide
</template>

<script>
import ThemeSwitcher from '../global-components/ThemeSwitcher';
import NavLinks from './NavLinks';
import SidebarButton from './SidebarButton';
import Logo from './Logo';

export default {
  components: {
    SidebarButton,
    ThemeSwitcher,
    NavLinks,
    Logo,
  },
};

// function css(el, property) {
//   // NOTE: Known bug, will return 'auto' if style value is 'auto'
//   const win = el.ownerDocument.defaultView;
//   // null means not to return pseudo styles
//   return win.getComputedStyle(el, null)[property];
// }
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.navbar {
  display: flex;
  background-color: var(--bg-color);
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  height: $navbarHeight;
  align-items: center;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--bg-border-color);
  @extend $wrapper;

  &-options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: $MQMobile) {
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

@media (max-width: $MQMobile) {
  .navbar {
    &-options {
      max-width: $contentWidth;
    }
  }
}
</style>
