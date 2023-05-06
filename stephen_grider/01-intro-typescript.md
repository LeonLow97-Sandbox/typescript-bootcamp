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

## Why should we use TypeScript?

- Type Safety:
  - TypeScript provides type annotations that help catch potential errors during development.
  - This makes it easier to debug and maintain code as it grows in size and complexity.
  - With TypeScript, you can detect type-related issues early in the development process, reducing the number of bugs that make it into production.
- Better Tooling:
  - With TypeScript, you get better tooling support in your code editor.
  - TypeScript helps you to get better IntelliSense and code completion suggestions, making it easier to write and understand code.
- Improved Code Readability:
  - TypeScript allows developers to write more expressive and readable code.
  - With the help of type annotations, code becomes more self-documenting, which helps to improve the overall code readability.
- Better Scalability:
  - TypeScript helps to make larger codebases more scalable and maintainable.
  - With the help of type annotations, it's easier to understand the flow of data in large codebases.
  - This helps to reduce the complexity of code and make it easier to maintain.

## Design Patterns with TS

- How do we use interfaces to write reusable code?

## Types

- Easy way to refer to the different properties + functions that a value has.
  - E.g., "red"
    - It's a string
    - It is a value that has all the properties and methods that we assume that a string has.

## Basics Types

- `string`
- `number`
  - .00025, -20, 4000000
- `boolean`
- `Date`
  - new Date()
- `Todo`: { id: 1, completed: true, title: "Trash" }

## Primitive Types vs Object Types

- Primitive Types
  - number, boolean, void, undefined, string, symbol, null
- Object Types
  - functions, arrays, classes, objects

## Why do we care about Types?

- Types are used by the TypeScript Compiler to analyze our code for errors.
- Types allow other engineers to understand what values are flowing around our codebase.
  - E.g., what argument types are passed into the functions

## Customise how Typescript compiler builds JavaScript files

- Run `tsc --init`
  - Creates `tsconfig.json` file.
    - `"outDir"` represents the built JavaScript files after typescript compiles.
    - `"rootDir"` represents typescript files.
- Run `tsc -w` to compile the typescript files continuously.
- `npm init --y`
- `npm install nodemon concurrently`
  - start up typescript compiler and run node.
  - In `package.json`:
  ```js
    "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
  ```
