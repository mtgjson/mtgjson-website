import { isTel } from '../docs/.vitepress/theme/util';

test('should check that a link has a mailto prefix and return true', () => {
  const input = 'tel:5558675309';
  const output = true;
  const result = isTel(input);

  expect(result).toBe(output);
});

test('should check that a link does not have a mailto prefix and return false', () => {
  const input = '/data-models/card-atomic/';
  const output = false;
  const result = isTel(input);

  expect(result).toBe(output);
});
