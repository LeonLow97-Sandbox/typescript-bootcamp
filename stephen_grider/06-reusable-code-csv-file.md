# Project

- Extracting data from a `.csv` file and parsing it in JavaScript.
- Run `npm start`

## Steps

- Load --> Parse --> Analyze --> Report
- Load: Node Std Lib
  - [fs.ReadFileSync](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options)

## `enum` in TypeScript

- Enums follow near-identical syntax rules as normal objects.
- Creates an object with the same keys and values when converted from TS to JS.
- Primary goal is to signal to other engineers that these are all closely related values.
- Use whenever we have a small fixed set of values that are closely related and known at compile time.
  - If the values can only be known after a network request is sent, then don't use enum.
- Object that stores very closely related values.
- Some people may use object literals but those are usually for storing some sort of data. (in JavaScript)

```js
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
```

## Type Assertion on enum

- `row[5] as MatchResult`

## Generics

- Like function arguments, but for types in class/function definitions.
- Allows us to define the type of a property/argument/return value at a future point.
- Generics are like function arguments.
- Used heavily when writing _reusable_ code.
- In Convention, we use `T` for Generic Types.

```ts
// To customize how the class works
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;

const holdString = new HoldAnything<string>();
holdString.data = 'iasdfdf';
```

```ts
// In Convention, we use `T` for Generic Types
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  ...
}
```

## Inheritance vs Composition

- Code reuse.
- Inheritance:
  - Parent `abstract` class
  - Child class `extends` the parent class.
  - Inheritance is characterized by a **'is a'** relationship between 2 classes.
    - E.g., `MatchReader` is a `CsvFileReader` as MatchReader has all the properties and methods of a CsvFileReader.
- Composition
  - Uses interface
  - Composition is characterized by a **'has a'** relationship between 2 classes.
