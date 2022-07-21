import { isActive } from "../docs/.vitepress/theme/util";

test('should check if a route and path does not have matching hash and return false', () => {
  const route = {
    hash: '#card-atomic'
  };
  const path = '/data-models/card-set/#card-set';
  const output = false;
  const result = isActive(route, path);

  expect(result).toBe(output);
})

test('should check if a route and path has matching hash and return true', () => {
  const route = {
    path: '/data-models/card-atomic/',
    hash: '#card-atomic'
  };
  const path = '/data-models/card-atomic/#card-atomic';
  const output = true;
  const result = isActive(route, path);

  expect(result).toBe(output);
})
