import testStorage from '../docs/.vuepress/src/scripts/testStorage';

describe('testStorage', () => {
  it('should return true if localStorage exists', () => {
    expect(testStorage()).toEqual(true);
  });

  it('should return false if localStorage does not exists', () => {
    expect(testStorage(false)).toEqual(false);
  });
});
