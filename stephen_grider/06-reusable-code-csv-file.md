# Project

- Extracting data from a `.csv` file and parsing it in JavaScript.

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
