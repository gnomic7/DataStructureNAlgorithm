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
    this.tail;
  }
  /**
   * Returns true if the value exists and visa-versa
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
   * Appends a new head and make the head.nextNode point to the previous head
   * Takes O(1) time - as it doesn't have to traverse anything
   *
   * @param {int} data value to add to the head of the linkedList
   */
  append(data) {
    const newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
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
    if (position === 0) return this.add(data);
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
};
