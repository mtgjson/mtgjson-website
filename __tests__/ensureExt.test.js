import { ensureExt } from '../docs/.vitepress/theme/util';

test('should return an external link if it is external', () => {
  const input = 'https://www.google.com';
  const output = input;
  const result = ensureExt(input);

  expect(result).toBe(output);
});

test('should check if the link is local and return that link', () => {
  const input = '/data-models/card-atomic/';
  const output = input;
  const result = ensureExt(input);

  expect(result).toBe(output);
});

test('should check if the link is local with an index and return that link with an html extension', () => {
  const input = '/data-models/card-atomic/index';
  const output = '/data-models/card-atomic/index.html';
  const result = ensureExt(input);

  expect(result).toBe(output);
});

test('should check if the link has a hash with an index and return that link with an html extension and hash', () => {
  const input = '/data-models/card-atomic/index#heading';
  const output = '/data-models/card-atomic/index.html#heading';
  const result = ensureExt(input);

  expect(result).toBe(output);
});
