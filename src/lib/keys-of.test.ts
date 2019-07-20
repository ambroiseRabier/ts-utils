import {keysOf} from './keys-of';

class Test {
  a: string= '';
  b: string= '';
  // @ts-ignore
  c: string;
  d?: string;
  e?: string = undefined;
}

test('keyOf', () => {
  const result = keysOf(new Test());
  const expected = ['a', 'b', 'e'];

  expect(result).toStrictEqual(expected);
});
