import './array';


test('sortAZ', () => {
  const nestedUnSorted = [
    {name: 'b'},
    {name: 'd'},
    {name: 'c'},
    {name: 'a'},
    {name: 'a'},
  ];
  const expected = [
    {name: 'a'},
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
    {name: 'd'},
  ];

  const sorted = nestedUnSorted.sortAZ(e => e.name);
  expect(sorted).toStrictEqual(expected);
});

test('remove -> return value', () => {
  const array = [1,2,3];
  const removed = array.remove(2);

  expect(removed).toBe(2);
});

test('remove -> modify original array', () => {
  const array = [1,2,3];
  const removed = array.remove(2);

  expect(array).toStrictEqual([1,3])
});

test('flatten -> do not change original array', () => {
  const array = [[1],[2]];
  const flattened = array.flatten();

  expect(array).toStrictEqual([[1],[2]]);
});

test('flatten -> return value', () => {
  const array = [[1],[2]];
  const flattened = array.flatten();

  expect(flattened).toStrictEqual([1,2]);
});

test('isArray', () => {
  const array: any[] = [];
  expect(array.isArray).toBeTruthy();
});

test('leftOuterJoinNotNull', () => {
  const array1: any[] = [1,2];
  const array2: any[] = [0];
  const array3: any[] = [0,1];
  expect(array1.leftOuterJoinNotNull(array2)).toStrictEqual([1,2]);
  expect(array2.leftOuterJoinNotNull(array1)).toStrictEqual([0]);
  expect(array3.leftOuterJoinNotNull(array2)).toStrictEqual([1]);
  expect(array1.leftOuterJoinNotNull(array3)).toStrictEqual([2]);
});

test('leftOuterJoinNotNull', () => {
  const array1: any[] = [1,2];
  const array2: any[] = [0];
  const array3: any[] = [0,1];
  expect(array1.leftOuterJoinNotNull(array2)).toStrictEqual([1,2]);
  expect(array2.leftOuterJoinNotNull(array1)).toStrictEqual([0]);
  expect(array3.leftOuterJoinNotNull(array2)).toStrictEqual([1]);
  expect(array1.leftOuterJoinNotNull(array3)).toStrictEqual([2]);
});

test('innerJoin', () => {
  const array1: any[] = [1,2];
  const array2: any[] = [0];
  const array3: any[] = [0,1];

  expect(array1.innerJoin(array2)).toStrictEqual([]);
  expect(array2.innerJoin(array1)).toStrictEqual([]);
  expect(array3.innerJoin(array1)).toStrictEqual([1]);
});

test('inverseInnerJoin', () => {
  const array1: any[] = [1,2];
  const array2: any[] = [0];
  const array3: any[] = [0,1];

  expect(array1.inverseInnerJoin(array2).sort()).toStrictEqual([0,1,2].sort());
  expect(array2.inverseInnerJoin(array1).sort()).toStrictEqual([0,1,2].sort());
  expect(array3.inverseInnerJoin(array1).sort()).toStrictEqual([0,2].sort());
  expect(array3.inverseInnerJoin(array2).sort()).toStrictEqual([1].sort());

  // duplicated values
  const array = [1,1];

  expect(array.inverseInnerJoin(array)).toStrictEqual([]);
});

test('removeDuplicate', () => {
  const array1: any[] = [1,2];
  const array2: any[] = [0,1,2,2,1,3];

  expect(array1.removeDuplicate().sort()).toStrictEqual([1,2]);
  expect(array2.removeDuplicate().sort()).toStrictEqual([0,1,2,3]);
});


test('removeNullUndef', () => {
  const array1: any[] = [1,2];
  const array2: any[] = [0,undefined,null];

  expect(array1.removeNullUndef()).toStrictEqual([1,2]);
  expect(array2.removeNullUndef()).toStrictEqual([0]);
});
