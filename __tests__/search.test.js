import search from '../docs/.vitepress/src/scripts/search';

describe('search', () => {
  it('should return the same data if no terms is passed', async () => {
    const terms = '';
    const data = [
      {
        name: 'Deadly Recluse',
        type: 'creature'
      },
      {
        name: 'Smokestack',
        type: 'artifact'
      }
    ];
    const searched = await search(terms, data);

    expect(searched).toEqual(data);
  });

  it('should return filtered data if terms for a valid type is passed in', async () => {
    const terms = 'creature';
    const data = [
      {
        name: 'Deadly Recluse',
        type: 'creature'
      },
      {
        name: 'Smokestack',
        type: 'artifact'
      }
    ];
    const result = [
      {
        name: 'Deadly Recluse',
        type: 'creature'
      }
    ];
    const searched = await search(terms, data);

    expect(searched).toEqual(result);
  });

  it('should return filtered data if terms for a valid name is passed in', async () => {
    const terms = 'Deadly Recluse';
    const data = [
      {
        name: 'Deadly Recluse',
        type: 'creature'
      },
      {
        name: 'Smokestack',
        type: 'artifact'
      }
    ];
    const result = [
      {
        name: 'Deadly Recluse',
        type: 'creature'
      }
    ];
    const searched = await search(terms, data);

    expect(searched).toEqual(result);
  });

  it('should return filtered data if terms for a valid code is passed in', async () => {
    const terms = 'M20';
    const data = [
      {
        name: 'Deadly Recluse',
        type: 'creature',
        code: 'M20'
      },
      {
        name: 'Smokestack',
        type: 'artifact',
        code: 'MST'
      }
    ];
    const result = [
      {
        name: 'Deadly Recluse',
        type: 'creature',
        code: 'M20'
      }
    ];
    const searched = await search(terms, data);

    expect(searched).toEqual(result);
  });

  it('should return filtered data if terms for a valid releaseData is passed in', async () => {
    const terms = '2021-01-01';
    const data = [
      {
        name: 'Deadly Recluse',
        type: 'creature',
        code: 'M20',
        releaseDate: '2020-01-01'
      },
      {
        name: 'Smokestack',
        type: 'artifact',
        code: 'MST',
        releaseDate: '2021-01-01'
      }
    ];
    const result = [
      {
        name: 'Smokestack',
        type: 'artifact',
        code: 'MST',
        releaseDate: '2021-01-01'
      }
    ];
    const searched = await search(terms, data);

    expect(searched).toEqual(result);
  });

  it('should return no data if a non-matching term is used', async () => {
    const terms = 'Vampire Nighthawk';
    const data = [
      {
        name: 'Deadly Recluse',
        type: 'creature'
      },
      {
        name: 'Smokestack',
        type: 'artifact'
      }
    ];
    const result = [];
    const searched = await search(terms, data);

    expect(searched).toEqual(result);
  });

  it('should return no data if an object has invalid props', async () => {
    const terms = 'Vampire Nighthawk';
    const data = [
      {
        fake_property: 'Deadly Recluse',
      },
      {
        fake_property: 'Smokestack',
      }
    ];
    const result = [];
    const searched = await search(terms, data);

    expect(searched).toEqual(result);
  });
});
