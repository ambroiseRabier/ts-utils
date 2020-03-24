[![Build Status](https://travis-ci.com/ambroiseRabier/ts-utils.svg?branch=master)](https://travis-ci.com/ambroiseRabier/ts-utils)
[![Coverage Status](https://coveralls.io/repos/github/ambroiseRabier/ts-utils/badge.svg)](https://coveralls.io/github/ambroiseRabier/ts-utils)

Collection of personal typescript utils.

## Installation

```shell script
npm i --save @ambroise-rabier/ts-utils
```

To have extensions available, add this line in your entrypoint (`main.ts`, `index.ts` usually).
```typescript
import '@ambroise-rabier/ts-utils';
```

Require typescript 3.7

## Content

You are invited to browse `src/lib` and `src/extensions` folders. 

## Deployement

Travis will deploy on tagged commit, however, you need to push tag first before pushing to master.

```sh
npm version x.x.x
git push --tags && git push origin master
```
