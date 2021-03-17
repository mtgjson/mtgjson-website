<template lang="pug">
  main.home(aria-labelledby="main-title")
    .home-content
      .hero
        img(
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          alt="hero")

        h1#main-title MTGJSON

        p.description Portable formats for Magic: The Gathering card data

        p.action(v-if="data.actionText && data.actionLink")
          NavLink.action-button(:item="actionLink")

      .features(
        v-if="data.features && data.features.length")

        .feature(
          v-for="(feature, index) in data.features"
          :key="index")

          h2 {{ feature.title }}
          p {{ feature.details }}

      Content.custom

    .footer(v-if="data.footer") {{ data.footer }}
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  components: { NavLink },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  }
};
</script>

<style lang="scss">
.home {
  padding: var(--navbar-height) 2rem 0;
  display: block;
  background-color: var(--bg-dark-color);

  &-content {
    max-width: 960px;
    margin: 0 auto;
  }

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1,
    .description,
    .action {
      margin: 1.8rem auto;
    }

    .description {
      // max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: var(--light-gray-color);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: var(--accent-color);
      padding: 0.8rem 1.6rem;
      border-radius: 5px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid var(--accent-color);

      &:hover {
        background-color: var(--accent-color);
      }
    }
  }

  .features {
    border-top: 1px solid var(--gray-color);
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: var(--light-gray-color);
    }

    p {
      color: var(--light-gray-color);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid var(--gray-color);
    text-align: center;
    color: var(--light-gray-color);
  }
}

@media (max-width: 719px) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: 719px) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1,
      .description,
      .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
