/**
 * @Type Class
 * @constructor @arguments
 * */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let logger = null;
export default class {
    constructor(land, seeds, optional) {
        this.shouldNotFertilize = optional || false;
        this.className = 'Landcycle';
        this.hasFertilized = false;
        this.land = land;
        this.seeds = seeds;
        this.debug = false;
        logger = this.logger.bind(this); // Short logger alias
        if (this.shouldNotFertilize) {
            return this;
        }
        logger('The ground is rumbling...', true);
        this.cycle(this.land, this.seeds);
    }
    discard(card) {
        return __awaiter(this, void 0, void 0, function* () {
            // Improper logging. Like because of the {%} characters as the template
            logger(`discarding ${card}...`);
            const cardName = card.match(/{%(.*?)%}/)[1] || card;
            const ability = {
                name: cardName,
                effect: '',
            };
            if (this.seeds.indexOf(card) > -1) {
                /**
                 * @TODO abstract in to another reference
                 */
                switch (cardName) {
                    case 'date':
                        ability.effect = `${new Date().toISOString().split('T')[0]}`;
                        break;
                    case 'card':
                    case 'token':
                        ability.effect = `<a class="code-link" href=/structures/${cardName}>${cardName}</a>`;
                        break;
                    default:
                        break;
                }
            }
            return yield ability;
        });
    }
    cycle(land, seeds) {
        for (let hand of land) {
            for (let seed in seeds) {
                const card = seeds[seed];
                if (hand.innerText.indexOf(card) > -1) {
                    // Nested here for the promise of new
                    this.discard(card)
                        .then(ability => {
                        hand.innerHTML = hand.innerText.replace(card, ability.effect);
                    })
                        .catch(err => {
                        logger(`${card} :: ${err}`, false);
                    });
                }
            }
        }
        return this;
    }
    /**
     *
     * Discard after use?
     *
     */
    logger(log, flag = null) {
        if (this.debug && log && flag === true) {
            console.log(`%c ${this.className} logger :: ${log}`, 'background: seagreen; color: white;');
        }
        else if (log && flag === false) {
            console.log(`%c ${this.className} logger :: ${log}`, 'background: #9b2e2e; color: #ffeeec;');
        }
        else if (this.debug) {
            console.log(`%c ${this.className} logger :: ${log}`, 'background: white; color: black;');
        }
    }
}
