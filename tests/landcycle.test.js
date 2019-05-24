import Landcycle from '../docs/.vuepress/scripts/Landcycle';
import schema from '../docs/.vuepress/public/schemas/card.schema.json';

describe('Landcycle', () => {
  it('should hydrate using a "/{{(.*?)}}/g" pattern', async () => {
    const data = await new Landcycle(schema);
    expect(data.regex).toEqual(/{{(.*?)}}/g);
  });

  it('should return a stored JSON schema', async () => {
    const data = await new Landcycle(schema);
    expect(data.schema).toEqual(schema);
  });

  it('should return a hydrated object', async () => {
    const data = new Landcycle(schema);
    let isHydrated = true;

    for (let topKey in data.schema) {
      let lowerData = data[topKey];

      for (let lowerKey in lowerData) {
        let value = lowerData[lowerKey];

        if (value.toString().match(data.regex)) {
          isHydrated = false;
          break;
        }
      }

      // Quit while we're ahead.
      if(!isHydrated) break;
    }

    expect(isHydrated).toBe(true);
  });
});
