// Credit to ts-pathof npm package. Number type has been added on this version. And few fixes.
// (ts-pathof did not update the package for a year, even though the repository still seem alive)

// { [x: string | number]: any; } is not a valid type by the way.
// This type represent a javascript object (maybe I should just type it object??)
type StringOrNumberDict = { [x: string]: any; [x: number]: any };

export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    >(
    root: T,
    key1: K1,
): [ K1 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    >(
    root: T,
    key1: K1,
    key2: K2,
): [ K1, K2 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
): [ K1, K2, K3 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
): [ K1, K2, K3, K4 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
): [ K1, K2, K3, K4, K5 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
): [ K1, K2, K3, K4, K5, K6 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
): [ K1, K2, K3, K4, K5, K6, K7 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
    key8: K8,
): [ K1, K2, K3, K4, K5, K6, K7, K8 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
    key8: K8,
    key9: K9,
): [ K1, K2, K3, K4, K5, K6, K7, K8, K9 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
    K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
    >(
    root: T,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
    key5: K5,
    key6: K6,
    key7: K7,
    key8: K8,
    key9: K9,
    key10: K10,
): [ K1, K2, K3, K4, K5, K6, K7, K8, K9, K10 ];
export function pathOf
<T extends StringOrNumberDict,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
    K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
    >(
    root: T,
    key1: K1,
    key2?: K2,
    key3?: K3,
    key4?: K4,
    key5?: K5,
    key6?: K6,
    key7?: K7,
    key8?: K8,
    key9?: K9,
    key10?: K10,
) {
  // the default value of theses keys is undefined, as we do not want theses undefined values in the end result
  // when only few parameters are set, we are filtering them out.
  return [ key1, key2, key3, key4, key5, key6, key7, key8, key9, key10 ].filter(e => e !== undefined);
}

// ---------------------
export type pathOf1
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        > = [ K1 ];
export type pathOf2
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        > = [ K1, K2 ];
export type pathOf3
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        > = [ K1, K2, K3 ];
export type pathOf4
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        > = [ K1, K2, K3, K4 ];
export type pathOf5
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        K5 extends keyof T[K1][K2][K3][K4],
        > = [ K1, K2, K3, K4, K5 ];
export type pathOf6
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        K5 extends keyof T[K1][K2][K3][K4],
        K6 extends keyof T[K1][K2][K3][K4][K5],
        > = [ K1, K2, K3, K4, K5, K6 ];
export type pathOf7
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        K5 extends keyof T[K1][K2][K3][K4],
        K6 extends keyof T[K1][K2][K3][K4][K5],
        K7 extends keyof T[K1][K2][K3][K4][K5][K6],
        > = [ K1, K2, K3, K4, K5, K6, K7 ];
export type pathOf8
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        K5 extends keyof T[K1][K2][K3][K4],
        K6 extends keyof T[K1][K2][K3][K4][K5],
        K7 extends keyof T[K1][K2][K3][K4][K5][K6],
        K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
        > = [ K1, K2, K3, K4, K5, K6, K7, K8 ];
export type pathOf9
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        K5 extends keyof T[K1][K2][K3][K4],
        K6 extends keyof T[K1][K2][K3][K4][K5],
        K7 extends keyof T[K1][K2][K3][K4][K5][K6],
        K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
        K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
        > = [ K1, K2, K3, K4, K5, K6, K7, K8, K9 ];

export type pathOf10
    <T extends StringOrNumberDict,
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        K5 extends keyof T[K1][K2][K3][K4],
        K6 extends keyof T[K1][K2][K3][K4][K5],
        K7 extends keyof T[K1][K2][K3][K4][K5][K6],
        K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
        K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
        K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
        > = [ K1, K2, K3, K4, K5, K6, K7, K8, K9, K10 ];

//-------------------------

// This is commented, when testing, it cause error:
// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
// 1: 00007FF72CE2C6AA v8::internal::GCIdleTimeHandler::GCIdleTimeHandler+4506
// 2: 00007FF72CE07416 node::MakeCallback+4534
// 3: 00007FF72CE07D90 node_module_register+2032
// 4: 00007FF72D12189E v8::internal::FatalProcessOutOfMemory+846
// 5: 00007FF72D1217CF v8::internal::FatalProcessOutOfMemory+639
// 6: 00007FF72D307F94 v8::internal::Heap::MaxHeapGrowingFactor+9620
// 7: 00007FF72D2FEF76 v8::internal::ScavengeJob::operator=+24550
// 8: 00007FF72D2FD5CC v8::internal::ScavengeJob::operator=+17980
// 9: 00007FF72D306317 v8::internal::Heap::MaxHeapGrowingFactor+2327
// 10: 00007FF72D306396 v8::internal::Heap::MaxHeapGrowingFactor+2454
// 11: 00007FF72D430637 v8::internal::Factory::NewFillerObject+55
// 12: 00007FF72D4AD826 v8::internal::operator<<+73494
// 13: 000001796E5DC5C1
//
// Process finished with exit code 134
/*
export type PathOf
    <T extends StringOrNumberDict,
        Path extends [ K1?, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?, K11?, K12?, K13?, K14?, K15?, K16?, K17?, K18?, K19?, K20? ],
        K1 extends keyof T,
        K2 extends keyof T[K1],
        K3 extends keyof T[K1][K2],
        K4 extends keyof T[K1][K2][K3],
        K5 extends keyof T[K1][K2][K3][K4],
        K6 extends keyof T[K1][K2][K3][K4][K5],
        K7 extends keyof T[K1][K2][K3][K4][K5][K6],
        K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
        K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
        K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
        K11 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10],
        K12 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11],
        K13 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12],
        K14 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13],
        K15 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14],
        K16 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15],
        K17 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16],
        K18 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17],
        K19 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18],
        K20 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18][K19],
        > = Path;

export function hasPath
<T extends StringOrNumberDict,
    Path extends [ K1?, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?, K11?, K12?, K13?, K14?, K15?, K16?, K17?, K18?, K19?, K20? ],
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    K7 extends keyof T[K1][K2][K3][K4][K5][K6],
    K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
    K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
    K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
    K11 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10],
    K12 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11],
    K13 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12],
    K14 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13],
    K15 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14],
    K16 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15],
    K17 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16],
    K18 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17],
    K19 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18],
    K20 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10][K11][K12][K13][K14][K15][K16][K17][K18][K19],
    >(
    root: T,
    path: Path,
    check: true|'no-check' = true,
): Path| false {
  if (check) {
    loop: for (const step of path) {
      if (step === undefined) break loop;
      if (!(step in root)) return false as any;
      root = root[step as any];
    }
  }
  return path;
}
*/
