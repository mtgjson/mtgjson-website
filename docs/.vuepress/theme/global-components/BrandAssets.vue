<template lang="pug">
  .branding
    h2 Logos
    .branding-container
      .branding-container--col
        h3 Current Logo
        .img-wrap
          Logo(:hideText="true" :width="`70px`")
        .dl-wrap
          h6 Download:
          a.dl-btn(href="/images/logo-mtgjson-light-blue.svg" download) Light Blue SVG
          a.dl-btn(href="/images/logo-mtgjson-dark-blue.svg" download) Dark Blue SVG
          a.dl-btn(href="/images/logo-mtgjson-black.svg" download) Black SVG
          a.dl-btn(href="/images/logo-mtgjson-white.svg" download) White SVG
        .embed-wrap
          h6 Embedded Code:
          pre.embed-copy(contenteditable spellcheck="false") {{ renderAttributionEmbed() }}
          a.dl-btn(@click="copyEmbed" data-which="0") Copy Embed
      .branding-container--col
        h3 Legacy Logo
        .img-wrap
          img(src="/images/logo-mtgjson-previous.svg" title="Previous MTGJSON logo")
        .dl-wrap
          h6 Download:
          a.dl-btn(href="/images/logo-mtgjson-previous.svg" download) Standard SVG
</template>

<script>
import Logo from '../components/Logo';
export default {
  name: 'BrandingGuide',
  components: { Logo },
  data() {
    return {
      didCopy: false,
      didCopyAnimationDelay: 400,
    };
  },
  methods: {
    copyEmbed(e) {
      if (document && window) {
        const textRange = document.createRange();
        const which = e.currentTarget.dataset.which;
        const embedCopies = document.querySelectorAll('.embed-copy');
        const embedCode = embedCopies[which];

        textRange.setStartBefore(embedCode);
        textRange.setEndAfter(embedCode);

        window.getSelection().addRange(textRange);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        this.showDidCopy(embedCode);
      }
    },
    showDidCopy(embedCode) {
      if (!this.didCopy && embedCode) {
        this.didCopy = true;

        embedCode.classList.add('copied');

        if (window) {
          window.setTimeout(() => {
            embedCode.classList.remove('copied');
            this.didCopy = false;
          }, this.didCopyAnimationDelay);
        }
      }
    },
    renderAttributionEmbed() {
      return `<a href="http://mtgjson.com" style="display: inline-flex; align-items: center;"><img src="http://mtgjson.com/images/logo-mtgjson-light-blue.svg" width="60px" alt="MTGJSON logo"><p style="margin-left: 10px">Powered by MTGJSON</p></a>`;
    },
  },
};
</script>

<style lang="stylus" scoped>
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

      h6 {
        margin-bottom: 1rem;
      }

      .img-wrap {
        height: 50px;
        overflow: hidden;

        img {
          width: auto;
          height: 100%;
        }
      }

      .img-wrap, .dl-wrap {
        margin-bottom: 1.5rem;
      }

      .embed-wrap {
        pre {
          border-width: 0;
          max-width: 500px;
          display: block;
          line-height: 1.2rem;
          margin-bottom: 1rem;
          overflow-x: auto;
          white-space: pre-wrap;
          word-wrap: break-word;
          transition: all 0.25s ease-in-out;
          border: 1px solid var(--code-bg-color);

          &:focus {
            outline: 0;
            border: 1px solid var(--code-text-color);
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
