import { isExternal } from '../docs/.vitepress/theme/helpers';

test('should check that the path is an external link and return true', () => {
  const input = 'https://www.google.com';
  const output = true;
  const result = isExternal(input);

  expect(result).toBe(output);
});

test('should check that path is not an external link and return false', () => {
  const input = '/data-models/card-atomic/';
  const output = false;
  const result = isExternal(input);

  expect(result).toBe(output);
});
