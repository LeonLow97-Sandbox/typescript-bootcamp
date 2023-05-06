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
