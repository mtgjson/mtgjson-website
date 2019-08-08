<template lang="pug">
  header.navbar
    .navbar-options
      SidebarButton.can-hide(@toggle-sidebar="$emit('toggle-sidebar')")
      Logo.logo.can-hide
      ThemeSwitcher
</template>

<script>
import NavLinks from './NavLinks';
import ThemeSwitcher from '../global-components/ThemeSwitcher';
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
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: $sidebarWidth;
  height: $navbarHeight;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  @extend $wrapper;

  .logo {
    transform: scale(.7);
  }

  &-options {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: $contentWidth;
  }

  .can-hide {
    display: none;
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

    .can-hide {
      display: block;
    }
  }
}
</style>
