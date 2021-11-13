/**
 * The root (parent) node MUST be the largest value recursively than its children
 *
 * @class MaxHeap
 */
// Write a code for max heap in javascript
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * @param {*} value
   * @memberof MaxHeap
   */
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  /**
   * @memberof MaxHeap
   */
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
      }
      index = parentIndex;
    }
  }

  /**
   * @memberof MaxHeap
   */
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  /**
   * @memberof MaxHeap
   */
  bubbleDown() {
    let index = 0;
    while (index < this.heap.length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild = this.heap[leftChildIndex];
      let rightChild = this.heap[rightChildIndex];
      let swapIndex = null;
      if (leftChild && rightChild) {
      }
    }
  }
}
