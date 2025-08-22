import { LinkedList } from "./linkedList.js";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("siaka");

console.dir(list, { depth: null });
console.log(list.size());
