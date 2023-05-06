## Running Parcel

- Tool to help us run Typescript in the browser.
- To install parcel: `npm install -g parcel-bundler`
- To run parcel: `npx parcel index.html`

## Using `faker` to generate random data

- `npm install @faker-js/faker`
- `import { faker } from '@faker-js/faker';`
- [GitHub Link](https://github.com/faker-js/faker)
- `npm install @types/faker`
  - Include type definition for typescript.
  - Installing _type definition_ files help typescript understand how a third party library works.

## Installing Google Maps

- Type definition file
  - `npm install @types/google.maps`
- Add to the top of `index.ts`, `/// <reference types="@types/google.maps" />`

## Project Folder

- `/maps/index.ts`

## Type Guards

- Use Type Guard when we want to restore access to a set of properties in a union type.
    - `constructor(public collection: number[] | string) {}`
- `typeof`: number, string, boolean, symbol
- `instanceof`: every other value that is created with a constructor function.

```ts
if (this.collection instanceof Array) {}
if (typeof this.collection === 'string') {}
```
