import { Node } from "./node.js";
export class LinkedList {
  constructor() {}

  append(value) {
    if (!Object.keys(this).length) {
      this.head = new Node(value);
    } else {
      let lastNode = this.head;
      while (lastNode.nextNode !== null) {
        lastNode = lastNode.nextNode;
      }
      lastNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    const currentHead = this.head;
    this.head = new Node(value);
    this.head.nextNode = currentHead;
  }
}
