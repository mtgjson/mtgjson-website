---
{
  "title": "Documentation"
}
---

# Documentation

## Preamble

**The format of this documentation for MTGJSON is based on 3 notions:**

  1. All data is considered "structures".

  2. The data structures you are looking at relate to the downloaded/compiled data you are working with.

  3. Documentation is split between `Structured Data` and `Output Data`.
  - `Structured Data` refers to the data that is *contained in* `Output Data`.

  - `Output Data` refers to the data that *contains* `Structured Data`. Most `Output Data` is a combination of `Structured Data` but in some cases, may not be. For example, `Keywords` is an isolated output with no traces of `Structured Data`. Most information about `Output Data` can be found on the [compiled downloads page](../downloads/compiled).

## F.A.Q.

- Why can't I find some properties on certain cards or sets?
  - When using `AllCards` any properties with values that may be different from set to set are removed.
  - Certain properties with "falsey" values will be omitted from certain structures. We recommend checking for a property before looking for its value.