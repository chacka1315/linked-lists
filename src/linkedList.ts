import { Node } from "./node.js";
import { NodeInterface } from "./types.js";

export class LinkedList<T = unknown> {
  #head:NodeInterface | null;
  constructor() {
    this.#head = null;
  }

  append(value:T) {
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

  prepend(value:T) {
    if (!this.#head) {
      this.#head = new Node(value);
      return;
    }
    const currentHead = this.#head;
    this.#head = new Node(value);
    this.#head.nextNode = currentHead;
  }

  size() {
    if (!this.#head) return 0;
    let size = 1;
    let currentNode = this.#head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      size++;
    }
    return size;
  }

  get head() {
    if (!this.#head) return null;
    return this.#head;
  }

  get tail() {
    if (!this.#head) return null;
    let lastNode = this.#head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }

  at(index:number) {
    if (!this.#head) return null;
    let targetedNode:NodeInterface|null = null;
    let count = 0;
    let currentNode:NodeInterface|null = this.#head;
    while (currentNode && !targetedNode) {
      if (index === count) targetedNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }
    return targetedNode ? targetedNode : null;
  }

  pop() {
    if (!this.#head) return false;
    if (!this.#head.nextNode) {
      this.#head = null;
      return true;
    } else {
      let node = this.#head.nextNode;
      let previous = this.#head;
      while (node !== null) {
        if (node.nextNode === null) {
          previous.nextNode = null;
          return true;
        }
        previous = node;
        node = node.nextNode;
      }
    }
  }

  contains(value :T) {
    if (!this.#head) return false;
    let isContains = false;
    let node:NodeInterface|null = this.#head;
    while (node !== null) {
      if (node.value === value) {
        return (isContains = true);
      }
      node = node.nextNode;
    }
    return isContains;
  }

  find(value:T) {
    if (!this.#head) return null;
    let index = 0;
    let node:NodeInterface|null = this.#head;
    while (node !== null) {
      if (node.value === value) {
        return index;
      }
      index++;
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    if (!this.#head) return null;
    let listString = `( ${this.#head.value} ) --> `;
    let node = this.#head.nextNode;
    while (node !== null) {
      listString += `( ${node.value} ) --> `;
      node = node.nextNode;
    }
    return listString + null;
  }

  insertAt(value:T, index:number) {
    const listeSize = this.size();

    if (!this.#head) return false;
    if (index === 0) {
      this.prepend(value);
      return true;
    } else if (index > listeSize) {
      throw new Error(`Max index is ${listeSize}`);
    } else if (index === this.size()) {
      this.append(value);
      return true;
    }

    let node = this.#head.nextNode;
    let previousNode = this.#head;
    let count = 1;
    while (node !== null) {
      if (count === index) {
        const newNode = new Node(value);
        previousNode.nextNode = newNode;
        newNode.nextNode = node;
        return true;
      }
      previousNode = node;
      node = node.nextNode;
      count++;
    }
  }

  removeAt(index:number) {
    const listeSize = this.size();
    if (!this.#head) return false;
    if (index === 0) {
      this.#head = this.#head.nextNode;
      return true;
    } else if (index > listeSize - 1) {
      throw new Error(`Max index is ${listeSize - 1}`);
    } else if (index === this.size() - 1) {
      this.pop();
      return true;
    }
    let node = this.#head.nextNode;
    let previousNode = this.#head;
    let count = 1;
    while (node !== null) {
      if (count === index) {
        previousNode.nextNode = node.nextNode;
        return true;
      }
      previousNode = node;
      node = node.nextNode;
      count++;
    }
  }
}
