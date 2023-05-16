## Type annotations vs Type inference

- Type annotations: We (developers) tell TypeScript the type.
- Type inference: Typescript guesses the type.
  - Have to initialize and variable and declare it on the same line. Otherwise, type `any`.

## Annotations with Variables

- Go to `variables.ts` file.

## When should we ues Type Annotations?

1. When a function returns the `any` type and we need to clarify the value.
   - Typescript is unable to know what type will be returned, so it just gives the `any` type.
2. When we declare a variable on one line the initialize it later.
3.

## `any` type

- `any` is a type.
- Means TS has no idea what this is - can't check for correct property references.
- **AVOID variables with `any` at all costs.**

## Type annotations and Type inference for functions

- Type annotations
  - Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return.
  - Always add `return` annotations to avoid future errors.
- Type inference
  - Typescript tries to figure out what type of value a function will return.
  - Type inference working for function outputs, but we won't use it.

## Typed Arrays

- Arrays where each element is some **consistent type of value**.

```ts
// Type inference shows array with type `string[]`
const carMakers = ['ford', 'toyota', 'mercedes'];

// If empty array, it shows type `any` for type inference, so add the annotation.
const carMakers: string[] = [];
```

## Where to use Typed Arrays?

- Any time we need to represent a collection of records with some arbitrary sort order.

## What is a Tuple?

- Array-like structure where each element represents some property of a record.
- Many different types of data.

## Why Tuples?

- Rarely used in Typescript.
- Used to represent arrays.
- Difficult to understand what we are representing in a tuple:
  ```ts
  // What are these specifications? Difficult to understand.
  const carSpecs: [number, number] = [400, 3354];
  ```
