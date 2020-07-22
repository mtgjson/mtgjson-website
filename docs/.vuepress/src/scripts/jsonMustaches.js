/**
 * JSONMustaches - A JSON parser for mustaches templates in JSON objects.
 *
 * @type Class
 * @constructor @arguments
 * @param {object} schema - Schema compliant JSON object
 * @use {{type@text@url}}
 */
export default class jsonMustaches {
  constructor(schema) {
    this.schema = schema;
    this.delimiter = '@';
    this.allMustaches = /{{(.*?)}}/g;
    this.singleMustache = /{{(.*?)}}/;
    this.hasMustaches = true; // Let us assume
  }

  // Basic checking for valid types and syntax
  _init() {
    if (!this.schema) {
      throw SyntaxError('You must pass in a JSON Schema');
    }

    if (
      Object.keys(this.schema).length <= 0 ||
      Object.prototype.toString.call(this.schema) !== '[object Object]'
    ) {
      throw SyntaxError('You must pass in a valid JSON Schema Object with keys');
    }

    if (!JSON.stringify(this.schema).match(this.allMustaches)) {
      this.hasMustaches = true;
      return this.schema;
    } else {
      this.search();
    }

    return this;
  }

  /**
   * @type function
   * @param {string} value A string containing mustache templates
   */
  convert(value) {
    // Get just whats inside the mustache
    const values = value.match(this.singleMustache)[1];
    // Destructure whats inside the mustaches via the delimiter
    const [type, text, link = ''] = values.split(this.delimiter);
    // If we have a link, check if its an external link or not
    const isTargetBlank = link.indexOf('/') === 0 ? '' : `target='_blank' rel='noopener noreferrer'`;

    const mustacheMap = {
      html: text,
      link: `<a href='${link}' ${isTargetBlank}/>${this.unwrap(text)}</a>`,
      code: `<code>${text}</code>`,
    };

    const newValue = mustacheMap[type];

    if (!newValue) {
      throw SyntaxError(
        `Invalid mustache template types. Available types are ${Object.keys(mustacheMap).join(
          ', '
        )}`
      );
    }

    return mustacheMap[type];
  }

  /**
   * @type function
   * Cycle through the JSON schema and replace mustaches as needed,
   * then return the new JSON
   */
  search() {
    for (const prop in this.schema) {
      // Store the value of each object in our schema
      const value = this.schema[prop];
      // Store the main property name so we can hydrate that too
      value.propName = prop;

      for (const key in value) {
        const val = value[key].toString();
        const mustaches = val.match(this.allMustaches);

        if (mustaches) {
          for (const mustache of mustaches) {
            const hydratedHTML = value[key].replace(mustache, this.convert(mustache));

            this.schema[prop][key] = hydratedHTML;
          }
        }
      }
    }
  }

  /**
   * @type function
   * @param {string} str Multiple word normalizing for anchors and URI's
   */
  unwrap(str) {
    return str
      .split('-')
      .map((n, i) => {
        if (i > 0) {
          return n.charAt(0).toUpperCase() + n.slice(1);
        }
        return n;
      })
      .join('');
  }
}
