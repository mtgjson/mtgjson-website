import fetch from 'node-fetch';
import Landcycle from '../docs/.vuepress/scripts/Landcycle';
import cardSchema from '../docs/.vuepress/public/schemas/Card.schema.json';
import decksSchema from '../docs/.vuepress/public/schemas/Decks.schema.json';
import deckListsSchema from '../docs/.vuepress/public/schemas/DeckLists.schema.json';
import versionSchema from '../docs/.vuepress/public/schemas/Version.schema.json';

function willHydrate(schema) {
  let isHydrated = true;

  for (let topKey in schema) {
    if (Object.hasOwnProperty(topKey, schema)) {
      let lowerData = schema[topKey];

      for (let lowerKey in lowerData) {
        if (Object.hasOwnProperty(lowerKey, lowerData)) {
          let value = lowerData[lowerKey];

          if (value.toString().match(schema.regex)) {
            isHydrated = false;
            break;
          }
        }
      }
    }
  }

  return isHydrated;
}

describe('Landcycle', () => {
  it('should hydrate using a "/{{(.*?)}}/g" pattern', async () => {
    const data = await new Landcycle(cardSchema);

    expect(data.regex).toEqual(/{{(.*?)}}/g);
  });

  it('should return a stored JSON schema', async () => {
    const output = await new Landcycle(cardSchema).schema;

    expect(output).toEqual(cardSchema);
  });

  it('should return a hydrated Card schema', async () => {
    const data = await new Landcycle(cardSchema).schema;
    const isHydrated = await willHydrate(data);

    expect(isHydrated).toBe(true);
  });

  it('should return a hydrated Decks schema', async () => {
    const data = await new Landcycle(decksSchema).schema;
    const isHydrated = await willHydrate(data);

    expect(isHydrated).toBe(true);
  });

  it('should return a hydrated Decklists schema', async () => {
    const data = await new Landcycle(deckListsSchema).schema;
    const isHydrated = await willHydrate(data);

    expect(isHydrated).toBe(true);
  });

  it('should return a hydrated version schema', async () => {
    const data = await new Landcycle(versionSchema).schema;
    const isHydrated = await willHydrate(data);

    expect(isHydrated).toBe(true);
  });

  it('should return the same schema is no mustaches are found', async () => {
    const input = { test: 'testing the test' };
    const output = await new Landcycle(input).schema;

    expect(output).toEqual(input);
  });

  it('should return a hydrated version schema from a fetched version object', async () => {
    const fetched = await fetch('https://mtgjson.com/json/version.json');
    const version = await fetched.json();
    const landcycle = await new Landcycle(versionSchema, version);
    const isHydrated = await willHydrate(landcycle.schema);

    expect(isHydrated).toBe(true);
  });

  it('should return a TypeError if no schema is passed in', () => {
    expect(() => {
      new Landcycle();
    }).toThrow(TypeError);
  });
});
