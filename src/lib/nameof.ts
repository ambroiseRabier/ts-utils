/**
 * Use like that nameof<UserDetail>()("firstName");
 * Assure type safety.
 * (return the string passed in parameter)
 * when possible, prefer adding `keyof MyModel` directly to the function parameter instead of using nameof.
 * @see https://schneidenbach.gitbooks.io/typescript-cookbook/nameof-operator.html
 */
export const nameof = <T>(name: keyof T) => name;
