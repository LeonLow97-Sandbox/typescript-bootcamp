# Interfaces

- Interfaces + Classes
- **Interfaces**:
    - Creates a new type, describing the property names and value types of an object.
- Used to fix long annotations.

```ts
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
```

## Syntax Around Interfaces

- Can put basic types, functions in interfaces.
- Checks if the argument passed in as the interface satisfies whatever is in the interface.
- Objects must satisfy the interface to work with some function.

## General Strategy for Reusable Code in TS

- Create function that accept argument that are typed with *interfaces*.
- Objects/classes can decide to 'implement' a given interface to work with a function.