### CONTRIBUTING
The MTGJSON documentation website uses the [Vuepress](https://v1.vuepress.vuejs.org/) framework with some tricks of our own.

## KNOWLEDGE REQUIREMENTS
- Vue
- Vuepress
- Markdown
- JSON
- SCSS
- SEO
- Accessibility
- MTGJSON Files

## TECHNICAL REQUIREMENTS
- Node/NVM
- Yarn (Package Manager)

### OPTIONAL REQUIREMENTS
- imagemin
- imagemin-webp

## DIRECTORY STRUCTURE
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
        │   ├── schemas # powers Vue Documentation components
        │   │   └── *.schema.json # specific schema that match API data
        │   └── scripts # helper JS functions
        │       └── * # any javascript function
        └── theme # Visuals
            ├── components/ # Vuepress theme components (Beware!)
            ├── global-components
            │   ├── BrandAssets.vue # Marketing
            │   ├── Documentation.vue # Documentation
            │   ├── DocumentationField.vue # Doumentation
            │   ├── DownloadDecks.vue # Download Decks
            │   ├── DownloadFiles.vue # Download All
            │   ├── DownloadSets.vue # Download Sets
            │   ├── DownloadField.vue # Download
            │   ├── GlobalAlert.vue # A sitewide message
            │   ├── NavMeta.vue # Header logo
            │   ├── Supporters.vue # Patron/Supporters
            │   ├── ThemeSwitcher.vue # Logic light/dark theme
            │   └── Version.vue # Render the current Meta.json
            ├── layouts # What the application will render at a top level
            │   ├── 404.vue # 404 page
            │   └── Layout.vue # Available route
            └── styles/ # SCSS styling
```

## VUEPRESS CONFIGURATION

Explaining the configuration as a whole would be best served by directly to their own documentation [here](https://v1.vuepress.vuejs.org/config/).

## MARKDOWN FILES

### USE AND PURPOSE
> **Use**: To serve has as static routing of the application.

> **Purpose**: All markdown files should be named `README.md`. That file will act as the single `index.html` for a directory.

### MARKDOWN STRUCTURE
The structure of a file is simple. Frontmatter on top, everything else below it.
  - Frontmatter is written in JSON (with strings).
  - Markdown is written to specification.
  - Vue component are pseudo-imported by placing them in a Vue component in template syntax.
  - Plugins are provided by the Vuepress community and can add syntactical sugar to rendering elements.

### USING FRONTMATTER 
Frontmatter is config that begins each markdown file to configuration a few things about that "route". Such configuration is HTML Head data, Vue component data and state, and Plugin configuration.

You can also change configuration of Vuepress by overwriting variables within the front matter.

> Remember: Frontmatter goes at the top of any Markdown file.

#### EXAMPLE
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

### WHEN NOT USING FRONTMATTER 
The markdown file will perform and parse just the way you would expect by writing any kind of Markdown or HTML.

You can also use a Vue component by placing `<MyComponentName />` anywhere on the markdown file. Props can also be passed to the component by using Frontmatter.

## DOCUMENTATION "SCHEMAS"
We use these are the single source of truth for the documentation rendering. These files are supposed to match the files from the API. They are formatted in a way to render to the `<Documentation />` component using a Frontmatter variable (though it us possible to pass down as a prop)

## "THE VUEX STORE"
We use Vuex to fetch data from MTGJSON API's in order to fill our application data. However, we only do this during the first render so the application and api remains as performant as possible.

## enhanceApp.js
Because Vue backs this entire application we can interject some helpers in to Vue to be accessed in our components.

## jsonMustache.js/Landcycle
This is a JS class that allows JSON to take mustache variables such as `{{link@anchor-link-test@/anchor-link-href}}` (use `/` to make an internal link and use the `HTTP/S Protocol` for an external link) and `{{code@variable}}` (creating an inline-code style) and then intercepts the JSON in Vue to hydrate the data in to HTML of your choosing. On the website we mainly use this to change data links in to anchor tags that route to other documentation links to maintain our Single Page Application.

## TESTING
We use Jest and we do our best.
