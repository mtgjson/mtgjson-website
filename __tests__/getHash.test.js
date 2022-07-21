import { getHash } from '../docs/.vitepress/theme/util';

describe('getHash', () => {
  it('should take a path with a hash and return the hash', () => {
    const input = '/data-models/#heading';
    const output = '#heading';
    const result = getHash(input);

    expect(result).toBe(output);
  });
});
