// Export nothing for this file to become a module.
export {};

declare global {
  interface Array<T> {
    isArray: boolean;

    sortAZ(getStrField: (e: T) => string): Array<T>;

    remove(element: T): T;

    flatten(): T;

    union(array: Array<T>): Array<T>;

    intersect(array: Array<T>): Array<T>;

    removeNull(): Array<T>;
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

Array.prototype.union = function <T>(this: T[], array: T[]): T[] {
  return this.filter(value => -1 === array.indexOf(value));
};

Array.prototype.intersect = function <T>(this: T[], array: T[]): T[] {
  return this.filter(value => -1 !== array.indexOf(value));
};

Array.prototype.removeNull = function <T>(this: T[]): T[] {
  return this.filter(e => e !== null && e !== undefined);
};
