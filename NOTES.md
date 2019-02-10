# Notes

## Using the custom Markdown extension syntax, aka "flower", to pre-render state
You might notice `${Card}$` within documents. The purpose of this is to replace on Vue template pre-render.
For example, transforming computer friendly values oh JSON in to HTML. a flower function will essentially "Hydrate" as common frameworks call it, to refresh the state of the page. This applies the same logic but gets its props from the Markdown pages instead of a store like Redux or other components.

## JSON Schema mapping and type-specific words
https://json-schema.org/understanding-json-schema/reference/type.html

## Oliver Steele's method to never run in to an undefined object value
https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f