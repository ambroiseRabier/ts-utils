import {pathof} from './pathof';

class TestNested {
  b: string = '';
}


class Test {
  a: string = '';
}

test('pathof', () => {
  const result = pathof<Test, TestNested>('a', 'b');
  const expected = ['a', 'b'];

  expect(result).toStrictEqual(expected);
});

test('pathof wrong generic order still work', () => {
  const result = pathof<TestNested, Test>('b', 'a');
  const expected = ['b', 'a'];

  expect(result).toStrictEqual(expected);
});
