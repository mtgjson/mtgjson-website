import { slugify } from "../docs/.vitepress/theme/helpers";

test('should take a string of various characters and return a url-friendly slug', () => {
  const input = 'Here is a _Weird_ string with character\'s that are-strange.';
  const output = 'here-is-a-weird-string-with-character-s-that-are-strange';
  const result = slugify(input);

  expect(result).toBe(output);
});
