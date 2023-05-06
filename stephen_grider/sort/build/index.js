"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const LinkedListCollection_1 = require("./LinkedListCollection");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection("jeoXijgBeWoigadARbsc")
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)
const linkedListCollection = new LinkedListCollection_1.LinkedListCollection();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);
const sorter = new sorter_1.Sorter(linkedListCollection);
sorter.sort();
linkedListCollection.print();
