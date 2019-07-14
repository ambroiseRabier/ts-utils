import {sayHello} from './hello-world';

test('sayHello', () => {
  expect(sayHello()).toBe('hi');
});

test('fail', () => {
  expect(3).toBe(3);
});
