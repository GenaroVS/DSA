class MaxHeap {
  constructor(arr = null) {
    this.storage = arr || [];
    this.size = this.storage.length;
  }

  fullHeapify() {
    for (var i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(i, size = this.size) {
    var largest = i;
    var left = this.leftChild(i);
    var right = this.rightChild(i);

    if (left < size && this.storage[left] > this.storage[largest]) {
      largest = left;
    }
    if (right < size && this.storage[right] > this.storage[largest]) {
      largest = right;
    }
    if (largest !== i) {
      this.swap(largest, i);
      this.heapify(largest, size);
    }
  }

  bubbleUp(i) {
    var parent = this.parentPos(i);
    while (i > 0 && this.storage[parent] < this.storage[i]) {
      this.swap(i, parent);
      i = parent;
      parent = this.parentPos(i);
    }
  }

  heapSort() {
    for (var i = this.size - 1; i >= 1; i--) {
      this.swap(0, i);
      this.heapify(0, i);
    }
  }

  removeMax() {
    if (this.size < 1) return null;
    this.swap(0, this.size - 1);
    var max = this.storage.pop();
    this.heapify(0);
    return max;
  }

  setItem(i, value) {
    if (value < this.storage[i]) {
      this.storage[i] = value
      this.heapify(i);
    } else if (value > this.storage[i]) {
      this.storage[i] = value
      this.bubbleUp(i, value);
    }
  }

  insertItem(value) {
    this.storage.push(value);
    this.bubbleUp(this.size - 1);
  }

  parentPos(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return i * 2 + 1;
  }

  rightChild(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    var temp = this.storage[i];
    this.storage[i] = this.storage[j];
    this.storage[j] = temp;
  }
}


/* var arr = [4,7,3,9,1,2,8,5,6];
var heap = new MaxHeap(arr);
heap.fullHeapify()
console.log(heap.storage); // 9, 7, 8, 6, 1, 2, 3, 5, 4
heap.removeMax();
console.log(heap.storage); // 8, 7, 4, 6, 1, 2, 3, 5
heap.setItem(6, 10);
console.log(heap.storage); // 10, 7, 8, 6, 1, 2, 4, 5
heap.setItem(2, 3);
console.log(heap.storage); // 10, 7, 4, 6, 1, 2, 3, 5
heap.insertItem(9);
console.log(heap.storage); // 10, 9, 4, 7, 1, 2, 3, 5, 6

var arr2 = [10, 9, 4, 7, 1, 2, 3, 5, 6]
var heap2 = new MaxHeap(arr2);
heap2.heapSort();
console.log(heap2.storage); // 10, 9, 4, 7, 1, 2, 3, 5, 6 */




