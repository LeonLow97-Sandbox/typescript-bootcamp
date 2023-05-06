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
    - Installing *type definition* files help typescript understand how a third party library works.

## Installing Google Maps

- Type definition file
    - `npm install @types/google.maps`
- Add to the top of `index.ts`, `/// <reference types="@types/google.maps" />`
