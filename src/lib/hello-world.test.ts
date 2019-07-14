import {sayHello} from './hello-world';

test('sayHello', () => {
  expect(sayHello()).toBe('hi');
});

test('fail', () => {
  expect(2).toBe(3);
});
