/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const x of nums) {
      this.add(x);
  }
};

KthLargest.prototype.add = function(val) {
  this.heap.offer(val);
  if (this.heap.size() > this.k) {
      this.heap.poll();
  }
  return this.heap.peek();
};

class MinHeap {
  constructor(data = []) {
      this.data = data;
      this.comparator = (a, b) => a - b;
      this.heapify();
  }

  heapify() {
      if (this.size() < 2) return;
      for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
      }
  }

  peek() {
      if (this.size() === 0) return null;
      return this.data[0];
  }

  offer(value) {
      this.data.push(value);
      this.bubbleUp(this.size() - 1);
  }

  poll() {
      if (this.size() === 0) {
          return null;
      }
      const result = this.data[0];
      const last = this.data.pop();
      if (this.size() !== 0) {
          this.data[0] = last;
          this.bubbleDown(0);
      }
      return result;
  }

  bubbleUp(index) {
      while (index > 0) {
          const parentIndex = (index - 1) >> 1;
          if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
              this.swap(index, parentIndex);
              index = parentIndex;
          } else {
              break;
          }
      }
  }

  bubbleDown(index) {
      const lastIndex = this.size() - 1;
      while (true) {
          const leftIndex = index * 2 + 1;
          const rightIndex = index * 2 + 2;
          let findIndex = index;
          if (
              leftIndex <= lastIndex &&
              this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
          ) {
              findIndex = leftIndex;
          }
          if (
              rightIndex <= lastIndex &&
              this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
          ) {
              findIndex = rightIndex;
          }
          if (index !== findIndex) {
              this.swap(index, findIndex);
              index = findIndex;
          } else {
              break;
          }
      }
  }

swap(index1, index2) {
      [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  size() {
      return this.data.length;
  }
}
// @lc code=end

