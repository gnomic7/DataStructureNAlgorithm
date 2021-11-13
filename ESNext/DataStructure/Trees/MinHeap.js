/**
 * MinHeap must have the parent node's value MUST be recursively smaller than any child/ren nodes
 *
 * @class MinHeap
 */
// MinHeap code in javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * @param {*} value
   * @memberof MinHeap
   */
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  /**
   * @param {*} value
   * @memberof MinHeap
   */
  remove(value) {
    const index = this.heap.indexOf(value);
    if (index === -1) return;
    this.swap(index, this.heap.length - 1);
    this.heap.pop();
    this.bubbleDown(index);
  }

  /**
   * @param {*} index
   * @memberof MinHeap
   */
  bubbleUp(index) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.bubbleUp(parentIndex);
    }
  }

  /**
   * @param {*} index
   * @memberof MinHeap
   */
  bubbleDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const leftChild = this.heap[leftChildIndex];
    const rightChild = this.heap[rightChildIndex];
    const parent = this.heap[index];
    if (leftChild && rightChild) {
      if (leftChild < rightChild && leftChild < parent) {
        this.swap(index, leftChildIndex);
        this.bubbleDown(leftChildIndex);
      } else if (rightChild < leftChild && rightChild < parent) {
        this.swap(index, rightChildIndex);
      }
    }
  }
}
