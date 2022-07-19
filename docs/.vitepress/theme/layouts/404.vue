<template lang="pug">
.error-page
  h1 Page Not Found
  p Sorry, there seems to be a problem or this page no longer exists. Go back to your previous page, check the URL or use one of these popular links below.
  ul
    li
      a(href="/") Home
    li
      a(href="/faq/") F.A.Q.
    li
      a(href="/downloads/all-files/") All Files
    li
      a(href="/abstract-models/all-prices/") All Prices
    li
      a(href="/data-models/card-set/") Card (Set) Model
    li
      a(href="/data-models/card-atomic/") Card (Atomic) Model
    li
      a(href="/data-models/set/") Set Model
</template>

<style lang="scss" scoped>
.error-page {
  ul {
    li {
      list-style-type: disc;
    }
  }
}
</style>
