import prettifyType from '../docs/.vuepress/src/scripts/prettifyType';

describe('prettifyType', () => {
  it('should return a string removed of underscores, spaces and capitalized words', async () => {
    const uglyType = 'this_is_text';
    const expected = 'This Is Text';
    const prettifiedType = await prettifyType(uglyType);

    expect(prettifiedType).toEqual(expected);
  });
});
