# Notes

## Using the custom Markdown extension syntax, aka "flower", to pre-render state
You might notice `${Card}$` within documents. The purpose of this is to replace on Vue template pre-render.
For example, transforming computer friendly values oh JSON in to HTML. a flower function will essentially "Hydrate" as common frameworks call it, to refresh the state of the page. This applies the same logic but gets its props from the Markdown pages instead of a store like Redux or other components.

## JSON Schema mapping and type-specific words
https://json-schema.org/understanding-json-schema/reference/type.html

## Oliver Steele's method to never run in to an undefined object value
https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f

## TODO
- Figure out a more elegant solution to rendering downloads instead of just one component per grouping. e.g. render them all, not just sets, all and misc separately.
- FLOWER. What the else did I just make? Maybe turn it in to a Vuepress plugin/extension?
- Add meta data to every page
- Eject the theme and manage it closer, its trash CSS right now and a mix between Stylus and SCSS, Force once to work only.