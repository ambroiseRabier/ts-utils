import {DeepPartial} from './deep-partial';

class TestNested {
  a: string = '';
  d: string = '';
}

class Test {
  b: string = '';
  c: TestNested = new TestNested();
}

test('DeepPartial', () => {
  // Empty
  const a: DeepPartial<Test> = {

  };

  // Partial would be enough here
  const b: DeepPartial<Test> = {
    b: '',
  };

  // TestNested is partial too, would not compile with Partial.
  const c: DeepPartial<Test> = {
    c: {a: ''},
  };

  // expecting file to compile...
  expect(true).toBeTruthy();
});
