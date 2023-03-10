import { formatType } from '../docs/.vitepress/theme/helpers';

test('should return a string removed of underscores, spaces and capitalized words', () => {
  const uglyType = 'this_is_text';
  const expected = 'This Is Text';
  const prettifiedType = formatType(uglyType);

  expect(prettifiedType).toEqual(expected);
});
