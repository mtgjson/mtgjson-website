# Contributing

The MTGJSON documentation website uses [VitePress](https://vitepress.vuejs.org/) Server-Side Generated website framework with some tricks of our own.

## Knowledge Requirements

### Required

- Node
- TypeScript
- Vue 3 (Composition API)
- Pinia
- Pug
- SCSS
- Markdown

### Optional

- a11y
- SEO

## IDE Setup

The current preferred IDE is [VS Code](https://code.visualstudio.com/). Be sure the install the following extensions:

- Vue Language Features (Volar)
- Typescript Vue Plugin (Volar)

**Note:** You may have to enable "Takeover Mode" by disabling VS Code's builtin package `TypeScript and JavaScript Language Features` within the workspace.

## Directory Structure

Some files and directories are omitted that do not help understand this current project structure.

```sh
.
├── util/ # Build utilities
│   ├── check-version.js # Ensures the Node environment is correct
│   ├── generate-contributors.js # Utility to generate GitHub contributors JSON
│   ├── generate-feeds.js # Utility to generate RSS and other feeds
│   └── generate-types.js # Utility to generate TypeScript notations for documentation
└── docs/ # Home directory, outputs to `/dist`
    ├── **/**/index.md # Directories and their route entry point
    ├── public/ # Public facing files
    │   ├── favicons/ # All favicon images
    │   ├── images/ # All application images
    │   │   ├── assets/ # MTGJSON assets
    │   │   ├── avatars/ # User/supporters avatars
    │   │   └── icons/ # General icons
    │   │
    │   │ # Deprecated. To be removed
    │   ├── static/ # Legacy path for MTGJSON documentation TypeScript Types
    │   │   └── mtgjson-types.ts # All TypeScript Types for MTGJSON Data Models
    │   │
    │   ├── types/ # Path to all MTGJSON documentation TypeScript Types
    │   └── *.* # Any public facing file, like robots.txt
    └── .vitepress/ # Main config and theme files for Vitepress
        ├── config.js # Main VitePress configuration
        ├── generatePages.js # Polyfill script to generate pages data for search
        ├── generateSidebar.js # Polyfill script to generate the sidebar heirarchy
        └── theme/ # Themeing for VitePress
            ├── components/ # Vue components
            │   └── *.vue # Vue component
            ├── layouts/ # Theme layout for all pages
            │   └── *.vue # Vue component
            ├── static/ # Static data to power Vue components
            │   └── *.json # JSON data
            ├── styles/ # Visual styling
            │   └── *.scss # Global CSS
            ├── helpers.ts # Helper functions
            ├── index.ts # Theme config and enhancements
            ├── store.ts # Pinia global state store
            └── types.ts # TypeScript types, interfaces, etc.
```

## VitePress Configuration

Explaining the configuration as a whole would be best served by directly linking to the [VitePress documentation](https://vitepress.dev/reference/site-config).

## Markdown Files

### Use and Purpose

> **Use**: To serve has as static routing of the application.  
> **Purpose**: All markdown files should be named `index.md`. That file will act as the single `index.html` for a directory.

### Markdown Structure

The structure of a file is simple. Frontmatter on top, everything else below it. Some notes:

- Frontmatter is written in YAML.
- Markdown is written to a high-level of specification.
- Vue components can only be used in Markdown if they are registered globally via `./docs/vitepress/theme/index.ts`.

### Using Frontmatter

Frontmatter is configuration that begins each markdown file to define meta data for that "route". Such configuration is HTML Head data and Vue component data and state.

You can also change configuration of VitePress by overwriting variables within the frontmatter, such a title, description, and any other meta data that might change on a path-by-path basis based on its content.

### Markdown Syntax for Documentation Fields

#### Property Field

An example of a property field for a data object field in Markdown:

```
> ### artist <Badge type="danger" text="deprecated" /><Badge type="warning" text="optional" />
>
> The name of the artist that illustrated the card art.  
>
> **Type:** `string`
> **Introduced:** `v4.0.0`
```

The `<Badge type="warning" text="optional" />` markup will render a UI change in the property that denotes the property is optional. The same applies for `<Badge type="danger" text="deprecated" />` that can be used to denote a property is deprecated. Be sure to order them with deprecated first, and then optional. Using the optional Badge is required for properties that we know are optional in order to generate the TypeScript types properly.

You can also use the `<ExampleField type='<Enum Name>'` component to render examples provided the enum values exist in the EnumValues.json file. This requires some frontmatter updates where the `enum` Frontmatter property has a value that equates to an EnumValues.json property and the `<Enum Name>` is the property within that enumeration. For example:

If you set `enum` is Frontmatter to `card`, and `<Enum Name>` to `availability`, the example field will populate from `EnumValues.json` -> `data` -> `card` -> `availability`.

## Pinia Store

We use Pinia to fetch data from MTGJSON API's in order to fill our application data. However, we only do this during the first render so the application and store remains as performant as possible.

## Testing

We use Jest and try our best. Test runs before commits and will fail the commit if necessary.

## Pull Requests/Commit Messages

Use common conventions where they succinctly describes what was changed. Here are some generic examples:

- `feat(theme): added logic to a component`
- `fix(style): fixed issues with styling`
- `chore(deps): bump dependencies`
