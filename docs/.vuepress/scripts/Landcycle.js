/**
 * @Type Class
 * @constructor @arguments
 * */

let logger = null;

export default class {
  constructor(hand = [], optional = false) {
    this.shouldNotFertilize = optional;
    this.regex = /{{(.*?)}}/g;
    this.hand = hand;
    this.debug = false;

    logger = this.logger.bind(this); // Short logger alias

    if (this.shouldNotFertilize) {
      return this;
    }

    logger('The ground is rumbling...', true);

    this.cycle();

    return this.hand;
  }

  async discard(card = '') {
    logger(`discarding ${card}...`);

    let value = card.match(/{{(.*?)}}/)[1];
    let tag = value.split(':')[0];
    let text = value.split(':')[1];
    let plane = '';
    let land = '';

    switch (text) {
      case 'version':
      case 'deck':
        plane = 'files';
        break;

      default:
        plane = 'structures';
        break;
    }

    switch(tag){
      case 'code':
        land = `<code>${text}</code>`;
        break;

      case 'external':
        land = `<a href="http://${text}" target="_blank">${text}</a>`;
        break;

      case 'link':
      default:
        land = `<a class="code-link" href="/${plane}/${text}" />${this.faceUp(
          text
        )}</a>`;
        break;
    }

    logger(`land acquired: ${JSON.stringify(land)}`, true);

    return await land;
  }

  /**
   * Cycle through the JSON schema and replace mustaches as needed,
   * then return the new JSON
   */
  async cycle() {
    for (let currentCard in this.hand) {
      const thisCard = this.hand[currentCard];
      
      for(let ability in thisCard){
        const card = thisCard[ability];
        const cardsToCycle = card.match(this.regex);

        if (cardsToCycle) {
          let newText = '';
          
          for (let cardToCycle of cardsToCycle) {
            try {
              const newCard = await this.discard(cardToCycle);
              newText = await thisCard[ability].replace(cardToCycle, newCard);

              this.hand[currentCard][ability] = newText;
            } catch( err ){
              logger(`${card} :: ${err}`, false);
            }
          }
        }
      }
    }
  }

  /**
   *
   * @param card multiple word normalizing for anchors and URI's
   */
  faceUp(card = '') {
    return card
      .split('-')
      .map((n, i) => {
        if (i > 0) {
          return n.charAt(0).toUpperCase() + n.slice(1);
        }
        return n;
      })
      .join('');
  }

  logger(msg = '', flag = '') {
    if (this.debug && msg && flag === true) {
      console.log(
        `%c ${this.className} logger :: ${msg}`,
        'background: seagreen; color: white;'
      );
    } else if (msg && flag === false) {
      console.log(
        `%c ${this.className} logger :: ${msg}`,
        'background: #9b2e2e; color: #ffeeec;'
      );
    } else if (msg && flag === null) {
      console.log(
        `%c ${this.className} logger :: ${msg}`,
        'background: white; color: black;'
      );
    } else if (this.debug) {
      console.log(`${this.className} logger :: ${msg}`);
    }
  }
}
