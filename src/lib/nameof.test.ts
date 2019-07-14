import {nameof} from './nameof';

class Test {
  propertyName: string = 'hi';
}

test('should return property name as string', () => {
  const obj = new Test();
  expect(obj[nameof<Test>('propertyName')]).toBe('hi');
});
