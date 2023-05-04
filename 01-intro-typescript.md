## What is TypeScript?

- TypeScript = JavaScript + A type system
- Helps us catch errors during development.
- Uses 'type annotations' to analyze our code.
- Only active **during development**.
  - Browser and NodeJS doesn't know what TypeScript is.
  - Browser executes plain JavaScript and has no idea we wrote TypeScript.
  - Compiles TypeScript to JavaScript.
- Doesn't provide any performance optimization.
- Writing TypeScript is the same as writing JavaScript with some "extra documentation".

## Install TypeScript Compiler

- `npm install -g typescript ts-node`
- For Mac: `sudo npm install -g typescript ts-node`
- To check if it has been installed
  - `tsc --help`
  - `tsc --version`

## Install Axios

- `npm install axios@0.27.2`

## First Application

- Make a network request to fetch some JSON and print the result.
- Just a basic thing to see what TypeScript can do.
- Link to API: `jsonplaceholder.typicode.com`
- Compile TypeScript to JavaScript and run JavaScript
  - `tsc index.ts` then `node index.js`
  - OR `ts-node index.ts`
