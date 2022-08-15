# Contributing

The MTGJSON documentation website uses [VitePress](https://vitepress.vuejs.org/) Server-Side Generated website framework with some tricks of our own.

## Knowledge Requirements

- TypeScript
- Vue 3 (Composition API)
- Pinia
- VitePress
- Markdown
- JSON
- SCSS
- SEO
- Accessibility
- MTGJSON Files

## Technical Requirements

- Node
- npm
- n

## IDE Setup

The current preferred IDE is [VS Code](https://code.visualstudio.com/). Be sure the install the following extensions:

- Vue Language Features (Volar)
- Typescript Vue Plugin (Volar)

**Note:** You may have to enable "Takeover Mode" by disabling VS Code's builtin package `TypeScript and JavaScript Language Features` within the workspace.

## Directory Structure

Some files and directories are omitted that do not help understand this current project structure.

```sh
.
├── app.json # Configuration for Heroku review apps. Used for Heroku PR deployments
├── check-version.js # Ensures the Node environment is correct
├── static.json # Configuration for Heroku build. Used for Heroku PR deployments
├── util # Build utilities
│   ├── generate-contributors.js # Utility to generate GitHub contributors JSON
│   ├── generate-feeds.js # Utility to generate RSS and other feeds
│   └── generate-types.js # Utility to generate TypeScript notations for documentation
└── docs # Home directory, outputs to `/dist`
    ├── **/index.md # Directories and their route entry point
    ├── public/ # Static assets
    │   ├── images/ # All application images
    │   │   ├── assets/ # MTGJSON specifics
    │   │   └── avatars/ # User/supporters avatars
    │   ├── *.* # Any public facing file, like favicons
    │   └── robots.txt # For crawlers to index/not index certain pages
    └── .vitepress # Main source files for the application
        ├── config.js # Main VitePress configuration
        ├── generatePages.js # Polyfill script to generate pages data for search
        ├── generateSidebar.js # Polyfill script to generate the sidebar heirarchy
        └── theme # Themeing for VitePress
            ├── components/ # Vue components
            │   └── *.vue # Vue component
            ├── layouts/ # Theme layout for all pages
            │   ├── 404.vue # Layout for error page
            │   └── Layout.vue # Layout for the rest of pages
            ├── static/ # Static data to power Vue components
            │   └── *.json # JSON
            ├── styles/ # Visual styling
            │   └── *.scss # CSS
            ├── helpers.ts # Helper functions
            ├── index.ts # Theme config and enhancements
            ├── store.ts # Pinia global state store
            └── types.ts # TypeScript types, interfaces, etc.
```

## VitePress Configuration

Explaining the configuration as a whole would be best served by directly linking to the [VitePress documentation](https://vitepress.vuejs.org/config/introduction.html).

## Markdown Files

### Use and Purpose

> **Use**: To serve has as static routing of the application.  
> **Purpose**: All markdown files should be named `index.md`. That file will act as the single `index.html` for a directory.

### Markdown Structure

The structure of a file is simple. Frontmatter on top, everything else below it. Some notes:

- Frontmatter is written in YAML.
- Markdown is written to a high-level of specification.
- Vue components can only be used in Markdown if they are registered globally via `./docs/vitepress/theme/index.js`.

### Using Frontmatter

Frontmatter is configuration that begins each markdown file to define meta data for that "route". Such configuration is HTML Head data and Vue component data and state.

You can also change configuration of VitePress by overwriting variables within the frontmatter, such a title, description, etc.

> Remember: Frontmatter goes at the top of any Markdown file.

#### Example

```yaml
title: Card (Set)
enum: card
head:
  - - meta
    - property: og:title
      content: Card (Set)
  - - meta
    - name: description
      content: The Card (Set) data model describes the keys and calues of a single card in a set.
  - - meta
    - property: og:description
      content: The Card (Set) data model describes the properties of a single card in a set.
  - - meta
    - name: keywords
      content: mtg, magic the gathering, mtgjson, json, card, card set
```

### Markdown Syntax for Documentation Fields

An example of a property field for a data object field in Markdown:

```
> ### artist <i class="optional"></i>
>
> The name of the artist that illustrated the card art.  
>
> **Type:** `string`
> **Introduced:** `v4.0.0`
```

You can also use the `<ExampleField type='<Enum Name>'` component to render examples provided the enum values exist in the EnumValues.json file. See a Markdown file for an example. This requires some frontmatter updates where the `enum` Frontmatter property has a value that equates to an EnumValues.json property and the `<Enum Name>` is the property within that enumeration. For example:

If you set `enum` is Frontmatter to `card`, and `<Enum Name>` to `availability`, the example field will populate from `EnumValues.json` -> `data` -> `card` -> `availability`.

## Pinia Store

We use Pinia to fetch data from MTGJSON API's in order to fill our application data. However, we only do this during the first render so the application and store remains as performant as possible.

## Testing

We use Jest and try our best. Test runs before commits and will fail the commit if necessary.

## Pull Requests

We like to keep our history as clearly labeled as possible. Here are some examples of PR title formats we appreciate:

- `issue/123: fixed bug.` "issue" is a branch which a PR handles something where an issue was opened
- `no-issue/documentation_updates: updated README.` "no-issue" is branch which a PR handles something with no open issue

Be sure to squash all commits and remove any commit messages that are unclear. Keep the commit title clear and concise.
