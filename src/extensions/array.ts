// Export nothing for this file to become a module.
export {};

declare global {
  interface Array<T> {
    isArray: boolean;

    sortAZ(getStrField: (e: T) => string): Array<T>;

    /**
     * Find and remove an element. Original array is modified.
     * @param element
     */
    remove(element: T): T;

    flatten(): T;

    /**
     * Return an array with keys that a least one of the array has not.
     * @param array
     */
    innerJoin(array: Array<T>): Array<T>;

    /**
     * Return values that are only in this.
     * @param array
     */
    leftOuterJoinNotNull(array: Array<T>): Array<T>;

    /**
     * Combine and remove duplicate.
     */
    inverseInnerJoin(array: Array<T>): Array<T>;

    /**
     * Remove duplicate.
     */
    removeDuplicate(): Array<T>;

    removeNullUndef(): Array<T>;
  }
}

Array.prototype.sortAZ = function <T>(this: Array<T>, getStrField: (e: T) => string): Array<T> {
  return this.sort((a: T, b: T) => {
    const a2 = getStrField(a);
    const b2 = getStrField(b);
    // sort string ascending
    if (a2 < b2) {
      return -1;
    }
    if (a2 > b2) {
      return 1;
    }
    return 0;
  });
};

Array.prototype.remove = function <T>(this: Array<T>, element: T): T {
  return this.splice(this.indexOf(element), 1)[0];
};

Array.prototype.flatten = function <T>(this: Array<T[]>): T {
  return ([] as any).concat.apply([], this);
};

Array.prototype.isArray = true;

Array.prototype.innerJoin = function <T>(this: T[], array: T[]): T[] {
  return this.filter(value => -1 !== array.indexOf(value));
};

Array.prototype.leftOuterJoinNotNull = function <T>(this: T[], array: T[]): T[] {
  return this.filter(value => -1 === array.indexOf(value));
};

// O(1) or O(n) worst case for hashmap and O(n) for js Array.filter and for loop, so O(n) complexity.
Array.prototype.inverseInnerJoin = function <T>(this: T[], array: T[]): T[] {
  const hashMap1: any = {};
  const hashMap2: any = {};

  for (let e of this) {
    if (!hashMap1[e]) {
      hashMap1[e] = true;
    }
  }

  for (let e of array) {
    if (!hashMap2[e]) {
      hashMap2[e] = true;
    }
  }

  const unique1 = this.filter(e => !hashMap2[e]);
  const unique2 = array.filter(e => !hashMap1[e]);
  const result = unique1.concat(unique2);

  return result;
};

Array.prototype.removeDuplicate = function <T>(this: T[]): T[] {
  const hashMap: any = {};
  const result: T[] = [];

  for (let e of this) {
    if (!hashMap[e]) {
      result.push(e);
      hashMap[e] = true;
    }
  }

  return result;
};

Array.prototype.removeNullUndef = function <T>(this: T[]): T[] {
  return this.filter(e => e !== null && e !== undefined);
};
