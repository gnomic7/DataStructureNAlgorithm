const LinkedList = require('./LinkedList/SinglyLinkedList');

const ll = new LinkedList(10);
ll.append(20);
ll.append(30);
ll.append(50);
ll.append(100);
ll.append(200);
ll.insert(25, 5);
console.log(ll.prettyPrint());
console.log(ll.size());
console.log(ll.search(50));
console.log(ll.search(51));
