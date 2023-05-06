import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

console.log();

const charactersCollection = new CharactersCollection('jeoXijgBeWoigadARbsc');
charactersCollection.sort();
console.log(charactersCollection.data);

console.log();

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);

linkedListCollection.sort();
linkedListCollection.print();
