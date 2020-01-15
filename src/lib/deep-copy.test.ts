import {deepCopy} from './deep-copy';


describe('testing jest matchers work as expected',  () => {

  test('toBe compare object by reference', () => {
    const e1 = {value:45};
    const e2 = {value:45};
    expect(e1).not.toBe(e2);
  });

  test('toBe compare object by reference (2)', () => {
    const e1 = {value:45};
    const e2 = e1;
    expect(e1).toBe(e2);
  });

  test('toBe compare primitive by value', () => {
    const e1 = 'test';
    const e2 = 'test';
    expect(e1).toBe(e2);
  });

  // note that you could use spread operator instead, it would be the same
  // Spread operator even tend to be preferred.
  // @See https://stackoverflow.com/questions/38462000/difference-between-object-assign-and-object-spread
  test('Object.assign does not copy constructor', () => {
    class Test {
      get getValue(): string {
        return this.value;
      }
      value = 'test';
      constructor() {

      }
    }
    const e1 = new Test();
    const e2 = Object.assign({}, e1);

    // reference should be different
    expect(e1).not.toBe(e2);

    // value should be the same
    expect(e1).toEqual(e2);

    // toStrictEqual also test constructor, and it should fail with Object.assign
    expect(e1).not.toStrictEqual(e2);

    // test that getter is missing
    expect(e2.getValue).not.toBe('test')
  });

  test('Object.assign does not deep copy', () => {
    const e1 = {obj: {value: 'hi'}};
    const e2 = Object.assign({}, e1);
    expect(e1).not.toBe(e2);
    expect(e1.obj).toBe(e2.obj);
  });

});

describe('deep-copy',  () => {

  test('toBe compare object by reference', () => {
    const e1 = {value:45};
    const e2 = {value:45};
    expect(e1).not.toBe(e2);
  });

  test('toBe compare primitive by value', () => {
    const e1 = 'test';
    const e2 = 'test';
    expect(e1).toBe(e2);
  });

  test('can copy string', () => {
    const e1 = 'test';
    const e2 = deepCopy(e1);
    expect(e1).toBe(e2);
  });

  test('can copy simpleObject', () => {
    const e1 = {value: 'hi'};
    const e2 = deepCopy(e1);

    // reference should be broken
    expect(e1).not.toBe(e2);

    // primitives values should be the same.
    expect(e1).toEqual(e2);

    e1.value = 'hello';

    //reference should be broken
    expect(e1.value).not.toBe(e2.value);
  });

  test('can copy 2 depth deep object', () => {
    const e1 = {obj: {value: 'hi'}};
    const e2 = deepCopy(e1);
    expect(e1).not.toBe(e2);
    expect(e1.obj).not.toBe(e2.obj);

    // to Equal test primitive recursively
    expect(e1).toEqual(e2);

    // if reference link is still there both object should be of value 'hello'
    e1.obj.value = 'hello';
    expect(e1.obj.value).not.toBe(e2.obj.value);
  });

  test('can copy 3 depth deep object', () => {
    const e1 = {obj: {obj: {value: 'hi'}}};
    const e2 = deepCopy(e1);
    expect(e1).not.toBe(e2);
    expect(e1.obj).not.toBe(e2.obj);
    expect(e1.obj.obj).not.toBe(e2.obj.obj);
    expect(e1).toEqual(e2);

    // if reference link is still there both object should be of value 'hello'
    e1.obj.obj.value = 'hello';
    expect(e1.obj.obj.value).not.toBe(e2.obj.obj.value);
  });

  test('can copy constructor', () => {
    class Test {
      get getValue(): string {
        return this.value;
      }
      value = 'test';
      constructor() {

      }
    }
    const e1 = new Test();
    const e2 = deepCopy(e1);
    expect(e1).not.toBe(e2);

    // toStrictEqual also test constructor
    expect(e1).toStrictEqual(e2);

    // test that getter is still available (plain object will not have the getter)
    expect(e2.getValue).toBe('test')
  });

  test('can copy array', () => {
    const e1 = [1,2,3];
    const e2 = deepCopy(e1);
    expect(e1).not.toBe(e2);
    expect(e1).toEqual(e2);
  });
  test('can copy 3 depth deep array', () => {
    const e1 = [1,2, [1,2, [1,2,3]]];
    const e2 = deepCopy(e1);
    expect(e1).not.toBe(e2);
    expect(e1[2]).not.toBe(e2[2]);
    // @ts-ignore
    expect(e1[2][2]).not.toBe(e2[2][2]);
    expect(e1).toEqual(e2);
  });

  test('can copy date', () => {
    const e1 = new Date();
    const e2 = deepCopy(e1);
    expect(e1).not.toBe(e2);
    expect(e1).toEqual(e2);
  });

  test('can copy object with date, object, array', () => {
    const e1 = {date: new Date(), str: 'dfs', nb: 12, array: [1,2, [1,2,3]], obj: {value: 45, obj:{value: 12}}};
    const e2 = deepCopy(e1);
    expect(e1).not.toBe(e2);
    expect(e1).toEqual(e2);
  });


});

