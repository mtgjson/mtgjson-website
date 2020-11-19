<template lang="pug">
  .branding
    .branding-container
      .branding-container--col
        h2 Current Logo
        .img-wrap
          NavMeta(:hideText="true" width="70px")
        .dl-wrap
          p.small-header Downloads:
          .dl-wrap--row
            a.dl-btn(href="/images/assets/logo-mtgjson-light-blue.svg" download) Light Blue SVG
            a.dl-btn(href="/images/assets/logo-mtgjson-dark-blue.svg" download) Dark Blue SVG
            a.dl-btn(href="/images/assets/logo-mtgjson-black.svg" download) Black SVG
            a.dl-btn(href="/images/assets/logo-mtgjson-white.svg" download) White SVG
          .dl-wrap--row
            a.dl-btn(href="/images/assets/logo-mtgjson-light-blue.png" download) Light Blue PNG
            a.dl-btn(href="/images/assets/logo-mtgjson-dark-blue.png" download) Dark Blue PNG
            a.dl-btn(href="/images/assets/logo-mtgjson-black.png" download) Black PNG
            a.dl-btn(href="/images/assets/logo-mtgjson-white.png" download) White PNG
        .embed-wrap
          p.small-header Embedded Code:
          pre.embed-copy(contenteditable spellcheck="false") {{ renderAttributionEmbed() }}
          button.cta-btn(@click="copyEmbed" data-which="0") Copy Embed
</template>

<script>
import NavMeta from "./NavMeta";
export default {
  name: "BrandAssets",
  components: { NavMeta },
  data() {
    return {
      didCopy: false,
      didCopyAnimationDelay: 400
    };
  },
  methods: {
    copyEmbed(e) {
      if (document && window) {
        const textRange = document.createRange();
        const which = e.currentTarget.dataset.which;
        const embedCopies = document.querySelectorAll(".embed-copy");
        const embedCode = embedCopies[which];

        textRange.setStartBefore(embedCode);
        textRange.setEndAfter(embedCode);

        window.getSelection().removeAllRanges(); // Chrome bug, requires ensuring no selections first
        window.getSelection().addRange(textRange);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();

        this.showDidCopy(embedCode);
      }
    },
    showDidCopy(embedCode) {
      if (!this.didCopy && embedCode) {
        this.didCopy = true;

        embedCode.classList.add("copied");

        if (window) {
          window.setTimeout(() => {
            embedCode.classList.remove("copied");
            this.didCopy = false;
          }, this.didCopyAnimationDelay);
        }
      }
    },
    renderAttributionEmbed() {
      return `<a href="https://mtgjson.com" style="display: inline-flex; align-items: center;"><img src="http://mtgjson.com/images/assets/logo-mtgjson-light-blue.svg" width="60px" title="MTGJSON logo"><p style="margin-left: 10px">Powered by MTGJSON</p></a>`;
    }
  }
};
</script>

<style lang="scss" scoped>
.branding {
  &-container {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    padding: 0;

    &--col {
      margin-bottom: 2rem;

      &:last-of-type {
        margin-bottom: 0;
      }

      h5 {
        margin-bottom: 1rem;
      }

      .img-wrap {
        height: 50px;
        overflow: hidden;

        img {
          width: auto;
          height: 100%;
        }

        .logo {
          float: left;
          margin-left: 1rem;

          &:first-of-type {
            margin-left: 0;
          }
        }
      }

      .img-wrap,
      .dl-wrap {
        margin-bottom: 1.5rem;

        &--row {
          display: block;
          margin-bottom: 1rem;
        }
      }

      .embed-wrap {
        pre {
          border-width: 0;
          // max-width: 500px;
          display: block;
          line-height: 1.2rem;
          margin-bottom: 1rem;
          overflow-x: auto;
          white-space: pre-wrap;
          word-wrap: break-word;
          transition: all 0.25s ease-in-out;
          border: 1px solid var(--code-bg-color);
          padding: 1em;

          &:focus {
            outline: 0;
          }

          &.copied {
            background-color: seagreen;
            color: var(--light-color);
            font-weight: bold;
            transition: all 0.25s ease-in-out;
          }
        }
      }
    }
  }
}

@media (max-width: 940px) {
  .branding {
    &-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
