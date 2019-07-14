
/**
 * WORK ONLY IF YOU CALLED THE CONSTRUCTOR when creating the object.
 * Example: new MyClass(), not {}.
 */
export function nameOfConstructor(obj: object): string | null {
  if (obj.constructor == null) {
    return null;
  }

  const match = obj.constructor.toString().match(/\w+/g);

  if (match == null) {
    throw new Error('unexepected not null constructor not matching regex');
  }

  return match[1];
}

// note for deep copy, use class-transformer package, or Object.assign.
