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

  get tail() {
    if (!this.#head) return "The list is empty !";
    let lastNode = this.#head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  at(index) {
    if (!this.#head) return "The list is empty !";
    let targetedNode = null;
    let count = 0;
    let currentNode = this.#head;
    while (currentNode && !targetedNode) {
      if (index === count) targetedNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }
    return targetedNode ? targetedNode : "No node at that index !";
  }

  pop() {
    if (!this.#head) return "The list is empty !";
    if (!this.#head.nextNode) {
      this.#head = null;
    } else {
      let node = this.#head.nextNode;
      let previous = this.#head;
      while (node !== null) {
        if (node.nextNode === null) {
          previous.nextNode = null;
          return;
        }
        previous = node;
        node = node.nextNode;
      }
    }
  }

  contains(value) {
    if (!this.#head) return "The list is empty !";
    let isContains = false;
    let node = this.#head;
    while (node.nextNode !== null) {
      if (node.value === value) {
        return (isContains = true);
      }
      node = node.nextNode;
    }
    return isContains;
  }

  find(value) {
    if (!this.#head) return "The list is empty !";
    let index = 0;
    let node = this.#head;
    while (node !== null) {
      if (node.value === value) {
        return `Found at index : ${index}`;
      }
      index++;
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    if (!this.#head) return "The list is empty !";
    let listString = `( ${this.#head.value} ) --> `;
    let node = this.#head.nextNode;
    while (node !== null) {
      listString += `( ${node.value} ) --> `;
      node = node.nextNode;
    }
    return listString + null;
  }
}
