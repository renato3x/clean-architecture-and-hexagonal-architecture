import { expect, test } from 'vitest';
import { sum } from '.';

test('sum two numbers', () => {
  const result = sum(5, 5);

  expect(sum).toBeDefined();
  expect(result).toBe(10);
});
