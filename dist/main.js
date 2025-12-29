import { LinkedList } from "./linkedList.js";
const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
// Expected output : ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
console.log(list.contains("turtle")); //true
console.log(list.find("turtle")); //5
console.log(list.removeAt(5)); //true
console.log(list.contains("turtle")); // false
