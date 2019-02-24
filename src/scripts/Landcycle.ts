/**
 * @Type Class
 * @constructor @arguments
 * */

let logger = null;

export default class {
  shouldNotFertilize: boolean;
  className: string;
  debug: boolean;
  lands: any[];
  hand: any[];

  constructor(hand: any[] = [], optional: boolean) {
    this.shouldNotFertilize = optional || false;
    this.className = 'Landcycle';
    this.lands = [
      '{{compiled-list}}',
      '{{frame-effect}}',
      '{{foreign-data}}',
      '{{card-types}}',
      '{{legalities}}',
      '{{all-cards}}',
      '{{all-sets}}',
      '{{set-list}}',
      '{{keywords}}',
      '{{version}}',
      '{{rulings}}',
      '{{token}}',
      '{{files}}',
      '{{decks}}',
      '{{deck}}',
      '{{type}}',
      '{{card}}',
      '{{set}}',
    ];
    this.hand = hand;
    this.debug = false;

    logger = this.logger.bind(this); // Short logger alias

    if (this.shouldNotFertilize) {
      return this;
    }

    logger('The ground is rumbling...', true);

    this.cycle(this.hand);
  }


  async discard(card: string) {
    logger(`discarding ${card}...`);

    let cardName = await this.reveal(card) || card;
    let plane = '';
    let land = '';

    switch(cardName){
      case 'version':
      case 'deck':
        plane = 'files';
        break;

      default:
        plane = 'structures';
        break;
    }
    
    land = `<a class="code-link" href=/${plane}/${cardName}/>${this.faceUp(cardName)}</a>`;

    logger(`land acquired: ${JSON.stringify(land)}`, true);

    return await land;
  }

  /**
   * 
   * @param battlefield DOM elements we want to cycle through and hydrate
   */
  cycle(battlefield: any[]) {
    for (let land of battlefield) {
      for (let color in this.lands) {
        const card = this.lands[color]

        if (land.innerText.indexOf(card) > -1) {
          // Nested here for the promise of new
          this.discard(card)
            .then(newLand => {
              land.innerHTML = land.innerText.replace(card, newLand);
            })
            .catch(err => {
              logger(`${card} :: ${err}`, false);
            })
        }
      }
    }
    return this;
  }

  /**
   * 
   * @param card Mustachio'ed card
   */
  private reveal(card: string) {
    return card.match(/{{(.*?)}}/)[1]
  }
  
  /**
   * 
   * @param card multiple word normalizing
   */
  private faceUp(card: string) {
    return card.split('-').map( (n, i) => {
      if( i > 0 ){
        return n.charAt(0).toUpperCase() + n.slice(1)
      }
      return n;
    }).join('')
  }
  
  private logger(log: any, flag: any = '') {
    if (this.debug && log && flag === true) {
      console.log(
        `%c ${this.className} logger :: ${log}`,
        'background: seagreen; color: white;'
      );
    } else if (log && flag === false) {
      console.log(
        `%c ${this.className} logger :: ${log}`,
        'background: #9b2e2e; color: #ffeeec;'
      );
    } else if (log && flag === null) {
      console.log(
        `%c ${this.className} logger :: ${log}`,
        'background: white; color: black;'
      );
    } else if (this.debug) {
      console.log(
        `${this.className} logger :: ${log}`
      );
    }
  }
}
