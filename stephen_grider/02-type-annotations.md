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