<template lang="pug">
  .custom-block.warning
    p.custom-block-title Version 5.0.0 Announcement
    p As of MTGJSON5, and going forward, web-served files will be available via a version specific "Web API" path: <code>/api/v5/*</code>. If your project depends on the web-served files please update your project to the new API as soon as possible. During the transition to v5, all v4 API routes are still available at: <code>/files/*</code>. For more information, see the <a href="/changelog/version-5/">Changelog</a>.
    ul
      li We now offer file verification with SHA-256. Every file has a SHA-256 file available at the same API location with an appended <code>.sha256</code> format. For example: <code>https://mtgjson.com/api/v5/AllPrintings.json.sha256</code>.
    small
      em Vanishing 3 (This message enters the website with 3 time counters on it. At the beginning of the next minor release, remove a time counter from it. When the last is removed, delete it.)
</template>

<style lang="scss" scoped>
ul {
  margin-top: 15px;

  li {
    margin-bottom: 15px;
  }
}

small {
  display: block;
  margin-top: 15px;
  color: var(--gray-color);
}
</style>
