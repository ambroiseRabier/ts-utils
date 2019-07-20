/**
 * Nice wrapper for Object.keys.
 * Property without default won't be there (you can assign undefined as default to bypass that).
 */
export function keysOf<T>(value: T): (keyof T)[] {
  return Object.keys(value) as any;
}
