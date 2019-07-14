/**
 * Use like that nameof<UserDetail>()("firstName");
 * Assure type safety.
 * (return the string passed in parameter)
 * @see https://schneidenbach.gitbooks.io/typescript-cookbook/nameof-operator.html
 */
export const nameof = <T>(name: keyof T) => name;
