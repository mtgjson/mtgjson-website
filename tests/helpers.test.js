import helpers from '../docs/.vuepress/scripts/helpers';
const { prettifyType, isFuture, filter, sort } = helpers;

describe('helpers', () => {
  it('helpers should return all functions', async () => {
    const helperFunctions = helpers;
    const expected = {
      prettifyType,
      isFuture,
      filter,
      sort,
    };

    expect(helperFunctions).toEqual(expected);
  });
});
