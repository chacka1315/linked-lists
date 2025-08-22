import { LinkedList } from "./linkedList.js";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("siaka");

console.log(list.size());
console.log(list.head);
console.log(list.tail);
list.pop();
console.log(list.tail);
