// tslint:disable-next-line:ban-types
type ImmutablePrimitive = undefined | null | boolean | string | number | Function;

/**
 * Immutability at compile time, require TS 3.7
 * @Src https://github.com/microsoft/TypeScript/issues/13923
 */
export type Immutable<T> =
  T extends ImmutablePrimitive ? T :
    T extends Array<infer U> ? ImmutableArray<U> :
      T extends Map<infer K, infer V> ? ImmutableMap<K, V> :
        T extends Set<infer M> ? ImmutableSet<M> : ImmutableObject<T>;

export type ImmutableArray<T> = ReadonlyArray<Immutable<T>>;
export type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>;
export type ImmutableSet<T> = ReadonlySet<Immutable<T>>;
export type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };

