const { Node, LinkedList } = require('./SinglyLinkedList');
/**
 * Reverses the order of the linked list and return the new head
 *
 * @param {LinkedList} head Head of the linked list
 */
const reverseList = (head) => {
  let curr = head;
  let prev = new Node(null);
  while (curr) {
    const rest = curr.nextNode;
    curr.nextNode = prev;
    prev = curr;
    curr = rest;
  }
  return prev;
};

const reverseListRecur = (curr, prev = null) => {
  if (!curr) return prev;
  const next = curr.nextNode;
  curr.nextNode = prev;
  return reverseListRecur(next, curr);
};

// implementation
const ll = new LinkedList(20);

ll.append(10);
ll.append(40);
ll.append(50);
ll.append('a');
console.log(ll.prettyPrint());
const rll = reverseListRecur(ll.head);
console.log(rll.prettyPrint());
