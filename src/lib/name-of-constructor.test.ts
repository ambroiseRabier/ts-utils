import {nameOfConstructor} from './name-of-constructor';

class Test {

}

test('should return constructor name', () => {
  const obj = new Test();
  expect(nameOfConstructor(obj)).toBe('Test');
});
