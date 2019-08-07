<template lang="pug">
  div.sidebar-button(@click="$emit('toggle-sidebar')")
    svg.icon(xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512")
      path(fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z")
</template>

<style lang="stylus">
.sidebar-button {
  cursor: pointer;
  display: none;
  width: 24px;
  height: 24px;
  position: absolute;
  padding: 5px;
  top: 5px;
  left: 1rem;

  .icon {
    display: block;
    width: 24px;
    height: 24px;
    color: var(--text-color);
  }
}

@media (max-width: $MQMobile) {
  .sidebar-button {
    display: block;
  }
}
</style>
