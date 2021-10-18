const { inspect } = require('util');
/**
 * Binary Search Tree - Restrictions
 * 1. At the most, an edge could have two child edges
 * 2. Edge at the left must be smaller than the parent edge and the one on the right must be greater
 * 3. Must not have duplicate
 * 4.
 */
class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const searchTree = (data, node) => {
  // Already in the tree, do nothing
  if (data === node.data) return null;
  if (data < node.data) {
    if (!node.left) node.left = new Node(data);
    else searchTree(data, node.left);
  } else {
    if (!node.right) node.right = new Node(data);
    else searchTree(data, node.right);
  }
};
class BinarySearchTree {
  constructor(data) {
    this.root = new Node(data);
  }
  // If the root is empty - add the right or left
  // Insertsion MUST begin from the root node
  // If the root is not empty - traverse left or right based on the value of the data
  insert(data) {
    const current = this.root;
    searchTree(data, current);
  }
}

const tree = new BinarySearchTree(10);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.insert(6);
// tree.insert(7);
// tree.insert(8);
// tree.insert(9);

tree.insert(6);
tree.insert(15);
tree.insert(13);
tree.insert(4);
tree.insert(7);
tree.insert(16);
tree.insert(12);
tree.insert(14);
tree.insert(13);
tree.insert(17);
tree.insert(9);

console.log(inspect(tree, false, null));
