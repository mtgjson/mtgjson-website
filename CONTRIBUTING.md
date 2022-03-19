# Contributing

The MTGJSON documentation website uses the [VuePress](https://v1.vuepress.vuejs.org/) framework with some tricks of our own.

## Knowledge Requirements

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

- Node
- npm

### Optional Requirements

- n

## Directory Structure

Files/Directories were omitted that do not help understand this current project structure.

```sh
.
├── app.json # Configuration for Heroku review apps. Used for Heroku PR deployments
├── static.json # Configuration for Heroku build. Used for Heroku PR deployments
├── util # Build utilities run during site generation
|   ├── check-version.js # Ensures the developer environment is correct
│   ├── generate-contributors.js # Utility to generate a github contributors file
│   └── generate-version-atom.js # Utility to generate a version atom of the siteschemas
└── docs # Home directory, outputs to `/dist`
    ├── README.md # Route entry point
    ├── **/*.md # Directories and their route entry point
    └── .vuepress # Main source files for the application
        ├── config.js # Main VuePress configuration
        ├── config.sidebar.js # Script to generate the sidebar heirarchy
        ├── enhanceApp.js # Vue enhancements
        ├── store.js # Vuex store
        ├── public/ # Static assets
        │   ├── favicons/ # All favicon images
        │   ├── images/ # All application images
        │   │   ├── assets/ # MTGJSON specifics
        │   │   └── avatars/ # User/supporters avatars
        │   └── robots.txt # For crawlers to index/not index certain pages
        ├── src # Helper data and functions
        │   ├── resources/ # JSON that powers parts of the site
        │   │   ├── contributors.json # For contributors data from github
        │   │   └── supporters.json # For project Patrons/Supporters data
        │   └── scripts/ # Any app helper functions
        │       └── *.js # Vue helpers
        └── theme # Visuals
            ├── components/ # Vuepress default Vue components (Beware!)
            ├── global-components/ # Custom Vue components
            │   └── *.vue # Vue component
            ├── layouts/ # Theme layout for all pages
            │   ├── 404.vue # Layout for error page
            │   └── Layout.vue # Layout for the rest of pages
            ├── styles/ # Visual styling
            │   ├── *.scss # CSS
            │   └── palette.styl # Stylus requirement for VuePress (DO NOT REMOVE)
            └── util/ # Theme helper functions
                └── index.js # Helper functions for components
```

## VuePress Configuration

Explaining the configuration as a whole would be best served by directly linking to the [VuePress documentation](https://v1.vuepress.vuejs.org/config/).

## Markdown Files

### Use and Purpose

> **Use**: To serve has as static routing of the application.  
> **Purpose**: All markdown files should be named `README.md`. That file will act as the single `index.html` for a directory.

### Markdown Structure

The structure of a file is simple. Frontmatter on top, everything else below it.

- Frontmatter is written in JSON (with strings).
- Markdown is written to a high-level of specification and should not be manipulated.
- Vue components are imported by placing them in a Markdown file.
- Plugins are provided by the VuePress community and can add syntactical sugar to rendering elements, such as Table of Contents.

### Using Frontmatter

Frontmatter is configuration that begins each markdown file to define meta data for that "route". Such configuration is HTML Head data, Vue component data and state, and Plugin configuration.

You can also change configuration of VuePress by overwriting variables within the front matter, such a title, description, etc.

> Remember: Frontmatter goes at the top of any Markdown file.

#### Example

```yaml
{
  "title": "Card (Set)", # Meta title of page
  "schema": "card", # Powers certain Vue components
  "meta": [ # Head meta properties
    {
      "name": "description",
      "content": "Card (Set) Data Model documentation.",
    },
    {
      "name": "og:description",
      "content": "Card (Set) Data Model documentation.",
    },
    {
      "name": "keywords",
      "content": "mtg, magic: the gathering, mtgjson, json, card (set)",
    }
  ],
  "feed": {
    "enable": "true" # Include this for atom/rss XML additions
  }
}
```

### Markdown Syntax for Documentation Fields

An example of a property field for a data object field in Markdown:

```
> ### artist
> The name of the artist that illustrated the card art.  
>
> **Type:** `string`  
> **Introduced:** `v4.0.0`  
> **Tags:** <i class="optional">optional</i>
```

You can also use the `<ExampleField type='<Enum Name>'` component to render examples provided the enum values exist in the EnumValues.json file. See a Markdown file for an example. This requires some frontmatter updates where the `"schema"` property have a value that equates to an EnumValues.json property.

## The Vuex Store

We use Vuex to fetch data from MTGJSON API's in order to fill our application data. However, we only do this during the first render so the application and API remains as performant as possible.

## enhanceApp.js

Because Vue backs this entire application we can inject some helpers in to Vue to be accessed in our components.

## Testing

We use Jest and try our best. Test runs before commits and will fail the commit if necessary.

## Pull Requests

We like to keep our history as clearly labeled as possible. Here are some examples of PR title formats we appreciate:

- `issue/123: fixed bug.` "issue" is a branch which PR handles something where an issue was opened
- `ni/documentation_updates: updated README.` "ni" is branch which PR handles something with no open issue

Be sure to squash all commits and remove any commit messages that are unclear. Keep the commit title clear and concise.
