# Classes

- Blueprint to create an object with some fields (values) and method (functions) to represent a 'thing'.
- When overriding methods in child class, cannot change the modifier of the method.

## Modifiers in Classes

|Modifiers|Description|
|:-:|:-:|
|`public`|This method can be called any where, any time.|
|`private`|This method can only be called by other method in this class.|
|`protected`|This method can be called by other methods in this class, or by other methods in child classes.|

## Constructor in Classes

```ts
// Long Syntax
class Vehicle {
  color: string;

  // executed right when the instance of class is created
  constructor(color: string) {
    this.color = color;
  }
}

// Shorter syntax
class Vehicle {
  constructor(public color: string) {}
}
```

## Abstract Classes (For `sorter.ts`)

- **Can't be used to create an object directly**.
- Only used as a parent class.
- Can contain real implementation for some methods.
  - `sort()`
- The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods).
  - methods from the child class.
- Can make child classes promise to implement some other method.

## Interfaces vs Abstract class

- Interfaces
  - Sets up a contract between different classes.
  - Use when we have very different objects that we want to work together.
  - Promotes *loose coupling*.
- Inheritance / Abstract Classes
  - Sets up a contract between different classes.
  - Use when we are trying to build up a definition of an object.
  - *Strongly couples* classes together.
