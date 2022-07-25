import { isMailto } from '../docs/.vitepress/theme/helpers';

test('should check that a link has a mailto prefix and return true', () => {
  const input = 'mailto:test@test.com';
  const output = true;
  const result = isMailto(input);

  expect(result).toBe(output);
});

test('should check that a link does not have a mailto prefix and return false', () => {
  const input = '/data-models/card-atomic/';
  const output = false;
  const result = isMailto(input);

  expect(result).toBe(output);
});
