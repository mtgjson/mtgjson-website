import { normalize } from '../docs/.vitepress/theme/util';

test('should take a path with an extension and return a normalized path', () => {
  const input = '/data-models/index.md';
  const output = '/data-models/index';
  const result = normalize(input);

  expect(result).toBe(output);
});

test('should take a path with an extension and hash and return a normalized path', () => {
  const input = '/data-models/index.md#heading';
  const output = '/data-models/index';
  const result = normalize(input);

  expect(result).toBe(output);
});
