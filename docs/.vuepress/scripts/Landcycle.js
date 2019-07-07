/**
 * @Type Class
 * @constructor @arguments
 *
 * The structure of a mustache is as so:
 * {{tag:first$second}}
 * */
export default class {
  constructor(schema = {}, externalData = {}) {
    this.regex = /{{(.*?)}}/g;
    this.schema = schema;
    this.externalData = externalData;

    this.cycle();
  }

  /**
   *
   * @param {String} str mustached string to unwrap
   */
  async hydrate(str = '') {
    
    const value = str.match(/{{(.*?)}}/)[1];
    const tag = value.split(':')[0];
    const newDate = new Date();
    
    let locale = '';
    let newStr = '';
    let text = str.match(/:(.*?)\$/);
    let external = str.match(/\$(.*?)}}/);

    text = text && text[1] ? text[1] : value.split(':')[1];
    external = external && external[1] ? external[1] : text;

    let currentDate = `${newDate.getFullYear()}-${(
      '0' +
      (newDate.getMonth() + 1)
    ).slice(-2)}-${('0' + newDate.getDate()).slice(-2)}`;

    switch (text) {
      case 'version':
      case 'deck':
        locale = 'files';
        break;

      default:
        locale = 'structures';
        break;
    }

    switch (tag) {
      case 'external':
        newStr = `<a class="code-link" href="${external}" target="_blank">${text}</a>`;
        break;

      case 'link':
        newStr = `<a class="code-link" href="/${locale}/${text}" />${this.unwrap(
          text
        )}</a>`;
        break;

      case 'code':
        newStr = `<code>${text}</code>`;
        break;

      case 'buildVersion':
        const { version } = this.externalData;

        newStr = version || text;
        break;

      case 'buildDate':
        const { date } = this.externalData;

        newStr = date || currentDate;
        break;

      case 'buildPricesDate':
        const { pricesDate } = this.externalData;

        newStr = pricesDate || currentDate;
        break;

      default:
        newStr = `<span>Landcycle error. No Tag defined.</span>`;
        break;
    }

    return await newStr;
  }

  /**
   * Cycle through the JSON schema and replace mustaches as needed,
   * then return the new JSON
   */
  async cycle() {
    for (let key in this.schema) {
      const keyValue = this.schema[key];

      for (let innerKey in keyValue) {
        const value = keyValue[innerKey];
        const strings = value.toString().match(this.regex);

        if (strings) {
          let newText = '';

          for (let stringToHydrate of strings) {
            try {
              const newString = await this.hydrate(stringToHydrate);
              newText = await keyValue[innerKey].replace(
                stringToHydrate,
                newString
              );

              this.schema[key][innerKey] = newText;
            } catch (err) {
              console.err(`${value} :: ${err}`);
            }
          }
        }
      }
    }
  }

  /**
   *
   * @param {String} str multiple word normalizing for anchors and URI's
   */
  unwrap(str = '') {
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
