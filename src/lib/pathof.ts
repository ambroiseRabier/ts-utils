export function pathof<T>(key: [keyof T]): [keyof T]
export function pathof<T0, T1>(key0: keyof T0, key1: keyof T1): [keyof T0, keyof T1]
export function pathof<T0, T1, T2>(key0:keyof T0, key1: keyof T1, key2: keyof T2): [keyof T0, keyof T1, keyof T2]

/**
 * Check ts-pathof package also.
 * @param key
 */
export function pathof(...names: any[]): any[] {
  return names;
}

// check theses links also
// https://github.com/Morglod/ts-pathof (work, pass an object as parameter instead of generic)
// https://www.reddit.com/r/typescript/comments/axo1v0/recursive_keyof_on_interface/ (work the same as ts-pathof)
// https://github.com/Microsoft/TypeScript/issues/20423 (issue for pathof)
