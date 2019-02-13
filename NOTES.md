# Notes

Lack of ESLint is purposeful. We do a lot a content mixing to create linkable chain of data types and  transpiled and markup language.

Some of the settings are based on Heroku deployments so adjust accordingly.

## Templating

You might notice `{{Card}}` within schemas., these are templates we can apply in schmemas to then route to other pages. The purpose of this is to replace computer friendly values in JSON to HTML or other types of data. See [this reference](https://sketchboard.me/hBr0fbIsfUNj#/)

## JSON Schema mapping and type-specific words

https://json-schema.org/understanding-json-schema/reference/type.html

## Oliver Steele's method to never run in to an undefined object value

Not used but worth keeping in mind for dealing with values

https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f

## TODO

- ~~Figure out a more elegant solution to rendering downloads instead of just one component per grouping. e.g. render them all, not just sets, all and misc separately. (Failed branch `table-experiment`)~~
- Add meta data to every page.
- ~~Change the spec of download front matter to the JSON format.~~
- ~~Nice job adding TypeScript for no reason.~~
- ~~Make flow chart of hydration system.~~
- ~~Add component for list of other non-lead contributors like myself (Needs more work)~~
- Add lazy loading for individual set downloading?