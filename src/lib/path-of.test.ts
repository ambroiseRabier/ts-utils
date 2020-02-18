import {pathOf, pathOf3} from './path-of';

describe('path-of', () => {

  it('1 level', () => {
    const model = {a:12};
    const result = pathOf(model, 'a');
    const expected = ['a'];

    expect(result).toStrictEqual(expected);
  });

  it('nested 2 level', () => {
    const model = {
      a: {b: 34}
    };
    const result = pathOf(model, 'a', 'b');
    const expected = ['a', 'b'];

    expect(result).toStrictEqual(expected);
  });

  it('array', () => {
    const model = [78];
    const result = pathOf(model, 0);
    const expected = [0];

    expect(result).toStrictEqual(expected);
  });

  // this is not a runtime check, at compilation time, there is no knowing what the size of the array will be,
  // with a fixed size array type this might be possible though.
  it('array invalid index is ok', () => {
    const model = [78];
    const result = pathOf(model, 3);
    const expected = [3];

    expect(result).toStrictEqual(expected);
  });

  it('pathOf3 typing', () => {
    const c = { z: { y: { bb: 123 }}};
    const r3: pathOf3<typeof c, 'z', 'y', 'bb'> = pathOf(c, 'z', 'y', 'bb');
    expect(r3).toStrictEqual(['z', 'y', 'bb']);
  });

  it('array in the middle', () => {
    const e = {x: [{b: 123}]};
    const r5 = pathOf(e, 'x', 0, 'b');
    expect(r5).toStrictEqual(['x', 0, 'b']);
  });

  it('array in the middle  wrong index', () => {
    const d = {x: [{b: 123}]};
    const r4 = pathOf(d, 'x', 1, 'b');
    expect(r4).toStrictEqual(['x', 1, 'b']);
  });
});



