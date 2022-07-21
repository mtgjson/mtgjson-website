import { getHash } from '../docs/.vitepress/theme/util';

test('should take a path with a hash and return the hash', () => {
  const input = '/data-models/#heading';
  const output = '#heading';
  const result = getHash(input);

  expect(result).toBe(output);
});

test('should take a path without a hash and return an empty string', () => {
  const input = '/data-models/';
  const output = '';
  const result = getHash(input);

  expect(result).toBe(output);
})
