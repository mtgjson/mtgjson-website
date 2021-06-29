# Contributing

The MTGJSON documentation website uses the [VuePress](https://v1.vuepress.vuejs.org/) framework with some tricks of our own.

## Knowledge Requirements

---

- Vue
- VuePress
- Markdown
- JSON
- SCSS
- SEO
- YAML
- Accessibility
- MTGJSON Files

## Technical Requirements

---

- Node
- npm

### Optional Requirements

---

- n
- imagemin
- imagemin-webp

## Directory Structure

---

Files/Directories were omitted that do not help understand this current project structure.

```sh
.
├── app.json # Configuration for Heroku review apps. Used to Heroku PR deployments
├── check-version.js # Ensures the developer environment is correct
├── static.json # Configuration for Heroku build. Used for Heroku PR deployments
├── __coverage__ # GENERATED. Coverage for unit tests
├── __tests__ # Unit tests
├── utils # Build utils run before site generation
│   ├── output/ # General purpose util output directory
│   ├── generate-contributors.js # Utility to generate a github contributors file
│   ├── generate-version-atom.js # Utility to generate a version atom of the site
│   ├── migrate-schema-to-markdown.js # DEPRECATED. Utility to generate markdown pages from a schema
│   └── regenerate-schema.js # DEPRECATED. Utility to add new fields to JSON schemas
└── docs # Home directory, outputs to `/dist`
    ├── README.md # Acts like a route entry point
    ├── **/* # Directories and their route entry point
    └── .vuepress # Main source files for the application
        ├── config.js # Main VuePress configuration
        ├── config.sidebar.js # Function to render the sidebar
        ├── enhanceApp.js # Attach configuration to Vue before build time
        ├── store.js # Vuex store for Vue to pseudo-prefetch API data
        ├── public/ # Available to the app home directory
        │   ├── favicons/ # All favicon images
        │   ├── images/ # All application images
        │   │   ├── assets/ # MTGJSON specific images
        │   │   ├── avatars/ # User/supporters avatar images
        │   │   └── **/* # Any other image
        │   └── robots.txt # For crawlers to index/not index certain pages
        ├── src # Helper data and functions
        │   ├── resources/ # JSON that powers parts of the site
        │   │   ├── contributors.json # Contributors data from github
        │   │   └── supporters.json # Project Patrons/Supporters
        │   ├── schemas/ # DEPRECATED. Saved for posterity
        │   │   └── *.schema.json # Specific schema that match API data
        │   └── scripts/ # Helper JS functions
        │       └── * # Any javascript helper function
        └── theme # Visuals
            ├── components/ # Vuepress theme components (Beware!)
            ├── global-components/
            │   ├── DownloadDecks.vue # Download decks list
            │   ├── DownloadField.vue # Renders a field within other components
            │   ├── DownloadSets.vue # Download sets list
            │   ├── ExampleField.vue # Render examples from EnumValues.json
            │   ├── NavMeta.vue # Header logo
            │   ├── PropertyToggler.vue # Toggler for optional documentation properties
            │   ├── Supporters.vue # Contributors/Patrons/Supporters for homepage
            │   ├── ThemeSwitcher.vue # Toggler for light/dark theme
            │   └── Version.vue # Render the current Meta.json
            ├── layouts/ # What the application will render at a top level
            │   ├── 404.vue # 404 page
            │   └── Layout.vue # Main page
            └── styles/ # SCSS/Stylus
                ├── *.scss # Styles
                └── palette.styl # Stylus requirement for VuePress, DO NOT REMOVE
```

## VuePress Configuration

---

Explaining the configuration as a whole would be best served by directly linking to the [VuePress documentation](https://v1.vuepress.vuejs.org/config/).

## Markdown Files

---

### Use and Purpose

---

> **Use**: To serve has as static routing of the application.  
> **Purpose**: All markdown files should be named `README.md`. That file will act as the single `index.html` for a directory.

### Markdown Structure

---

The structure of a file is simple. Frontmatter on top, everything else below it.

- Frontmatter is written in JSON (with strings).
- Markdown is written to a high-level of specification and should not be manipulated.
- Vue components are imported by placing them in a Markdown file.
- Plugins are provided by the VuePress community and can add syntactical sugar to rendering elements, such as Table of Contents.

### Markdown Syntax for Documentation Fields

---

An example of a property field structure in Markdown:

```markdown
> ### artist
> The name of the artist that illustrated the card art.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Attributes:** <i>optional</i>
```

You can also use the `<ExampleField type='<Enum Name>'` component to render examples provided the enum values exist in the EnumValues.json file. See a Markdown file for an example.

### Using Frontmatter

---

Frontmatter is configuration that begins each markdown file to define meta data for that "route". Such configuration is HTML Head data, Vue component data and state, and Plugin configuration.

You can also change configuration of VuePress by overwriting variables within the front matter, such a title, description, etc.

> Remember: Frontmatter goes at the top of any Markdown file.

#### Example

```json
{
  "title": "Card", # Meta title of page
  "schema": "card", # Powers certain Vue components
  "meta": [ # Head meta properties
    {
      "name": "description",
      "content": "Card (Set) data model documentation.",
    },
    {
      "name": "og:description",
      "content": "Card (Set) data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, card (set)",
    }
  ],
  "feed": {
    "enable": "true" # Include this for atom/rss XML
  }
}
---
```

## The Vuex Store

---

We use Vuex to fetch data from MTGJSON API's in order to fill our application data. However, we only do this during the first render so the application and API remains as performant as possible.

## enhanceApp.js

---

Because Vue backs this entire application we can inject some helpers in to Vue to be accessed in our components.

## Testing

---

We use Jest and we do our best.
