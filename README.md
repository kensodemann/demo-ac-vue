# Error when AC is Included in `@ionic/vue` Application

- clone this repo
- `npm i`
- `npm run test:dev` or `npm run test:unit` (latter just runs the tests once)

Full error:

```
 FAIL  tests/unit/services/Auth.spec.ts
  ● Test suite failed to run

    TypeError: Class extends value undefined is not a constructor or null

      3 | // This causes a "TypeError: Class extends value undefined is not a constructor or null"
      4 | // error in the test
    > 5 | export class Auth extends IonicAuth {
        |                           ^
      6 |   constructor() {
      7 |     super({
      8 |       authConfig: 'azure',

      at Object.<anonymous> (src/services/Auth.ts:5:27)
      at Object.<anonymous> (tests/unit/services/Auth.spec.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.496s
Ran all test suites related to changed files.
```

See the `src/services/Auth.ts` file. You can switch between AC and non-AC class (test will work without AC)
