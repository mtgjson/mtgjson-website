import { formatDateToPretty } from '../docs/.vitepress/theme/helpers';

test('should take an ISO formatted date and return a pretty date', () => {
  const input = '2019-12-25';
  const output = 'December 25, 2019';
  const result = formatDateToPretty(input);

  expect(result).toBe(output);
});
