Here I have learnt some more basic details of typescript, like:

1. Type annotations
2. Arrow functions
3. Interfaces
4. Classes
5. Constructor
6. Access modifiers
7. Properties
8. Modules

-> type and interfaces

 it seems that the only reason to choose an interface over a type alias is declaration merging 

Declaration merging
Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface (with members of all declarations being merged).

// These two declarations become:
// interface Point { x: number; y: number; }
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };
