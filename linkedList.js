import { Node } from "./node.js";
export class LinkedList {
  #head;
  constructor() {
    this.#head = null;
  }

  append(value) {
    if (!this.#head) {
      this.#head = new Node(value);
      return;
    }
    let lastNode = this.#head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    lastNode.nextNode = new Node(value);
  }

  prepend(value) {
    if (!this.#head) {
      this.#head = new Node(value);
      return;
    }
    const currentHead = this.#head;
    this.#head = new Node(value);
    this.#head.nextNode = currentHead;
  }

  size() {
    if (!this.#head) return "The list is empty !";
    let size = 1;
    let currentNode = this.#head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    return `This list has ${size} nodes !`;
  }

  get head() {
    if (!this.#head) return "The list is empty !";
    return this.#head;
  }
}
