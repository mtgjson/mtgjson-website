# Contributing
The MTGJSON documentation website uses the [VuePress](https://v1.vuepress.vuejs.org/) framework with some tricks of our own.

## Knowledge Requirements
- Vue
- VuePress
- Markdown
- JSON
- SCSS
- SEO
- Accessibility
- MTGJSON Files

## Technical Requirements
- Node
- NPM
- n

### Optional Requirements
- imagemin
- imagemin-webp

## Directory Structure
Files/Directories were omitted that do not help understand this current project structure.

```sh
.
├── __tests__ # unit tests
└── utils # build utils run before site generation
│   ├── generate-version-atom.js # util to create an atom of the site
│   ├── output/ # general purpose util output directory
│   └── regenerate-schema.js # Caution: Only to be used to add new fields via configuration
└── docs # home directory, outputs to `/dist`
    ├── README.md # acts like a route entry point
    ├── **/* # directories and their route entry point
    └── .vuepress # main source files for the application
        ├── config.js # main VuePress configuration
        ├── config.sidebar.js # function to render the sidebar
        ├── enhanceApp.js # Attach configuration to Vue before build time
        ├── store.js # Vuex store for Vue to pseudo-prefetch API data
        ├── public/ # available to the app home directory
        │   ├── **/* # all public files like the favicon and manifests
        │   ├── images/ # all application images
        │   │   ├── assets/ # MTGJSON specific images
        │   │   └── **/* # Any other image
        │   └── robots.txt # for the server
        ├── src # helper data and function
        │   ├── resources # any internal json
        │   │   └── supporters.json # powers the Supporters Vue component
        │   ├── schemas # powers certain Vue Documentation components, most of this is deprecated but saved for posterity
        │   │   └── *.schema.json # specific schema that match API data
        │   └── scripts # helper JS functions
        │       └── * # any javascript function
        └── theme # Visuals
            ├── components/ # Vuepress theme components (Beware!)
            ├── global-components
            │   ├── BrandAssets.vue # Marketing
            │   ├── DownloadDecks.vue # Download Decks
            │   ├── DownloadField.vue # Download
            │   ├── DownloadSets.vue # Download Sets
            │   ├── ExampleField.vue # Render examples from EnumValues.json
            │   ├── NavMeta.vue # Header logo
            │   ├── PropertyToggler.vue # Toggler for optional documentation properties
            │   ├── Supporters.vue # Patron/Supporters
            │   ├── ThemeSwitcher.vue # Logic light/dark theme
            │   └── Version.vue # Render the current Meta.json
            ├── layouts # What the application will render at a top level
            │   ├── 404.vue # 404 page
            │   └── Layout.vue # Available route
            └── styles/ # SCSS/Stylus
```

## VuePress Configuration

Explaining the configuration as a whole would be best served by directly to their own documentation [here](https://v1.vuepress.vuejs.org/config/).

## Markdown Files

### Use and Purpose
> **Use**: To serve has as static routing of the application.

> **Purpose**: All markdown files should be named `README.md`. That file will act as the single `index.html` for a directory.

### Markdown Structure
The structure of a file is simple. Frontmatter on top, everything else below it.
  - Frontmatter is written in JSON (with strings).
  - Markdown is written to a high-level of specification not can be manipulated.
  - Vue components are pseudo-imported by placing them in a Vue component in template syntax.
  - Plugins are provided by the VuePress community and can add syntactical sugar to rendering elements.

### Markdown Syntax for Documentation Fields
The structure of a documentation field is as follows:
> ### artist
> Name of the artist that illustrated the card art.  
>
> **Type:** `string`
> **Introduced:** `v4.0.0`
> **Attributes:** <i>optional</i>

You can also use the `<ExampleField type='<Enum Name>'` component to render examples provided the enum values exist in the EnumValues.json file.


### Using Frontmatter
Frontmatter is config that begins each markdown file to configuration a few things about that "route". Such configuration is HTML Head data, Vue component data and state, and Plugin configuration.

You can also change configuration of VuePress by overwriting variables within the front matter.

> Remember: Frontmatter goes at the top of any Markdown file.

#### Example
```json
---
{
  "title": "Card",
  "schema": "card",
  "meta": [
    {
      "name": "description",
      "content": "Card data model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, card",
    }
  ],
  "feed": {
    "enable": "true"
  }
}
---
```

### When not using Frontmatter
The markdown file will perform and parse just the way you would expect by writing any kind of Markdown or HTML.

You can also use a Vue component by placing `<MyComponentName />` anywhere on the markdown file. Props can also be passed to the component by using Frontmatter within the component but do not beed to be explicitly passed. However, strings may be explicitly passed as props.

## Documentation "Schemas"
In some cases, and most are deprecated, we use these are the single source of truth for the documentation rendering. These files are supposed to match the files from the API. They are formatted in a way assist rendering Vue components. Most of these files are only available for posterity.

## The Vuex Store
We use Vuex to fetch data from MTGJSON API's in order to fill our application data. However, we only do this during the first render so the application and api remains as performant as possible.

## enhanceApp.js
Because Vue backs this entire application we can interject some helpers in to Vue to be accessed in our components.

## Testing
We use Jest and we do our best.
