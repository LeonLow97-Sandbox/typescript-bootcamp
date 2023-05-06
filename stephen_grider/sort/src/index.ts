import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("jeoXijgBeWoigadARbsc")
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);

const sorter = new Sorter(linkedListCollection);
sorter.sort();
linkedListCollection.print();
