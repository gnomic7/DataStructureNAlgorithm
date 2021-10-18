class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
  prettyPrint() {
    return `Data: ${this.data}`;
  }
}

module.exports = class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  contains(val) {
    return this.#_contains(val, this.head.nextNode);
  }
  #_contains(val, curr) {
    if (!curr) return false;
    if (curr.data === val) return true;
    return this.#_contains(val, curr.nextNode);
  }
  /**
   * Returns the node or null
   * Takes O(n) time as it has to traverse the entire list
   *
   * @param {int} value value to search for in the linkedlist
   * @returns Node|null
   */
  search(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) return current.prettyPrint();
      current = current.nextNode;
    }
    return null;
  }

  /**
   * Prepends a new head and make the head.nextNode point to the previous head
   * Takes O(1) time - as it doesn't have to traverse anything
   *
   * @param {int} data value to add to the head of the linkedList
   */
  prepend(data) {
    const newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
  /**
   * Appends a new node to the tail of the node
   * Takes O(n) time - as it traverse the entire list for the worst case
   *
   *
   * @param {int} data value to append to the tail of the linkedList
   */
  append(data) {
    let curr = this.head;
    if (!curr.nextNode) {
      curr.nextNode = new Node(data);
      return;
    }
    while (curr.nextNode) {
      curr = curr.nextNode;
    }
    curr.nextNode = new Node(data);
  }

  /**
   * Inserts the value in the correct location based on the position
   * Takes O(n) times to search for the location but O(1) to insert it
   * Overall O(n)
   *
   * @param {int} data value to store at the given position
   * @param {int} position where to insert
   * @returns void
   */
  insert(data, position) {
    if (position === 0) return this.prepend(data);
    let current = this.head;
    let idx = 1;
    while (current) {
      if (idx === position) {
        const newNode = new Node(data);
        const nextNode = current.nextNode;
        current.nextNode = newNode;
        newNode.nextNode = nextNode;
        return;
      }
      current = current.nextNode;
      idx++;
    }
  }

  /**
   * Removes a node - releases the pointer to any other nodes, if the node exists
   * GC would later remove it from the memory.
   * The prev and curr maints the states of the link
   *
   * Removing/Updating the connection takes O(1) but finding the correct  node
   * takes O(n) time. Hence the overall time complexity is O(n)
   * Since each of the recursive functions occupy space in the call stack
   * the space complexity is O(n) as well
   *
   * @param {int} data value to delete
   * @returns
   */
  remove(data) {
    return this.#_remove(data);
  }

  #_remove(data, curr = this.head, prev = new Node(null)) {
    if (!curr) return null;

    if (curr.data === data) {
      prev.nextNode = curr.nextNode;
    }
    prev = curr;
    return this.#_remove(data, curr.nextNode, prev);
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  /**
   * Visually displays the linked list with head and tail represented
   * Takes O(n) time to traverse the list and concatenation of string is O(1)
   * Overall takes O(n) times
   *
   * @returns string
   */
  prettyPrint() {
    let current = this.head;
    let store = `Head: ${current.data}`;
    while (current) {
      if (current.nextNode === null) {
        store += ` -> Tail: ${current.data}`;
        break;
      }
      // Since the Head is already printed - start printing the nextNode
      store += ` -> ${current.nextNode.data}`;
      current = current.nextNode;
    }
    return store;
  }
  print() {
    return this.#_print(this.head);
  }
  #_print(curr) {
    if (!curr) return '';
    return `${curr.data} -> ${this.#_print(curr.nextNode)}`;
  }
};
